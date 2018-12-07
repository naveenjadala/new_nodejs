const mongoose = require('mongoose');

module.exports = mongoose.model("BottleList",{
    bottleType : String,
    disciption : String,
    cost : String 
});