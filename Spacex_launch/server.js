const express=require('express')
const graphqlHttp=require('express-graphql')
const app=express()
const schema=require('./schema/schema')
const cors=require('cors')

app.use(cors())
app.use('/graphql',graphqlHttp({
    schema,
    graphiql:true
}))
port=process.env.PORT||5000

app.listen(port,(err)=>{
    if(err){
        console.log('server didnot started')
    }else{
        console.log('server started')
    }
})