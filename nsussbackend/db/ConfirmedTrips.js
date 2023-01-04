const mongoose = require("mongoose");

const confirmedTripschema = new mongoose.Schema({
    route : 'string',
    way : 'string',
    timeslot : 'string',
    date : 'string',
    vehicle : 'string',
});

module.exports = mongoose.model("confirmedTrip", confirmedTripschema)

 