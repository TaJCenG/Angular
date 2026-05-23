"use strict";
class class10 {
    db_fun() {
        return "MYSQL DB Connection";
    }
}
class class11 extends class10 {
    db_fun() {
        return "ORACLE DB Connection";
    }
}
class class12 extends class10 {
    db_fun() {
        return super.db_fun();
    }
}
var obj10 = new class12();
console.log("console : ", obj10.db_fun());
console.log(new class12().db_fun());
class staticClass {
    static wish = "Static work";
    // constructor(){
    //     this.wish= "wish";
    // }
    static getwish() {
        return this.wish;
    }
}
console.log(staticClass.wish);
console.log(staticClass.getwish());
class nonInterfaceclass {
    tech = "Java";
}
let objop = {
    tech: "Angular"
};
let objop1 = {
    tech: "SpringBoot"
};
console.log(new nonInterfaceclass().tech);
console.log(objop.tech);
console.log(objop1.tech);
let objInterface = {
    skill1: "java",
    skill2: "Springboot",
    skill3: "Microservices"
};
let objInterf = {
    skill1: "Angular",
    skill2: "TypeScript",
    skill3: "JavaScript"
};
console.log(objInterface.skill1, objInterface.skill2, objInterface.skill3);
console.log(objInterf.skill1, objInterf.skill2, objInterf.skill3);
