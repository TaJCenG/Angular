const fetchUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  if (!res.ok) throw new Error("API failed");
console.log('fetchUsers called');
  return res.json();
};

const getNames = async () => {
  const users = await fetchUsers();
  console.log('getNames called');
  console.log(users.map(u => u.name));
};

getNames();

const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  console.log('Fetched users and posts');
  return res.json();
};
const loadData = async () => {
  const [users, posts] = await Promise.all([
    fetchUsers(),
    fetchPosts()
  ]);

  console.log(users.length, posts.length);
};

loadData();

const fetchUsers1 = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  return res.json();
};

const main = async () => {
  try {
    const users = await fetchUsers();
    console.log(users);
  } catch (err) {
    console.log("Handled:", err.message);
  }
};
main();

const combineData = async () => {
  const [users, posts] = await Promise.all([
    fetchUsers(),
    fetchPosts()
  ]);

  const result = users.map(user => {
    const postCount = posts.filter(p => p.userId === user.id).length;

    return {
      userName: user.name,
      postCount
    };
  });

  console.log(result);
};