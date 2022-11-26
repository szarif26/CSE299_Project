const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/User");
const Spacebook = require("./db/Spacebook");
const Item = require("./db/Item")
const app = express();

app.use(express.json());
app.use(cors());

app.post("/login", async (req, resp) => {
  if (req.body.userid && req.body.password) {
    let user = await User.findOne(req.body).select("-password");
    let detector = await User.findOne(req.body).select("userid");
    if (user) {
      resp.send(user);
    } else {
      resp.send({ result: "No User Found" });
    }
  } else {
    resp.send({ result: "No User Found" });
  }
});

app.post("/spacebook", async (req, resp) => {
  let spacebook = new Spacebook(req.body);
  let result = await spacebook.save();
  resp.send(result);
});

app.post("/additem", async (req, resp) => {
  let item = new Item(req.body);
  let result = await item.save();
  resp.send(result);
});



app.get("/",(req,resp)=>{
  resp.send("hi");
});

app.listen(4000);

