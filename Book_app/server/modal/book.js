const mongoose=require('mongoose')
const Schema=mongoose.Schema

const bookSchema=new Schema({
    name:{type:String},
    genre:{type:String},
    authorId:{type:String}
})

//first argument is name of modal and second argument is schema
//this modal is used to interact with our mongodb
module.exports=mongoose.model('Book',bookSchema)