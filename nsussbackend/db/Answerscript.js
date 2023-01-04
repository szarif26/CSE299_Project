const mongoose = require("mongoose");

const answerscriptschema = new mongoose.Schema({
    ansid:'string',
    studentid: 'string',
    courseid_sec : 'string',
    examname : 'string',
    question : ['string'],
    answer:  ['string'],
    marks: 'string',

});

module.exports = mongoose.model("answerscript", answerscriptschema)
