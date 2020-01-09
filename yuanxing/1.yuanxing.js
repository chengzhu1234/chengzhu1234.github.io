function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.getName = function(){
    console.log(this.name)
}
