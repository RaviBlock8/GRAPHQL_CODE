import React, { Component } from 'react'
import {graphql} from 'react-apollo'
import {getBookQuery} from '../queries/queries'

class BookDetails extends Component {

    displayBookDetails(){
        const {book}=this.props.data
        if(book){
            return(
                <div id="bookdetails">
                    <h2>{book.name}</h2>
                    <h3>{book.genre}</h3>
                    {/* <p><b>Author:</b>{book.author.name}</p>
                    <p><b>Author age:{book.author.age}</b></p>
                    <div>
                        <h3>Other books from this author:</h3>
                        <ul>
                            {book.author.books.map(book=>{
                                return (<li key={book.id}>{book.name}</li>)
                            })}
                        </ul>
                    </div> */}
                </div>
            )
        }else{
            return (
                <div id="bookdetails">
                    <h2>No Book Selected</h2>
                </div>
                
            )
        }
    }
    render() {
        console.log(this.props)
        return (
            <div>{this.displayBookDetails()}</div>
            
                
           
        )
    }
}



export default graphql(getBookQuery,{
    options:(props)=>{
        return{
            variables:{
                id:props.bookid
            }
        
    }}
})(BookDetails)
