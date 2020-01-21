const graphql=require('graphql')

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt}=graphql

//lodash is just modern javascript utility library
const _=require('lodash')

/*our schema has 3 responsibilities
1. to define types
2. to define relationship between multiple times
3. create entry points inform of root queries
*/

let books=[
    {name:'tell the wolves im home again',id:'1',genre:'fiction',authorId:'1'},
    {name:'theory of everything',id:'2',genre:'science',authorId:'2'},
    {name:'steve jobs',id:'3',genre:'non-fiction',authorId:'3'}
    
]

let authors=[
    {name:'carl rifson',age:35,id:'1'},
    {name:'staeven hawking',age:70,id:'2'},
    {name:'steve jobs',age:55,id:3}
]
const BookType=new GraphQLObjectType({
    name:'Book',
    //here we have function to overcome any reference errors
    fields:()=>({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        genre:{type:GraphQLString},
        //here since giving author id wll not make sense to user
        //we are making another request inside this type to get author data
        author:{
            type:AuthorType,
            //since this query is inside book type nd is executed after finding book
            //so that book is the parent of this request nd is passed as argument
            resolve:(parent,args)=>{
                return _.find(authors,{id:parent.authorId})
            }
        }
    })
})

const AuthorType=new GraphQLObjectType({
    name:'Author',
    //here we have function to overcome any reference errors
    fields:()=>({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        age:{type:GraphQLInt}
    })
})


//this is our entry point for making any query
const RootQuery=new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        //this name is important because this is what we will use in front end to make reqest
        book:{
            type:BookType,
            args:{id:{type:GraphQLID}},
            resolve:(parent,args)=>{
                //contains the code to resolve the query
                return _.find(books,{id:args.id})
            }
        },
        author:{
            type:AuthorType,
            args:{id:{type:GraphQLID}},
            resolve:(parent,args)=>{
                return _.find(authors,{id:args.id})
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
    query:RootQuery
})
