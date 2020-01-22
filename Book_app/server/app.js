const express=require('express')
const app=express()
const graphqlHTTP=require('express-graphql')
const schema=require('./schema/schema')
const mongoose=require('mongoose')
const cors=require('cors')

mongoose.connect('mongodb://localhost:27017/customercli',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then((res)=>{

})

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