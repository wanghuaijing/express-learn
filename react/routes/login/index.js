/**
 * Created by Hakim on 2017/2/27.
 */
const login = {
    path:'/login',
    name:'login',
    component(cb){
        require.ensure(['./component/Login.vue'],() => {
            cb(require('./component/Login.vue'))
        })
    }
}

export default login