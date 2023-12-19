const mongoose = require('mongoose');


const reviewSchema = mongoose.Schema({

    name:{type:String,required:true},
    email:{type:String,required:true},
    rating:{type:String,required:true},
    

   

}, {versionKey:false})

const reviewModel = mongoose.model("Review", reviewSchema)

module.exports = reviewModel;