const express=require('express')
const graphqlHttp=require('express-graphql')
const app=express()
const schema=require('./schema/schema')


app.use('/graphql',graphqlHttp({
    schema,
    graphiql:true
}))

app.listen(3000,(err)=>{
    if(err){
        console.log('server didnot started')
    }else{
        console.log('server started')
    }
})