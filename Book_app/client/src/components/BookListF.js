import React from 'react'
import {gql} from 'apollo-boost'
import {useQuery} from '@apollo/react-hooks'

//since javascript is not the language of graphql , so we use this to parse it
//this is how we make our queries
//now we need to bind this query to our react component to access 
//data provided by it inside it
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
    //here it is giving us error that we are getting array but data type we are telling is object
    if(error) {return (<p>{error}(</p>)}
   
    return <div>functional component</div>
        
    
}

export default BookListF
