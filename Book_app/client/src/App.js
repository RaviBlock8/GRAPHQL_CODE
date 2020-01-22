import React from 'react';

import './App.css';
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from '@apollo/react-hooks'
//components

import BookList from './components/BookList'
import BookListF from './components/BookListF'


//since we need to make request to graphqlHTTP server
//so we will use this apollo client to make request to server
const client=new ApolloClient({
  uri:"http://localhost:5000/graphql"
})
function App() {
  return (
    //whichever components are inside apolloprovider are able to use data provided by given client
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Starting with front end</h1>
        <BookList></BookList>
        {/* <BookListF></BookListF> */}
      </div>
    </ApolloProvider>
    
  );
}

export default App;
