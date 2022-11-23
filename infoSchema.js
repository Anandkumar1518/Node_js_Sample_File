const mongoose = require("mongoose");
const infoSchema = new mongoose.Schema({
Name:{
    type:String,
    required:true,
    trim:true
},
UserName:{
     type:String,
     required:true,
     trim:true
},
Email:{
    type:String,
    required:true,
    trim:true
}
})
module.exports = mongoose.model("Info",infoSchema);
