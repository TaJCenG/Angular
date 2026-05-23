// DAY 2 — Async JavaScript (Core of Real Apps)
// 🎯 Goal

// By end of today, you must:

// Understand async flow
// Use fetch
// Use async/await
// Handle API responses

// If you fail here → stop Angular.

console.log("A");

setTimeout(() => {
  console.log("B");
}, 1000);

console.log("C");

const promise = new Promise((resolve, reject) => {
  resolve("Success");
});

promise.then(res => console.log(res));

const promise1 = new Promise((resolve, reject) => {
  reject("Error");
});

promise1.catch(err => console.log(err));

fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => console.log(data));

fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'POST',
  body: JSON.stringify({ name: "John" }),
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(res => res.json())
.then(data => console.log(data));

const getUsers = async () => {
  const res12 = await fetch('https://jsonplaceholder.typicode.com/users');
  const data12 = await res12.json();
  console.log(data12);
};

getUsers();

const getNames = async () => {
  const res13 = await fetch('https://jsonplaceholder.typicode.com/users');
  const data13 = await res13.json();

  const names13 = data13.map(u => u.name);
  console.log(names13);
};

getNames();

const getUsers1 = async () => {
  try {
    const res14 = await fetch(url);

    if (!res14.ok) {
      throw new Error("API failed");
    }

    const data14 = await res14.json();
    console.log(data14);

  } catch (err) {
    console.log(err);
  }
};

const getUsers15 = async () => {
  try {
    const res15 = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!res15.ok) throw new Error("API failed");

    const data15 = await res15.json();
    console.log(data15);

  } catch (err) {
    console.log(err);
  }
};

const getNames16 = async () => {
  try {
    const res16 = await fetch('https://jsonplaceholder.typicode.com/users');
    const data16 = await res16.json();

    const names16 = data16.map(u => u.name);
    console.log(names16);

  } catch (err) {
    console.log(err);
  }
};

const getFiltered21 = async () => {
  const res17 = await fetch('https://jsonplaceholder.typicode.com/users');
  const data17 = await res17.json();

  const filtered17 = data17.filter(u => u.id > 5);
  console.log(filtered17);
};

const createUser1 = async () => {
  try {
    const res18 = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: "YourName" })
    });

    const data18 = await res18.json();
    console.log(data18);

  } catch (err) {
    console.log(err);
  }
};

const getFilteredNames = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  const result = data
    .filter(u => u.id > 5)
    .map(u => u.name);

  console.log(result);
};

const getFiltered22 = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!res.ok) throw new Error("API failed");

    const data = await res.json();

  } catch (err) {
    console.log(err);
  }
};

const fetchUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!res.ok) throw new Error("API failed");
  return res.json();
};