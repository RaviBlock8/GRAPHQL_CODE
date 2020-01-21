const graphql=require('graphql')

const {GraphQLObjectType,GraphQLString,GraphQLSchema}=graphql

/*our schema has 3 responsibilities
1. to define types
2. to define relationship between multiple times
3. create entry points inform of root queries
*/

const BookType=new GraphQLObjectType({
    name:'Book',
    //here we have function to overcome any reference errors
    fields:()=>({
        id:{type:GraphQLString},
        name:{type:GraphQLString},
        genre:{type:GraphQLString}
    })
})


//this is our entry point for making any query
const RootQueryType=new GraphQLObjectType({
    name:'RootQuery',
    fields:{
        //this name is important because this is what we will use in front end to make reqest
        book:{
            type:BookType,
            args:{id:{type:GraphQLString}},
            resolve:(parent,args)=>{
                //contains the code to resolve the query
            }
        }
        }
    
})
/*we will make queries from front end using these field of root query like
book(2){
    name
}
here this 2 inside parenthesis is argument id
*/

//here we are telling what kind of rootquery we want to use
module.exports=new GraphQLSchema({
    type:RootQueryType
})
