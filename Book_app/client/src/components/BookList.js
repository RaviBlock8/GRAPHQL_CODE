import React, { Component } from 'react'
import {graphql} from 'react-apollo'
import {getBooksQuery} from '../queries/queries'

//since javascript is not the language of graphql , so we use this to parse it
//this is how we make our queries
//now we need to bind this query to our react component to access 
//data provided by it inside it


class BookList extends Component {
    dataProvider(){
        let data=this.props.data
        if(data.loading){
            return <div>Loading Books....</div>
        }else{
            return data.books.map(book=>{
            return <li key={book.id}>{book.name}</li>
            })
        }
    }
    render() {
        // const {loading,error,data}=useQuery(getBooksQuery)
        // if(loading) return(<p>Loading....</p>)
        // if(error) return (<p>Error :(</p>)
        // if(data) console.log(data)
        console.log(this.props)
        return (
            <div>
                <ul id="book-list">
                    <li >Book-Name</li>
                    {this.dataProvider()}
                </ul>
            </div>
        )
    }
}

export default graphql(getBooksQuery)(BookList)
