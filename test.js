//工厂模式
//在函数内部创建一个对象，给对象赋予属性及方法再将对象返回
function Person(){
    var info = new Object();
    info.name = "张三";
    info.age = "18";
    info.sex =function(){
        return "boy";
    }
    return info
}
let p1 = Person();
console.log(p1.name) ;
console.log(p1.age) ;
console.log(p1.sex());