const mongoose = require("mongoose");

const itemschema = new mongoose.Schema({
    itemId : 'String',
    name : 'string',
    price : 'string',
    category : 'string',

});

module.exports = mongoose.model("item", itemschema)