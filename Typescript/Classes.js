"use strict";
class class1 {
    frontEnd;
    backend;
    deployment;
    constructor() {
        this.frontEnd = "Angular";
        this.backend = "SpringBoot";
        this.deployment = "AWS";
    }
    getfrontEnd() {
        return this.frontEnd;
    }
    getbackend() {
        return this.backend;
    }
    getdeployment() {
        return this.deployment;
    }
}
var obj = new class1();
console.log("FrontEnd Tech : ", obj.getfrontEnd());
console.log("Backend Tech : ", obj.getbackend());
console.log("Deployment Tech : ", obj.getdeployment());
class classtwo {
    arg1;
    arg2;
    arg3;
    constructor(arg1, arg2, arg3) {
        this.arg1 = arg1;
        this.arg2 = arg2;
        this.arg3 = arg3;
    }
}
var obj1 = new classtwo("Angular", "Springboot", "AWS");
console.log("Framework is", obj1.arg1, "and", obj1.arg2, "deploying in ", obj1.arg3);
class class3 {
    fun_one() {
        return "From fun_one 1";
    }
}
class class4 extends class3 {
    fun_two() {
        return "From fun two 2";
    }
}
var obj3 = new class4;
console.log("Calling class 1 fron class 2 object :", obj3.fun_one());
class class5 {
    my_func(arg1, arg2) {
        console.log(arg1);
        console.log(arg2);
    }
}
new class5().my_func(10, "taj");
new class5().my_func(10, 20);
