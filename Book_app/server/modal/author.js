const mongoose=require('mongoose')
const Schema=mongoose.Schema

const authorSchema=new Schema({
    name:{type:String},
    age:{type:Number}
})


//instance of a model is an document
module.exports=mongoose.model('Author',authorSchema)
