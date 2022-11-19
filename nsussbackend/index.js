const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/User");
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

app.get("/",(req,resp)=>{
  resp.send("hi");
});

app.listen(5000);
