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
        <h1 className={classes.h1}>Vehicle List:</h1>
        <br></br>
        <ul>
          <li>Serial Number</li>
          <li>Vehicle ID</li>
          <li>Brand</li>
          <li>Model</li>
          <li>Registration Number</li>
          <li>Capacity</li>
          <li>Delete</li>
        </ul>
        {
        vehicle.map((vehicle, index) =>
          <ul key={vehicle.vehicleId} >
            <li>{index + 1}</li>
            <li>{vehicle.vehicleId}</li>
            <li>{vehicle.model}</li>
            <li>{vehicle.brand}</li>
            <li>{vehicle.registrationNumber}</li>
            <li>{vehicle.capacity}</li>
            <li>
              <button onClick={() => deleteVehicle(vehicle.vehicleId)}>Delete</button>
            </li>

          </ul>
        )
      }
      </div>
    </div>
  );
};

export default Vehiclepage;
