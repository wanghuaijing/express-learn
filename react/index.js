/**
 * Created by Hakim on 2017/2/1.
 */
import http from './utils/http'
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'hash',
    routes
})

new Vue ({
    router
}).$mount('#app')



