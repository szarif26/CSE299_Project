import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Kashundiadminpage from "./components/Adminpages/Kashundiadminpage/Kashundiadminpage";
import Printzoneadminpage from "./components/Adminpages/Printzoneadminpage/Printzoneadminpage";
import Shuttleadminpage from "./components/Adminpages/Shuttleadminpage/Shuttleadminpage";
import Spacebookadminpage from "./components/Adminpages/Spacebookadminpage/Spacebookadminpage";
import Dashboardpage from "./components/Dashboardpage/Dashboardpage";
import Footer from "./components/Footerpage/Footerpage";
import Homepage from "./components/Homepage/Homepage";
import Userloginpage from "./components/Login/Userloginpage/Userloginpage";
import Navbar from "./components/Navbar/Navbar";
import PrivateComponents from "./components/Navbar/PrivateComponents";
import Bookingpage from "./components/Shuttle/Booking/Bookingpage";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route element={<PrivateComponents />}>
            <Route path="/bookingpage" exact element={<Bookingpage />} />
            <Route path="/dashboardpage" exact element={<Dashboardpage />} />
            <Route path="/kashundiadminpage" exact element={<Kashundiadminpage />}/>
            <Route path="/shuttleadminpage" exact element={<Shuttleadminpage />}/>
            <Route path="/spacebookadminpage" exact element={<Spacebookadminpage />}/>
            <Route path="/printzoneadminpage" exact element={<Printzoneadminpage />}/>
          </Route>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/userloginpage" exact element={<Userloginpage />} />
        </Routes>
        <Footer/>
        
      </div>
    </Router>
  );
}

export default App;
