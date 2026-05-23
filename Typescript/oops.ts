class class10{

    public db_fun():string{
        return "MYSQL DB Connection";
    }
}

class class11 extends class10{
    public db_fun():string{
        return "ORACLE DB Connection";
    }
}

class class12 extends class10{
    public db_fun():string{
        return super.db_fun();
    }
}

var obj10:class12 = new class12();
console.log("console : ", obj10.db_fun())
console.log(new class12().db_fun())

class staticClass{
    static wish:string="Static work";

    // constructor(){
    //     this.wish= "wish";
    // }

    static getwish():string{
        return this.wish;
    }
}
    console.log(staticClass.wish);
    console.log(staticClass.getwish());

interface interface1{
    tech:string;
}
class nonInterfaceclass implements interface1{
    tech:string="Java";
}

let objop:interface1={
    tech:"Angular"
}

let objop1:interface1={
    tech:"SpringBoot"
}
console.log(new nonInterfaceclass().tech);
console.log(objop.tech)
console.log(objop1.tech);

interface first{
    skill1:string;
}
interface second{
    skill2:string;
}
interface three extends first,second{
    skill3:string;
}

let objInterface:three={
    skill1:"java",
    skill2:"Springboot",
    skill3:"Microservices"
}
let objInterf:three={
    skill1:"Angular",
    skill2:"TypeScript",
    skill3:"JavaScript"
}
console.log(objInterface.skill1,objInterface.skill2,objInterface.skill3)
console.log(objInterf.skill1,objInterf.skill2,objInterf.skill3)