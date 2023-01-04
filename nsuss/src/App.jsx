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
import PrivateFacultyComponents from "./components/Navbar/PrivateFacultyComponent";
import Facultydashboardpage from "./components/Dashboardpage/Facultydashboardpage";
import Lmsdashboardfaculty from "./components/LMS/Faculty/Lmsdashboardfaculty";
import Lmsdashboardstudent from "./components/LMS/Student/Lmsdashboardstudent";
import Kashundiuserpage from "./components/Kashundi/Kashundiuserpage";
import Bookinglist from "./components/Adminpages/Shuttleadminpage/Bookinglist";
import Assignvehicle from "./components/Adminpages/Shuttleadminpage/Assignvehicle";
import UpdateSB from "./components/Adminpages/Spacebookadminpage/UpdateSB";
import Cart from "./components/Kashundi/Cart";
import ViewCart from "./components/Kashundi/ViewCart";
import CoursepageStud from "./components/LMS/Student/CoursepageStud";
import CoursepageFac from "./components/LMS/Faculty/CoursepageFac";
import Studentlist from "./components/LMS/Faculty/Studentlist";
import Vieworderlist from "./components/Adminpages/Kashundiadminpage/Vieworderlist";
import Updatestatus from "./components/Adminpages/Kashundiadminpage/Updatestatus";
import Order from "./components/Kashundi/Order";
import Createexam from "./components/LMS/Faculty/Createexam";
import Takeexam from "./components/LMS/Student/Takeexam";
import Questionpaper from "./components/LMS/Student/Questionpaper";
import Attendancepage from  "./components/LMS/Faculty/Attendancepage";
import Checkanswer from "./components/LMS/Faculty/Checkanswer";
import AnswerScript from "./components/LMS/Faculty/AnswerScript";
import AnswerScriptforstud from "./components/LMS/Student/AnwerScriptforstud";
import Seemarks from "./components/LMS/Student/Seemarks";



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>

          <Route element={<PrivateFacultyComponents />}>
            <Route element={<PrivateStudentComponent />}>
              <Route path="/printzonepage" exact element={<Printzonepage />} />
              <Route path="/dashboardpage" exact element={<Dashboardpage />} />
              <Route path="/lmsdashboardstudent" exact element={<Lmsdashboardstudent />} />
              <Route path="/coursepageStud/:courseid_sec" exact element={<CoursepageStud/>} />
              <Route path="/takeexam/:courseid_sec" exact element={<Takeexam/>} />
              <Route path="/questionpaper/:examid" exact element={<Questionpaper/>}/>
              <Route path="/seemarks/:studentid" exact element={<Seemarks/>}/>
              <Route path="/answerscriptforstud/:ansid" exact element={<AnswerScriptforstud/>} />

            </Route>

            <Route path="/Kashundiuserpage" exact element={<Kashundiuserpage />} />
            <Route path="/Cart/:itemId" exact element={<Cart />} />
            <Route path="/ViewCart" exact element={<ViewCart />} />
            <Route path="/Order/:userid" exact element={<Order />} />
            <Route path="/lmsdashboardfaculty" exact element={<Lmsdashboardfaculty />} />
            <Route path="/coursepageFac/:courseid_sec" exact element={<CoursepageFac/>} />
            <Route path="/studentlist/:courseid_sec" exact element={<Studentlist/>} />
            <Route path="/checkanswer/:courseid_sec" exact element={<Checkanswer/>} />
            <Route path="/answerscript/:ansid" exact element={<AnswerScript/>} />
            <Route path="/createexam/:courseid_sec" exact element={<Createexam/>} />
            <Route path="/attendancepage/:courseid_sec" exact element={<Attendancepage/>} />
            <Route path="/bookingpage" exact element={<Bookingpage />} />
            <Route path="/spacebookpage" exact element={<Spacebookpage />} />
            <Route path="/userviewcurrentbooking" exact element={<Userviewcurrentbooking />} />
            <Route path="/viewpasttravels" exact element={<Viewpasttravels />} />
            <Route path="/facultydashboardpage" exact element={<Facultydashboardpage />} />
            <Route path="/printzoneadminpage" exact element={<Printzoneadminpage />} /> </Route>

          <Route element={<PrivateKashundiComponent />}>
            <Route
              path="/kashundiadminpage"
              exact
              element={<Kashundiadminpage />}
            />
            <Route path="/Item" exact element={<Item />} />
            <Route path="/Additem" exact element={<Additem />} />
            <Route path="/Update/:itemId" exact element={<Update/>}/>
            <Route path="/Updateitem" exact element={<Updateitem />} />
            <Route path="/Vieworderlist" exact element={<Vieworderlist />} />
            <Route path="/Updatestatus/:itemId" exact element={<Updatestatus/>} />
          </Route>

          <Route element={<PrivateShuttleComponent />}>
          <Route
              path="/Assignvehicle/:route"
              exact
              element={<Assignvehicle/>}
            />
          <Route
              path="/Bookinglist"
              exact
              element={<Bookinglist/>}
            />
            <Route
              path="/shuttleadminpage"
              exact
              element={<Shuttleadminpage />}
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
            <Route
              path="/UpdateSB/:Bookingid"
              exact
              element={<UpdateSB />}
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