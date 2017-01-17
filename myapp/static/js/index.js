/**
 * Created by whj57 on 2017/1/17.
 */
(function(){
        var a = document.getElementById('test');
        a.style.color = 'red';
        $.ajax({
            url:'localhost:3000/api/product'
        }).done(function(res){
            console.log(res)
        }).fail(function(err){
            console.log(err)
        })
    }
)();
