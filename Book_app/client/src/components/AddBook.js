import React, { Component } from 'react'

import {graphql} from 'react-apollo'
import flowright from "lodash.flowright";
import {getAuthorsQuery,addBookMutation,getBooksQuery} from '../queries/queries'




class AddBook extends Component {

    constructor(props){
        super(props)
        this.state={
            name:"",
            genre:"",
            authorId:"",
            comment:""
        }
    }

    onChangeN=(e)=>{
        this.setState({name:e.target.value})
        // console.log(this.state)
    }
    onChangeG=(e)=>{
        this.setState({genre:e.target.value})
    }
    onChangeC=(e)=>{
        this.setState({comment:e.target.value})
    }
    onChangeS=(e)=>{
        let authorId=""
        switch(e.target.value){
            case "stephen hawking":
                authorId="5e27d6410585342444337ab2"
                break;
            case "carl rifkon brunt":
                authorId="5e27d6a40585342444337ab3"
                break;
            case "walter issacson":
                authorId="5e27d8d20585342444337ab4"
                break;
            default:
                authorId=null
        }
        this.setState({authorId:authorId})
    }

    onSubmit=(e)=>{
        e.preventDefault()
        console.log(this.state)

        //ERROR: post request giving status code 400 , bad request
        //error solved as i was using wrong mutation name in queries section
        if(this.state.authorId==""||this.state.name==""||this.state.genre==""||this.state.comment==""){
            e.target.reset()
        }else{
            this.props.addBookMutation({
                variables:{
                    name:this.state.name,
                    genre:this.state.genre,
                    authorId:this.state.authorId,
                    comment:this.state.comment
                },
                refetchQueries:[{query:getBooksQuery}]
            })
            e.target.reset()
        }
        
    }

    displayAuthors(){
       
        let data=this.props.getAuthorsQuery
        // console.log(data)
        if(data.loading){
        return <option>loading authors..</option>
        }else{
            return data.authors.map(author=>{
                
            return (<option key={author.name} value={author.id}>{author.name}</option>)
            })
        }
    }
    
    render() {
        
        return (
            <form id="add-book" onSubmit={this.onSubmit.bind(this)}>
                
                <div key="named" className="field">
                    <label>Book Name:</label>
                    <input  type="text" onChange={this.onChangeN}/>
                    
                </div>
                <div key="genred" className="field">
                    <label>Genre:</label>
                    <input type="text" onChange={this.onChangeG}/>
                </div>
                <div key="authord" className="field">
                    <label>Author:</label>
                    <select onChange={this.onChangeS}>
                        <option>Select author</option>
                        {this.displayAuthors()}
                    </select>
                </div>
                <div key="comment" className="field">
                    <label>Comment:</label>
                    <textarea onChange={this.onChangeC}/>
                </div>
                <button type="submit">+</button>
            </form>
        )
    }
}

export default flowright(
    graphql(getAuthorsQuery,{name:"getAuthorsQuery"}),
    graphql(addBookMutation,{name:"addBookMutation"})
)(AddBook)
