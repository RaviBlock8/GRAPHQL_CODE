import React, { Component } from 'react'
import {gql} from 'apollo-boost'
import {useQuery} from '@apollo/react-hooks'
import {graphql} from 'react-apollo'


const getBooksQuery=gql`
    {
        books{
            name,
            genre
        }
    }
`

class AddBook extends Component {
    
    render() {
        
        return (
            
        )
    }
}

export default graphql(getBooksQuery)(AddBook)
