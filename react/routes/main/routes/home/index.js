/**
 * Created by Hakim on 2017/2/27.
 */
const home = {
    path:'home',
    name:'home',
    component(cb){
        require.ensure(['./component/home.vue'],() => {
            cb(require('./component/home.vue'))
        })
    }
}
export default home
