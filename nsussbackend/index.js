const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/User");
const Spacebook = require("./db/Spacebook");
const Item = require("./db/Item");
const Shuttlebook = require("./db/Shuttlebook");
const ConfirmedTrip = require("./db/ConfirmedTrips");
const Vehicle = require("./db/Vehicles");
const ShuttleRoute = require("./db/ShuttleRoute");
const Courses = require("./db/Courses");
const Exam = require("./db/Exam");
const Cart = require("./db/Cart");
const Attendance = require("./db/Attendance");
const Answerscript = require("./db/Answerscript");

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

//Spacebook
app.post("/spacebook", async (req, resp) => {
  let spacebook = new Spacebook(req.body);
  let result = await spacebook.save();
  resp.send(result);
});

app.get("/viewspacebook", async (req, resp) => {
  const spacebook = await Spacebook.find();
  if (spacebook.length > 0) {
    resp.send(spacebook)
  } else {
    resp.send({ result: "No Booking Found" })
  }
});

app.delete("/deleteSpacebook/:Bookingid", async (req, resp) => {
  let result = await Spacebook.deleteOne({ Bookingid: req.params.Bookingid });
  resp.send(result)
});
app.put("/Updatespacebook/:Bookingid", async (req, resp) => {
  let result = await Spacebook.updateOne(
    { Bookingid: req.params.Bookingid },
    { $set: req.body }
  )
  resp.send(result)
}
)
app.get("/spacebook/:Bookingid", async (req, resp) => {
  let result = await Spacebook.findOne({ Bookingid: req.params.Bookingid })
  if (result) {
    resp.send(result)
  }
  else {
    resp.send({ "result": "No Record Found." })
  }

});

//Kashundi
app.post("/additem", async (req, resp) => {
  let item = new Item(req.body);
  let result = await item.save();
  resp.send(result);
});

app.get("/items", async (req, resp) => {
  const items = await Item.find();
  if (items.length > 0) {
    resp.send(items)
  } else {
    resp.send({ result: "No Item Found" })
  }
});

app.delete("/items/:itemId", async (req, resp) => {
  let result = await Item.deleteOne({ itemId: req.params.itemId });
  resp.send(result)
});

app.get("/item/:itemId", async (req, resp) => {
  let result = await Item.findOne({ itemId: req.params.itemId })
  if (result) {
    resp.send(result)
  }
  else {
    resp.send({ "result": "No Record Found." })
  }

});
app.put("/item/:itemId", async (req, resp) => {
  let result = await Item.updateOne(
    { itemId: req.params.itemId },
    { $set: req.body }
  )
  resp.send(result)
}
)

//kashundiuser
app.post("/cart", async (req, resp) => {
  let cart = new Cart(req.body);
  let result = await cart.save();
  resp.send(result);
});

app.get("/viewcart/:key", async (req, resp) => {
  const cart = await Cart.find({
    "$or": [
      {
        userid: { $regex: req.params.key }
      }
    ]
  });
  if (Cart.length > 0) {
    resp.send( cart)
  } else {
    resp.send({ result: "No Travels Found" })
  }
});

//search
app.get("/search/:key", async (req, resp) => {
  let result = await Item.find({
    "$or": [
      {
        name: { $regex: req.params.key }

      },
      {
        category: { $regex: req.params.key }

      }
    ]
  });
  resp.send(result);
})

//kashundiuser order
app.get("/cart/:userid", async (req, resp) => {
  let result = await Cart.findOne({ userid: req.params.userid })
  if (result) {
    resp.send(result)
  }
  else {
    resp.send({ "result": "No Record Found." })
  }

});
app.put("/order/:userid", async (req, resp) => {
  let result = await Cart.updateMany(
    { userid: req.params.userid},
    { $set: req.body }
  )
  resp.send(result)
}
)

//admin vieworderlist updatestatus delete search
app.get("/viewcart", async (req, resp) => {
  const cart = await Cart.find();
  if (cart.length > 0) {
    resp.send(cart)
  } else {
    resp.send({ result: "No Item Found" })
  }
});
app.delete("/cart/:itemId", async (req, resp) => {
  let result = await Cart.deleteMany({ itemId: req.params.itemId });
  resp.send(result)
});
app.put("/updatestatus/:itemId", async (req, resp) => {
  let result = await Cart.updateMany(
    { itemId: req.params.itemId},
    { $set: req.body }
  )
  resp.send(result)
}
)
app.get("/searchorder/:key", async (req, resp) => {
  let result = await Cart.find({
    "$or": [
      {
        name: { $regex: req.params.key }

      },
      {
        status: { $regex: req.params.key }

      },
      {
        price: { $regex: req.params.key }

      }

    ]
  });
  resp.send(result);
})

//Shuttle User
app.post("/shuttlebook", async (req, resp) => {
  let shuttlebook = new Shuttlebook(req.body);
  let result = await shuttlebook.save();
  resp.send(result);
});

app.get("/viewpasttravels/:key", async (req, resp) => {
  const shuttlebook = await Shuttlebook.find({
    "$or": [
      {
        userid: { $regex: req.params.key }
      }
    ]
  });
  if (Shuttlebook.length > 0) {
    resp.send(shuttlebook)
  } else {
    resp.send({ result: "No Travels Found" })
  }
});

//Shuttle Admin 

//Vehicle
app.post("/addvehicle", async (req, resp) => {
  let vehicle = new Vehicle(req.body);
  let result = await vehicle.save();
  resp.send(result);
});

app.get("/getVehicle", async (req, resp) => {
  const vehicle = await Vehicle.find();
  if (vehicle.length > 0) {
    resp.send(vehicle)
  } else {
    resp.send({ result: "No Vehicle Found" })
  }
});

app.delete("/deleteVehicle/:vehicleId", async (req, resp) => {
  let result = await Vehicle.deleteOne({ vehicleId: req.params.vehicleId });
  resp.send(result)
});
//Routes
app.post("/addRoute", async (req, resp) => {
  let shuttleRoute = new ShuttleRoute(req.body);
  let result = await shuttleRoute.save();
  resp.send(result);
});

app.get("/getRoute", async (req, resp) => {
  const shuttleRoute = await ShuttleRoute.find();
  if (shuttleRoute.length > 0) {
    resp.send(shuttleRoute)
  } else {
    resp.send({ result: "No Route Found" })
  }
});

app.delete("/deleteRoute/:routeId", async (req, resp) => {
  let result = await ShuttleRoute.deleteOne({ routeId: req.params.routeId });
  resp.send(result)
});

//Trips
app.get("/getTrips", async (req, resp) => {
  const shuttlebook = await Shuttlebook.find();
  if (shuttlebook.length > 0) {
    resp.send(shuttlebook)
  } else {
    resp.send({ result: "No Bookings Found" })
  }
});

app.get("/tripCount", async (req, resp) => {
  const shuttlebook = await Shuttlebook.find();
  if (shuttlebook.length > 0) {

    resp.send(shuttlebook)
  } else {
    resp.send({ result: "No Bookings Found" })
  }
});
//post booking details in assignvehicle table 
app.post("/confirmedTrip", async (req, resp) => {
  let confirmedTrip = new ConfirmedTrip(req.body);
  let result = await confirmedTrip.save();
  resp.send(result);
});

app.get("/getCTrips", async (req, resp) => {
  const confirmedTrip = await ConfirmedTrip.find();
  if (confirmedTrip.length > 0) {
    resp.send(confirmedTrip)
  } else {
    resp.send({ result: "No Bookings Found" })
  }
});


//LMS
//Faculty
//Course
app.get("/getcourse/:facultyid", async (req, resp) => {
  let result = await Courses.find({ facultyid: req.params.facultyid })
  if (result) {
    resp.send(result)
  }
  else {
    resp.send({ "result": "No Record Found." })
  }
});

app.post("/exam", async (req, resp) => {
  let exam = new Exam(req.body);
  let result = await exam.save();
  resp.send(result);
});



//Student
//Dash
app.get("/getcoursestud/:studentid", async (req, resp) => {
  let result = await Courses.find({ studentsid: req.params.studentid })
  if (result) {
    resp.send(result)
  }
  else {
    resp.send({ "result": "No Record Found." })
  }
});

//Course 
app.get("/getstudentlist/:courseid_sec", async (req, resp) => {
  let result = await Courses.find({ courseid_sec: req.params.courseid_sec })
  if (result) {
    resp.send(result)
  }
  else {
    resp.send({ "result": "No Record Found." })
  }

});

app.get("/", (req, resp) => {
  resp.send("Backend connection is available");
});
//Course 
app.get("/getcoursedetail/:courseid_sec", async (req, resp) => {
  let result = await Courses.findOne({ courseid_sec: req.params.courseid_sec })
  if (result) {
    resp.send(result)
  }
  else {
    resp.send({ "result": "No Record Found." })
  }

});
//Takeexam

app.get("/viewquestion/:key", async (req, resp) => {
  const exam = await Exam.find({
    "$or": [
      {
        courseid_sec : { $regex: req.params.key }
      }
    ]
  });
  if (Exam.length > 0) {
    resp.send(exam)
  } else {
    resp.send({ result: "No Question Found" })
  }
});
app.listen(4000);

app.post("/setAttendance", async (req, resp) => {
  let attendance = new Attendance(req.body);
  let result = await attendance.save();
  resp.send(result);
});

//Questionpaper
app.get("/exam/:examid", async (req, resp) => {
  let result = await Exam.findOne({ examid: req.params.examid })
  if (result) {
    resp.send(result)
  }
  else {
    resp.send({ "result": "No Record Found." })
  }

});
app.post("/answerscript", async (req, resp) => {
  let answerscript = new Answerscript(req.body);
  let result = await answerscript.save();
  resp.send(result);
});
app.get("/getanswer/:courseid_sec", async (req, resp) => {
  let result = await Answerscript.find({ courseid_sec: req.params.courseid_sec })
  if (result) {
    resp.send(result)
  }
  else {
    resp.send({ "result": "No Record Found." })
  }

});

app.get("/getanswerforstud/:studentid", async (req, resp) => {
  let result = await Answerscript.find({ studentid: req.params.studentid })
  if (result) {
    resp.send(result)
  }
  else {
    resp.send({ "result": "No Record Found." })
  }

});

app.get("/getanswerscript/:ansid", async (req, resp) => {
  let result = await Answerscript.findOne({ ansid: req.params.ansid })
  if (result) {
    resp.send(result)
  }
  else {
    resp.send({ "result": "No Record Found." })
  }

});

app.put("/updatemarks/:ansid", async (req, resp) => {
  let result = await Answerscript.updateOne(
    { ansid: req.params.ansid },
    { $set: req.body }
  )
  resp.send(result)
}
);