const mongoose = require("mongoose");

const cartschema = new mongoose.Schema({
    userid : 'string',
    itemId : 'String',
    name : 'string',
    price : 'string',
    category : 'string',
    quantity : 'string',
    status : 'string',

});

module.exports = mongoose.model("cart", cartschema)