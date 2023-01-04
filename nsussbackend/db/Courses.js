const mongoose = require("mongoose");

const courseschema = new mongoose.Schema({
    courseid_sec : 'string',
    coursename : 'string',
    facultyid : 'string',
    studentsid : ['string'],

});

module.exports = mongoose.model("courses", courseschema)
