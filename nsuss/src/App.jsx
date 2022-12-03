import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Additem from "./components/Adminpages/Kashundiadminpage/Additem";
import Item from "./components/Adminpages/Kashundiadminpage/Item";
import Kashundiadminpage from "./components/Adminpages/Kashundiadminpage/Kashundiadminpage";
import Update from "./components/Adminpages/Kashundiadminpage/Update";
import Updateitem from "./components/Adminpages/Kashundiadminpage/Updateitem";
import Printzoneadminpage from "./components/Adminpages/Printzoneadminpage/Printzoneadminpage";
import Routespage from "./components/Adminpages/Shuttleadminpage/Routespage";
import Shuttleadminpage from "./components/Adminpages/Shuttleadminpage/Shuttleadminpage";
import Tripspage from "./components/Adminpages/Shuttleadminpage/Tripspage";
import Vehiclepage from "./components/Adminpages/Shuttleadminpage/Vehiclepage";
import Spacebookadminpage from "./components/Adminpages/Spacebookadminpage/Spacebookadminpage";
import Dashboardpage from "./components/Dashboardpage/Dashboardpage";
import Footer from "./components/Footerpage/Footerpage";
import Homepage from "./components/Homepage/Homepage";
import Userloginpage from "./components/Login/Userloginpage/Userloginpage";
import Navbar from "./components/Navbar/Navbar";
import PrivateKashundiComponent from "./components/Navbar/PrivateKashundiComponent";
import PrivateShuttleComponent from "./components/Navbar/PrivateShuttleComponent";
import PrivateSpacebookComponent from "./components/Navbar/PrivateSpacebookComponent";
import PrivateStudentComponent from "./components/Navbar/PrivateStudentComponent";
import Printzonepage from "./components/Printzone/Printzoneuserpage";
import Bookingpage from "./components/Shuttle/Bookingpage";
import Viewpasttravels from "./components/Shuttle/Viewpasttravels";
import Spacebookpage from "./components/Spcaebook/Spacebookuserpage";
import Userviewcurrentbooking from "./components/Spcaebook/Userviewcurrentbookings";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route element={<PrivateStudentComponent />}>
            <Route path="/bookingpage" exact element={<Bookingpage />} />
            <Route path="/dashboardpage" exact element={<Dashboardpage />} />
            <Route path="/printzonepage" exact element={<Printzonepage />} />
            <Route path="/spacebookpage" exact element={<Spacebookpage />} />
            <Route path="/userviewcurrentbooking" exact element={<Userviewcurrentbooking />} />
            <Route path="/viewpasttravels" exact element={<Viewpasttravels />} />
            
            <Route path="/printzoneadminpage" exact element={<Printzoneadminpage />}/> </Route>
            
          <Route element={<PrivateKashundiComponent />}>
            <Route
              path="/kashundiadminpage"
              exact
              element={<Kashundiadminpage />}
            />
            <Route path="/Item" exact element={<Item />} />
            <Route path="/Additem" exact element={<Additem />} />
            <Route path="/Updateitem" exact element={<Updateitem />} />
            <Route path ="/Update/:itemId" exact element={<Update/>}/>
          </Route>

          <Route element={<PrivateShuttleComponent />}>
            <Route
              path="/shuttleadminpage"
              exact
              element={<Shuttleadminpage />}
            />
            <Route
              path="/tripspage"
              exact
              element={<Tripspage/>}
            />
            <Route
              path="/routespage"
              exact
              element={<Routespage />}
            />
            <Route
              path="/vehiclepage"
              exact
              element={<Vehiclepage />}
            />
          </Route>

          <Route element={<PrivateSpacebookComponent />}>
          <Route
              path="/spacebookadminpage"
              exact
              element={<Spacebookadminpage />}
            />
          </Route>

          <Route path="/" exact element={<Homepage />} />
          <Route path="/userloginpage" exact element={<Userloginpage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;