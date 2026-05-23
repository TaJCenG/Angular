let nam: string = "John";
let age: number = 25;
console.log(`My name is ${nam} and I am ${age} years old.`);

let isActive: boolean = true;
let users: string[] = ["A", "B"];
console.log(`Is active: ${isActive}, Users: ${users.join(", ")}`);

interface Person {
    name: string;
    id: number;
    email?: string; // Optional property
}
let person: Person = { name: "Alice", id: 30, email: "alice@example.com" };
console.log(`Person: ${person.name}, ID: ${person.id}, Email: ${person.email}`);


function add(a: number, b: number): number {
  return a + b;
}
console.log(`Sum: ${add(5, 10)}`);
const greet = (name: string): string => {
  return "Hello " + name;
};
console.log(greet("Bob"));

interface User {
  id: number;
  name: string;
  email: string;
}

class UserService {
  getUsers(): User[] {
    return [
      { id: 1, name: "A", email: "a@mail.com" },
      { id: 2, name: "B", email: "b@mail.com" }
    ];
  }
}

const getUserNames = (users: User[]): string[] => {
  return users.map(u => u.name);
};
console.log(`User names: ${getUserNames(new UserService().getUsers()).join(", ")}`);

const service = new UserService();
const userList = service.getUsers();

const names = getUserNames(userList);
console.log(names);

var table_name:string="products";
var column_name:string="price";
var value:number=1000;

var sql_query:string =`
SELECT * FROM ${table_name} WHERE ${column_name}=${value}
`;
console.log(sql_query);

var num_array:number[]=[1,2,3,4,5];

num_array.forEach((element,index) => {
    console.log("Index: "+index+", Value: "+element);
});

var tuparray:any[]=[25,"Taj",{Address:"AP, City:Kadapa"},'Apple'];
tuparray.forEach((element,index) => {
    console.log("Index: "+index+", Value: "+JSON.stringify(element));
});
console.log(tuparray[0]);
console.log(tuparray[1]);
console.log(tuparray[2]);
console.log(tuparray[3]);
