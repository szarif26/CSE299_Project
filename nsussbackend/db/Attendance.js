const mongoose = require("mongoose");

const attendanceschema = new mongoose.Schema({
    attendanceid: 'string',
    courseid_sec : 'string',
    date : 'string',
    list : ['string'],
});

module.exports = mongoose.model("attendance", attendanceschema)
