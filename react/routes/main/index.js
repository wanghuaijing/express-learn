/**
 * Created by Hakim on 2017/2/27.
 */
import routes from './routes'
const route = {
    path:'/main',
    name:'main',
    component(cb){
        require.ensure(['./component/main.vue'],() => {
            cb(require('./component/main.vue'))
        })
    },
    children:routes
}
export default route