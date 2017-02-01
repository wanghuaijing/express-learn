/**
 * Created by whj57 on 2017/1/19.
 */
const fn = num=>num2=>{
    if(num2){
        return fn(num*num2)
    }else {
        return num
    }
};
const mul = num=>{
    return fn(num);
};
var value = mul(2)(3)(4)(5)();

console.log(value)
