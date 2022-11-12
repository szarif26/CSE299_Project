import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Adminloginpage from "./components/Login/Adminloginpage/Adminloginpage";
import Userloginpage from "./components/Login/Userloginpage/Userloginpage";
import Navbar from "./components/Navbar/Navbar";
import Bookingpage from "./components/Shuttle/Booking/Bookingpage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
        <Route path="/" exact element={<Homepage/>}/>
          <Route path="/adminloginpage" exact element={<Adminloginpage/>}/>
          <Route path="/userloginpage" exact element={<Userloginpage/>}/>
          <Route path="/bookingpage" exact element={<Bookingpage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
