import React from 'react';

import './App.css';
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from '@apollo/react-hooks'
//components

import BookList from './components/BookList'
// import BookListF from './components/BookListF'
import AddBook from './components/AddBook'
// import AddBookF from './components/AddBookF'



//since we need to make request to graphqlHTTP server
//so we will use this apollo client to make request to server
const client=new ApolloClient({
  uri:"http://localhost:5000/graphql"
})
function App() {
  return (
    //whichever components are inside apolloprovider are able to use data provided by given client
    <ApolloProvider client={client}>
      <div className="App" id="main">
        
        <BookList></BookList>
        {/* <BookListF></BookListF> */}
        {/* <BookDetails></BookDetails> */}
        <AddBook></AddBook>
        {/* <AddBookF></AddBookF> */}
      </div>
    </ApolloProvider>
    
  );
}

export default App;
