const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world..what's up?!!!! It's working!");
});

const users = [
  { id: 1, name: "John", age: 20, email: "abc@def.com" },
  { id: 2, name: "Kohn", age: 30, email: "bbc@def.com" },
  { id: 3, name: "Lohn", age: 40, email: "cbc@def.com" },
  { id: 4, name: "Mohn", age: 50, email: "dbc@def.com" },
  { id: 5, name: "Nohn", age: 60, email: "ebc@def.com" },
  { id: 6, name: "Oohn", age: 70, email: "fbc@def.com" },
  { id: 7, name: "Pohn", age: 80, email: "gbc@def.com" },
];

app.get("/users", (req, res) => {
   console.log('query', req.query);
   if (req.query.name) {
     const search = req.query.name.toLowerCase();
     const filteredUsers = users.filter(user => user.name.toLowerCase().includes(search));
     res.send(filteredUsers);
   }
   else {
      res.send(users);
   }
  
});

app.post("/user", (req, res) => {
  console.log(req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});

app.get("/users/:id", (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id == id);
  res.send(user);
});

app.listen(port, () => {
  console.log("Listening to port", port);
});
