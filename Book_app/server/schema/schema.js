const graphql=require('graphql')

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull}=graphql

//lodash is just modern javascript utility library
const _=require('lodash')
//getting modals
const Book=require('../modal/book')
const Author=require('../modal/author')

/*our schema has 3 responsibilities
1. to define types
2. to define relationship between multiple times
3. create entry points inform of root queries
*/

/*DUMMY DATA*/
// let books=[
//     {name:'tell the wolves im home again',id:'1',genre:'fiction',authorId:'1'},
//     {name:'theory of everything',id:'2',genre:'science',authorId:'2'},
//     {name:'steve jobs',id:'3',genre:'non-fiction',authorId:'3'},
//     {name:'dawn of the universe',id:'2',genre:'science',authorId:'2'},
    
// ]

// let authors=[
//     {name:'carl rifson',age:35,id:'1'},
//     {name:'staeven hawking',age:70,id:'2'},
//     {name:'steve jobs',age:55,id:3}
// ]


const BookType=new GraphQLObjectType({
    //upto my understanding graphql will understand this data type by this name
    name:'Book',
    //here we have function to overcome any reference errors
    fields:()=>({
        id:{type:GraphQLID},
        name:{type:new GraphQLNonNull(GraphQLString)},
        genre:{type:new GraphQLNonNull(GraphQLString)},
        authorId:{type:new GraphQLNonNull(GraphQLID)},
        //here since giving author id wll not make sense to user
        //we are making another request inside this type to get author data
        author:{
            type:AuthorType,
            //since this query is inside book type nd is executed after finding book
            //so that book is the parent of this request nd is passed as argument
            resolve:(parent,args)=>{
                // return _.find(authors,{id:parent.authorId})
                return Author.findById(parent.authorId)
            }
        }
    })
})

const AuthorType=new GraphQLObjectType({
    name:'Author',
    //here we have function to overcome any reference errors
    /*since javascript executes code from top to bottom so while assinging space 
    to variables it will say that Booktype is not defined , you can solve this by
    putting BookType above author type but in case of two way relationships
    like this one , its not gonna do anything*/

    fields:()=>({
        // id:{type:GraphQLID},
        name:{type:new GraphQLNonNull(GraphQLString)},
        age:{type:new GraphQLNonNull(GraphQLInt)},
        books:{
            type:GraphQLList(BookType),
            resolve:(parent,args)=>{
                // return _.filter(books,{id:parent.id})
                return Book.find({authorId:parent.id})
            }
        }
    })
})


//this is our entry point for making any query
const RootQuery=new GraphQLObjectType({
    name:'RootQueyType',
    fields:{
        //this name is important because this is what we will use in front end to make reqest
        book:{
            type:BookType,
            args:{id:{type:GraphQLID}},
            resolve:(parent,args)=>{
                //contains the code to resolve the query
                // return _.find(books,{id:args.id})
                return Book.findById(args.id)
            }
        },

        author:{
            type:AuthorType,
            args:{id:{type:GraphQLID}},
            resolve:(parent,args)=>{
                // return _.find(authors,{id:args.id})
                return Author.findById(args.id)
            }
        },
        books:{
            type:GraphQLList(BookType),
            resolve:(parent,args)=>{
                // return books
                return Book.find()
            }
        },
        authors:{
            type:GraphQLList(AuthorType),
            resolve:(parent,args)=>{
                // return authors
                return Author.find()
            }
        }
        }
    
})

const Mutation=new GraphQLObjectType({
    name:"Mutation",
    fields:{
        addAuthor:{
            type:AuthorType,
            args:{name:{type:GraphQLString},age:{type:GraphQLInt}},
            resolve:(parent,args)=>{
                let author=new Author({
                    name:args.name,
                    age:args.age
                })
                return author.save()
            }
        },
        addBook:{
            type:BookType,
            args:{name:{type:GraphQLString},genre:{type:GraphQLString},authorId:{type:GraphQLID}},
            resolve:(parent,args)=>{
                let book=new Book({
                    name:args.name,
                    genre:args.genre,
                    authorId:args.authorId
                })
                return book.save()
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
//these key names need to be specifically these two
module.exports=new GraphQLSchema({
    query:RootQuery,
    mutation:Mutation
})
