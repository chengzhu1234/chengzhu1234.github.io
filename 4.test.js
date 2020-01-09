//动态原型模式
//将所有信息封装在了构造函数中，而通过构造函数中初始化原型，
// 这个可以通过判断方法是否有效而选择是否需要初始化原型
function Parent(){
    this.name = "Crazy";
    this.age = 24;
    if(typeof Parent._sayname == "undefined"){
        Parent.prototype.sayname = function(){
            return this.name;
        }
        Parent._sayname = true;
    }
};
var x = new Parent();
console.log(x.sayname())