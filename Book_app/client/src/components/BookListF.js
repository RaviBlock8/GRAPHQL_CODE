import React from 'react'
import {gql} from 'apollo-boost'
import {useQuery} from '@apollo/react-hooks'


const getBooksQuery=gql`
    {
        books{
            name,
            genre
        }
    }
`

function BookListF() {

    //this here we are using apollo hooks
    const {loading,error,data}=useQuery(getBooksQuery)

    if(loading) return(<p>Loading....</p>)
    
    if(error) {return (<p>{error}(</p>)}
    if(data){
        return (
            <ul>
                {data.books.map(book=>{
                    return <li key={book.name}>{book.name}</li>
                })}
            </ul>
        )

    }
    
        
    
}

export default BookListF
