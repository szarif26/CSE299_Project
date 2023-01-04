const mongoose = require("mongoose");

const examschema = new mongoose.Schema({
    courseid_sec : 'string',
    examname : 'string',
    examid : 'string',
    question : ['string'],

});

module.exports = mongoose.model("exam", examschema)
