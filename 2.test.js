//原型模式
//函数中不对属性进行定义，利用prototype属性对属性进行定义，可以让所有对象实例共享它所包含的属性及方法
function Parent(){
    Parent.prototype.name = "carzy";
    Parent.prototype.age = "24";
    Parent.prototype.sex = function(){
        var s = "女";
        console.log(s);
    }
}
var x = new Parent();
console.log(x.name);
console.log(x.sex());
console.log(typeof(x));