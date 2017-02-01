/**
 * Created by whj57 on 2017/1/17.
 */
(function(){
        var a = document.getElementById('test');
        a.style.color = 'red';
        $.ajax({
            url:'http://localhost:3000/api/products'
        }).done(function(res){
            console.log(res)
        }).fail(function(err){
            console.log(err)
        });
        $.ajax({
            type:'post',
            url:'http://localhost:3000/api/token',
            data:{
                name:'whj',
                password:'123456'
            }
        }).done(function(res){
            console.log(res)
        }).fail(function(err){
            console.log(err)
        });
    }
)();
