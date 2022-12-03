const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/User");
const Spacebook = require("./db/Spacebook");
const Item = require("./db/Item");
const Shuttlebook = require("./db/Shuttlebook");
const Vehicle = require("./db/Vehicles");
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

app.get("/viewspacebook",async (req,resp)=>{
  const spacebook = await Spacebook.find();
  if(spacebook.length>0){
    resp.send(spacebook)
  }else{
    resp.send({result :"No Booking Found"})
  }
  });

app.post("/additem", async (req, resp) => {
  let item = new Item(req.body);
  let result = await item.save();
  resp.send(result);
});

app.get("/items",async (req,resp)=>{
const items = await Item.find();
if(items.length>0){
  resp.send(items)
}else{
  resp.send({result :"No Item Found"})
}
});

app.delete("/items/:itemId", async (req, resp) => {
  let result = await Item.deleteOne({ itemId: req.params.itemId });
  resp.send(result)
});

app.get("/item/:itemId",async(req,resp)=>{
  let result = await Item.findOne({itemId: req.params.itemId})
  if(result){
    resp.send(result)
  }
  else{
    resp.send({"result":"No Record Found."})
  }

});
app.put("/item/:itemId",async (req,resp)=>{
  let result= await Item.updateOne(
    {itemId:req.params.itemId},
    {$set: req.body}
  )
  resp.send(result)
}
)

app.post("/shuttlebook", async (req, resp) => {
  let shuttlebook = new Shuttlebook(req.body);
  let result = await shuttlebook.save();
  resp.send(result);
});

app.get("/viewpasttravels/:key",async (req,resp)=>{
  const shuttlebook = await Shuttlebook.find({
    "$or" :[
            {
              userid : {$regex:req.params.key}
            }
    ]
  });
  if(Shuttlebook.length>0){
    resp.send(shuttlebook)
  }else{
    resp.send({result :"No Travels Found"})
  }
  });

//Vehicle
  app.post("/addvehicle", async (req, resp) => {
    let vehicle = new Vehicle(req.body);
    let result = await vehicle.save();
    resp.send(result);
  });

  app.get("/getVehicle",async (req,resp)=>{
    const vehicle = await Vehicle.find();
    if(vehicle.length>0){
      resp.send(vehicle)
    }else{
      resp.send({result :"No Vehicle Found"})
    }
    });

  app.delete("/deleteVehicle/:vehicleId", async (req, resp) => {
      let result = await Vehicle.deleteOne({ vehicleId: req.params.vehicleId });
      resp.send(result)
    });


app.get("/",(req,resp)=>{
  resp.send("Backend connection is available");
});

app.listen(4000);

