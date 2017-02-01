/**
 * Created by whj57 on 2017/1/17.
 */
(function(){
        var ajax = param =>{
            let promise = new Q.defer();
            let ajax = $.ajax(param)
                .done(res => {
                    if (res.state >= 0) {
                        promise.resolve(res);
                    } else {
                        promise.reject(res)
                    }
                })
                .fail(err => {
                    promise.reject(err)
                });
            return{
                request:ajax,
                promise:promise.promise
            };
        };
        var registerRequest = (apis)=>apis.map((api,index)=>{
            if(api.isTest){
                let apiRequest = ajax(api.config);
                return apiRequest;
            }
        });
        var executeRequest = (requests)=>requests.map(request=>{
            var result = [];
            request.promise.then(res=>{
                console.log(res)
                result.push(res)}).catch(err=>{
                    console.log(err)
                result.push(err)
            });
            return result;
        });
        var init = ($dom)=>{
            let apiRequests = registerRequest([{config:{url:'http://localhost:3000/api/products'},isTest:true}])
            apiRequests.map(apiRequest=>{
                var $li = $('<li><table></table></li>')
                var $table = $li.find('table');
                apiRequest.promise.then(res=>{
                    var data = res.Data;
                    for(var key in data){
                        var $tr = $('<tr><td>'+key+'</td>'+data[key]+'<td></td></tr>');
                        $table.append($tr);
                    }
                }).catch(err=>{
                    if(err.State){
                        var $tr = $('<tr><td>错误</td>'+err.msg+'<td></td></tr>');
                        $table.append($tr)
                    }else {
                        var $div = $('<div>'+err+'</div>');
                        $table.append($div)
                    }
                });
                $dom.append($li)
            });

        };
        var $test = $('#test');
        init($test)
    }
)();
