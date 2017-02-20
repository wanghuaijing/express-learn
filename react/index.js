/**
 * Created by Hakim on 2017/2/1.
 */
import http from './utils/http'

Vue.component('my-input', {
    props:['attribute'],
    template:'<input  v-model="attribute.text"/>'
})

Vue.component('my-form', {
    props:['obj','fullName','submit'],
    template:'<form>' +
    '<my-input v-for = "attribute in obj" v-bind:attribute="attribute" />' +
    '</form>'
})


var app = new Vue({
    el: '#test',
    data:{
        obj:[
            {name:'firstName',text:'123'},
            {name:'lastName',text:'sadf'},
            {name:'date',text: Date.now()},
        ],
    },
    computed:{
        fullName :{
            get:function(){
                return this.obj[0].text+ ' ' + this.obj[1].text
            }
        }
    },
    methods:{
        submit:function(){
            let obj = {
                firstName:this.obj[0].text,
                lastName:this.obj[1].text,
                date:this.obj[2].text
            }
            let result = http({
                data:obj,
                type:'post',
                url:'http://localhost:3001/api/test'
            })
            result.promise.then(res => {
                console.log(res.state)
            }).catch(err => {
                console.log(err.state)
            })

        }

    }
})

