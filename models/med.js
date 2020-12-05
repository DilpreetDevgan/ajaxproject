// /models/Plant.js

const mongoose = require('mongoose');
const {Schema} = mongoose;

const medSchema = new Schema({
    drugcompany: String,
    Drugbrandname: String,
    Drugname: String
})

const Med = mongoose.model("Med", medSchema, "meds");
module.exports = Med;
