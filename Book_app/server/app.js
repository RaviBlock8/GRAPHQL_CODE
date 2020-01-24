const express=require('express')
const app=express()
const graphqlHTTP=require('express-graphql')
const schema=require('./schema/schema')
const mongoose=require('mongoose')
const cors=require('cors')

mongoose.connect('mongodb://localhost:27017/customercli',{
    /*mongodb rewrote the tool used to parse connection strngs nd hence its a big change it is 
        behind a flag*/
    useNewUrlParser:true,
    // To opt in to using the new topology engine, use the below line:
    useUnifiedTopology:true
}).then((res)=>{
    console.log(`response:${res}`)
}).catch((err)=>console.log(err))

mongoose.connection.once('open',()=>{
    console.log('connection is open')
})
app.use(cors())

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}))





const port=process.env.PORT||5000
app.listen(port,(err)=>{
    if(err)console.log(err)
    console.log('server running')
})