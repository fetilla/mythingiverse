import React, { Component } from 'react';
import './App.css';
import { Header } from './components/header/Headers';
import { Router } from 'react-router-dom';
import history from './navigation/history';
import Routes from './navigation/Routes';
import { AuthExternal } from './components/auth/AuthExternal';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

export const client = new ApolloClient({
  uri: 'http://localhost:4000',
});

class App extends Component {

  public render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Header/>
          <AuthExternal/>
          <Router history={history}>
            <Routes/>
          </Router>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
