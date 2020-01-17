import React from 'react';
import logo from './images/logo.jpg'
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'
import Launches from './components/Launches'
// import './App.css';

const client=new ApolloClient({
  uri:"http://localhost:5000/graphql"
})
function App() {
  return (
    <ApolloProvider client={client}>
        <div className="App">
      
          <img src={logo} style={imgStyle} alt="spacex logo"></img>
          <Launches></Launches>
        </div>
    </ApolloProvider>
    
  );
}

const imgStyle={
  width:'15vw'
}

export default App;
