// /models/Plant.js

const mongoose = require('mongoose');
const {Schema} = mongoose;

const BreakingBadSchema = new Schema({
    name: String,
    status: String,
    portrayed: String,
    img: String,
    nickname:String 
})

const Bad = mongoose.model("Bad", BreakingBadSchema, "Breakingbad");
module.exports = Bad;
