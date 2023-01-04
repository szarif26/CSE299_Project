import React, { useEffect, useState } from "react";
import { useAccordionButton } from "react-bootstrap";
import { useNavigate, useParams } from 'react-router-dom';
import classes from "./Assignvehicle.module.css";

const Assignvehicle = () => {
    const [confirmedTrip, setConfirmedTrip] = useState([]);
    const [route, setRoute] = useState("");
    const [way, setWay] = useState("");
    const [timeslot, setTimeslot] = useState("");
    const [date, setDate] = useState("");
    const [vehicle, setVehicle] = useState("");
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getConfirmedTrips()
    }, [])

    const getConfirmedTrips = async () => {
        console.warn(params)
        let result = await fetch('http://localhost:4000/getCTrips');
        result = await result.json();
        console.warn(result);
        setConfirmedTrip(result);
    }

    const handleAssignVehicle = async () => {
        console.warn(route, way, timeslot, date, vehicle);
        let result = await fetch("http://localhost:4000/confirmedTrip", {
            method: 'post',
            body: JSON.stringify({ route, way, timeslot, date, vehicle }),
            headers: {
                'Content-Type': 'Application/json'
            }
        });
        getConfirmedTrips();
        result = await result.json()
        console.warn(result)
        if (result) {
            navigate("/Assignvehicle/:route");
        }
        alert("Successfully Confirmed The Trip");
    };

    {var startday = new Date();
        startday.setDate(startday.getDate() + 1);
        var dd = startday.getDate();
        var mm = startday.getMonth() + 1; //January is 0!
        var yyyy = startday.getFullYear();
        if (dd < 10) {
          dd = '0' + dd
        }
        if (mm < 10) {
          mm = '0' + mm
        }
        startday = yyyy + '-' + mm + '-' + dd;}
        {var finalday = new Date();
          finalday.setDate(finalday.getDate() + 14);
          var fdd = finalday.getDate();
          var fmm = finalday.getMonth() + 1; //January is 0!
          var fyyyy = finalday.getFullYear();
          if (fdd < 10) {
            fdd = '0' + fdd
          }
          if (fmm < 10) {
            fmm = '0' + fmm
          }
          finalday = fyyyy + '-' + fmm + '-' + fdd;}  

    return (
        <div className={classes.background}>
            <div className={classes.Item_List}>
                <h1 className={classes.h1}> Assign Vehicle:</h1>
                <br></br>
                <div className={classes.display}>
                    <label className={classes.formlabel}>Route</label>
                    <select onChange={(e) => setRoute(e.target.value)}
                        value={route} className={classes.formselect} name="Area">
                        <option
                            className={classes.formselect}
                            value=""
                            disabled
                            selected
                            hidden
                        >
                            Select a Route
                        </option>
                        <option className={classes.formselect} value="Uttara">
                            Uttara
                        </option>
                        <option className={classes.formselect} value="Dhanmondi">
                            Dhanmondi
                        </option>
                        <option className={classes.formselect} value="Jatrabari">
                            Jatrabari
                        </option>
                        <option className={classes.formselect} value="Mirpur">
                            Mirpur
                        </option>
                        <option className={classes.formselect} value="Azimpur">
                            Azimpur
                        </option>
                    </select>

                    <label className={classes.formlabel}>Way</label>
                    <select onChange={(e) => setWay(e.target.value)}
                        value={way} className={classes.formselect} name="Way">
                        <option
                            className={classes.formselect}
                            value=""
                            disabled
                            selected
                            hidden
                        >
                            Select a Way
                        </option>
                        <option className={classes.formselect} value="Arrival">
                            Arrival
                        </option>
                        <option className={classes.formselect} value="Departure">
                            Departure
                        </option>
                    </select>

                    <label className={classes.formlabel}>Time Slot</label>
                    <select onChange={(e) => setTimeslot(e.target.value)}
                        value={timeslot} className={classes.formselect} name="time_slot">
                        <option
                            className={classes.formselect}
                            value=""
                            disabled
                            selected
                            hidden
                        >
                            Select a Slot
                        </option>
                        <option className={classes.formselect} value="8:00AM">
                            8:00AM
                        </option>
                        <option className={classes.formselect} value="9:40AM">
                            9:40AM
                        </option>
                        <option className={classes.formselect} value="11:20AM">
                            11:20AM
                        </option>
                        <option className={classes.formselect} value="1:00PM">
                            1:00PM
                        </option>
                        <option className={classes.formselect} value="2:40PM">
                            2:40PM
                        </option>
                        <option className={classes.formselect} value="4:20PM">
                            4:20PM
                        </option>
                    </select>

                    <label className={classes.formlabel}>Date</label>
                    <input onChange={(e) => setDate(e.target.value)}
                        value={date} className={classes.formselect}
                        id="dateRequired"
                        type="date"
                        name="dateRequired"
                        min={startday} max={finalday}
                    />
                    <label className={classes.formlabel}>Vehicle ID</label>
                    <select onChange={(e) => setVehicle(e.target.value)}
                        value={vehicle} className={classes.formselect} name="vehicle ID">
                        <option
                            className={classes.formselect}
                            value=""
                            disabled
                            selected
                            hidden
                        >
                            Select a Vehicle
                        </option>
                        <option className={classes.formselect} value="1001">
                            1001
                        </option>
                        <option className={classes.formselect} value="1002">
                            1002
                        </option>
                        <option className={classes.formselect} value="1003">
                            1003
                        </option>
                        <option className={classes.formselect} value="1004">
                            1004
                        </option>
                        <option className={classes.formselect} value="1005">
                            1005
                        </option>

                    </select>

                </div>
                <br></br>
                <br></br>
                <br></br>

                <div className={classes.display}>
                   
                    <button onClick={handleAssignVehicle} className={classes.button}>Assign Vehicle</button>
                   
                </div>
                <br></br>
                <br></br>
                <div className={classes.container2}>
                    <br></br>
                    <h1 className={classes.h11}>Confirmed Trip List:</h1>
                    <br></br>
                    <ul className={classes.ul} >
                        <li className={classes.li1}>#</li>
                        <li className={classes.li1}>Route</li>
                        <li className={classes.li1}>Way</li>
                        <li className={classes.li}>TimeSlot</li>
                        <li className={classes.li}>Date</li>
                        <li className={classes.li}>Vehicle</li>
                    </ul>
                    {
                        confirmedTrip.map((confirmedTrip, index) => (
                            <ul key={confirmedTrip}  >
                                <li className={classes.li1}>{index + 1}</li>
                                <li className={classes.li1}>{confirmedTrip.route}</li>
                                <li className={classes.li1}> {confirmedTrip.way}</li>
                                <li className={classes.li}>{confirmedTrip.timeslot}</li>
                                <li className={classes.li}>{confirmedTrip.date}</li>
                                <li className={classes.li}>{confirmedTrip.vehicle}</li>
                            </ul>
                        ))
                    }
                </div>

            </div>
        </div>
    );
};

export default Assignvehicle;