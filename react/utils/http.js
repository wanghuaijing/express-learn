/**
 * Created by Hakim on 2017/2/20.
 */
import Q from 'q'
import $ from 'jquery'
let ajax = param => {
    let promise = new Q.defer()
    let ajax = $.ajax(param)
        .done(res => {
            if (res.state >= 0) {
                promise.resolve(res)
            } else {
                promise.reject(res)
            }
        })
        .fail(err => {
            promise.reject(err)
        })
    return{
        request:ajax,
        promise:promise.promise
    }
}

export default ajax
