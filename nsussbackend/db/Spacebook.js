const mongoose = require("mongoose");

const spacebookschema = new mongoose.Schema({
    Bookingid : 'string',
    userid : 'string',
    area : 'string',
    date : 'string',
    timeslot : 'string',
    status: 'string',
    comment: 'string',

});

module.exports = mongoose.model("spacebook", spacebookschema)

 