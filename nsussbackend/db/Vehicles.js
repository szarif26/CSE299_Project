const mongoose = require("mongoose");

const vehicleschema = new mongoose.Schema({
    vehicleId : 'String',
    brand : 'string',
    model : 'string',
    registrationNumber : 'string',
    capacity : 'string',

});

module.exports = mongoose.model("vehicle", vehicleschema)