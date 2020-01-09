//混合模式
//原型模式+构造函数模式。这种模式中，构造函数模式用于定义实例属性，而原型模式用于定义方法和共享属性
function Parent(){
    this.name = "CrazyLee"
    this.age = 24;
};
Parent.prototype.sayName=function(){
    return this.name;
};
var x = new Parent();
console.log(x.sayName());
console.log(x.age);