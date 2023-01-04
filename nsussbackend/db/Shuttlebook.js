const mongoose = require("mongoose");

const shuttlebookschema = new mongoose.Schema({
    userid : 'string',
    route : 'string',
    way : 'string',
    timeslot : 'string',
    date : 'string',
});

module.exports = mongoose.model("shuttlebook", shuttlebookschema)

 