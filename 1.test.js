// 构造函数模式
// 无需在函数内部重新创建对象，而是用this指代
function Person(){
    this.name = "CrazyLee";
    this.age = "25";
    this.sex =function(){
        return "boy"
    };
}
var a = new Person();
console.log(a.name);
console.log(a.sex());