import React from 'react'
import {addBookMutation} from '../queries/queries'
import {useMutation} from '@apollo/react-hooks'
import {gql} from 'apollo-boost'
// import {useQuery} from '@apollo/react-hooks'

const getBooksQuery=gql`
    {
        books{
            name,
            genre
        }
    }
`

function AddBookF() {
    let bookn
    let bookg
    let author

    

    const [addBook]=useMutation(addBookMutation)
    const onSubmit=(e)=>{
        e.preventDefault();
        addBook({variables:{name:bookn.value,genre:bookg.value,authorId:author.value}})
        
    }

    return (
        <form id="add-book" onSubmit={onSubmit}>
            
            <div className="field">
                <label>Book Name:</label>
                <input  type="text" ref={node=>{bookn=node}}/>
                
            </div>
            <div className="field">
                <label>Genre:</label>
                <input type="text" ref={node=>{bookg=node}}/>
            </div>
            <div className="field">
                <label>Author:</label>
                <select ref={node=>{author=node}}>
                    {/* <option>Select author</option> */}
                    
                </select>
            </div>
            <button type="submit">+</button>
        </form>
    )
}



export default AddBookF
