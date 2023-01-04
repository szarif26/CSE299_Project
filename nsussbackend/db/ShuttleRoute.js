const mongoose = require("mongoose");

const shuttleRouteschema = new mongoose.Schema({
    routeId : 'String',
    name : 'string',
});

module.exports = mongoose.model("shuttleRoute", shuttleRouteschema)