import React, { useEffect, useState } from "react";
import classes from "./Vehiclepage.module.css";

const Vehiclepage = () => {
const [vehicle, setVehicle] = useState([]);
useEffect(() => {
    getVehicle();
  }, []);
  const [vehicleId, setVehicleId] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [capacity, setCapacity] = useState("");

  const handleAddVehicle = async () => {
    let result = await fetch("http://localhost:4000/addvehicle", {
      method: "post",
      body: JSON.stringify({ vehicleId, brand, model, registrationNumber, capacity }),
      headers: {
        "content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    getVehicle();
    alert("Successfully Added Your Vehicle");
  };

  const getVehicle = async () => {
    let result = await fetch('http://localhost:4000/getVehicle');
    result = await result.json();
    setVehicle(result);
  }

  const deleteVehicle = async (vehicleId) => {
    console.warn(vehicleId)
    let result = await fetch(`http://localhost:4000/deleteVehicle/${vehicleId}`, {
      method: "Delete"
    });
    result = await result.json();
    if (result) {
      getVehicle();
    }
  }
  
  return (
    <div className={classes.background}>
      <div className={classes.Item_List}>
        <h1 className={classes.h1}> Add New Vehicle </h1>
        <br></br>
        <input
          className={classes.inputbox}
          type="text"
          placeholder="Vehicle ID"
          onChange={(e) => setVehicleId(e.target.value)}
          value={vehicleId}/>
        <input className={classes.inputbox} type="text" placeholder="Brand" onChange={(e) => setBrand(e.target.value)}
          value={brand} />
        <input className={classes.inputbox} type="text" placeholder="Model" onChange={(e) => setModel(e.target.value)}
          value={model} />
        <input
          className={classes.inputbox}
          type="text"
          placeholder="Registration Number"
          onChange={(e) => setRegistrationNumber(e.target.value)}
          value={registrationNumber}
        />
        <input
          className={classes.inputbox}
          type="text"
          placeholder="Capacity" onChange={(e) => setCapacity(e.target.value)}
          value={capacity}
        ></input>
        <button onClick={handleAddVehicle} className={classes.button}>Add Vehicle</button>
        <br></br>
        <br></br>
        <div className={classes.container2}>
        <h1 className={classes.h11}>Vehicle List:</h1>
        <br></br>
        <ul className={classes.ul}>
          <li className={classes.li1}>#</li>
          <li className={classes.li}>Vehicle ID</li>
          <li className={classes.li1}>Brand</li>
          <li className={classes.li}>Model</li>
          <li className={classes.li2}>Registration Number</li>
          <li className={classes.li1}>Capacity</li>
          <li className={classes.li1}>Delete</li>
        </ul>
        {
        vehicle.map((vehicle, index) =>
          <ul key={vehicle.vehicleId}  className={classes.ul}>
            <li className={classes.li1}>{index + 1}</li>
            <li className={classes.li}>{vehicle.vehicleId}</li>
            <li className={classes.li1}> {vehicle.brand}</li>
            <li className={classes.li}>{vehicle.model}</li>
           
            <li className={classes.li2}>{vehicle.registrationNumber}</li>
            <li className={classes.li1}>{vehicle.capacity}</li>
            <li className={classes.li1}>
              <button onClick={() => deleteVehicle(vehicle.vehicleId)} className={classes.btn}>Delete</button>
            </li>
          </ul>
        )
      }
        </div>
      </div>
    </div>
  );
};

export default Vehiclepage;
