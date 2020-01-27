import {gql} from 'apollo-boost'


const getAuthorsQuery=gql`
    {
        authors{
            name,
            age
        }
    }
`

const getBooksQuery=gql`
    {
        books{
            id,
            name,
            genre
        }
    }
`

const addBookMutation=gql`
    mutation($name:String!,$genre:String!,$authorId:ID!,$comment:String!){
        addBook(name:$name,genre:$genre,authorId:$authorId,comment:$comment){
            name
        }
    }
`

const getBookQuery=gql`
    query($id:ID!){
        book(id:$id){
            id
            name
            genre
            author{
                name
                age
                books{
                    id
                    name
                    genre
                }
            }
            comment
        }
    }
`

export {getAuthorsQuery,getBooksQuery,addBookMutation,getBookQuery}