/**
 * Created by Hakim on 2017/1/31.
 */
var qPromise = require('q')
(function () {
    "use strict";
        var ajax = param => new qPromise((resolve,reject)=> {
            $.ajax(param)
                .done(res => {
                    if (res.state >= 0) {
                        resolve(res);
                    } else {
                        reject(res)
                    }
                })
                .fail(err => {
                    reject(err)
                })
        });

        window.customAjax = ajax

});