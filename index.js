const express = require("express");
const cors = require("cors");
const User = require('./model/User');

const app = express()
app.use(cors());

app.get("/user/get", async (req, res) => {
    const name = req.query.name;
    const email = req.query.email;
    const age = req.query.age;

    const user = await User.findOne({name: name, email: email, age: age})
    
    res.send(user)
})

app.post("/user/add", (req, res) => {
  const name = req.query.name;
  const email = req.query.email;
  const age = req.query.age;

  if (!name || !email) {
    return res.status(400).send("Name and Email are required");
  }

  const newUser = new User({ name, email, age });

  newUser.save()
    .then(user => res.send("User saved: " + user.name))
    .catch(err => res.status(500).send("Error: " + err.message));
});


app.listen(3000, () => {
    console.log("Server Is Running At PORT 3000");
})