"use strict";
let nam = "John";
let age = 25;
console.log(`My name is ${nam} and I am ${age} years old.`);
let isActive = true;
let users = ["A", "B"];
console.log(`Is active: ${isActive}, Users: ${users.join(", ")}`);
let person = { name: "Alice", id: 30, email: "alice@example.com" };
console.log(`Person: ${person.name}, ID: ${person.id}, Email: ${person.email}`);
function add(a, b) {
    return a + b;
}
console.log(`Sum: ${add(5, 10)}`);
const greet = (name) => {
    return "Hello " + name;
};
console.log(greet("Bob"));
class UserService {
    getUsers() {
        return [
            { id: 1, name: "A", email: "a@mail.com" },
            { id: 2, name: "B", email: "b@mail.com" }
        ];
    }
}
const getUserNames = (users) => {
    return users.map(u => u.name);
};
console.log(`User names: ${getUserNames(new UserService().getUsers()).join(", ")}`);
const service = new UserService();
const userList = service.getUsers();
const names = getUserNames(userList);
console.log(names);