class class1{
    private frontEnd:string;
    private backend:string;
    private deployment:string;

    constructor(){
        this.frontEnd="Angular";
        this.backend="SpringBoot";
        this.deployment="AWS";
    }

    public getfrontEnd():string{
        return this.frontEnd;
    }
    public getbackend():string{
        return this.backend;
    }
    public getdeployment():string{
        return this.deployment;
    }
}


   var obj:class1= new class1();
   console.log("FrontEnd Tech : ", obj.getfrontEnd());
   console.log("Backend Tech : ", obj.getbackend());
   console.log("Deployment Tech : ", obj.getdeployment());

   class classtwo{
    constructor(public arg1:string, public arg2:string, public arg3:string){
    }
   }
   var obj1:classtwo = new classtwo("Angular", "Springboot", "AWS");

   console.log("Framework is",obj1.arg1, "and", obj1.arg2, "deploying in ", obj1.arg3);

class class3{

    public fun_one():any{
        return "From fun_one 1";
    }
}
class class4 extends class3{

    public fun_two():any{
        return "From fun two 2"
    }
}
var obj3: class4 = new class4;
console.log("Calling class 1 fron class 2 object :",obj3.fun_one());

class class5{
    public my_func(arg1:number, arg2:string):void;
    public my_func(arg1:boolean, arg2:number):void;
     public my_func(arg1:number, arg2:number):void;

    public my_func(arg1:any, arg2:any):void{
        console.log(arg1);
        console.log(arg2);
    }
}
new class5().my_func(10,"taj");
new class5().my_func(10,20);