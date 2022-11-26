const mongoose = require("mongoose");

const spacebookschema = new mongoose.Schema({
    userid : 'string',
    area : 'string',
    date : 'string',
    timeslot : 'string',

});

module.exports = mongoose.model("spacebook", spacebookschema)

 