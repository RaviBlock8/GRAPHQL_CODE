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
            name,
            genre
        }
    }
`

const addBookMutation=gql`
    mutation($name:String!,$genre:String!,$authorId:ID!){
        addBook(name:$name,genre:$genre,authorId:$authorId){
            name
        }
    }
`

export {getAuthorsQuery,getBooksQuery,addBookMutation}