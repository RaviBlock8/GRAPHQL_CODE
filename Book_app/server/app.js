const express=require('express')
const app=express()
const graphqlHTTP=require('express-graphql')
const Schema=require('./schema/schema')

app.use('/graphql',graphqlHTTP({
    
}))



const port=process.env.PORT||5000
app.listen(port,(err)=>{
    if(err)console.log(err)
    console.log('server running')
})