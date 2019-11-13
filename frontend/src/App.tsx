import React, { Component } from 'react';
import './App.css';
import { Header } from './components/header/Headers';
import { Router } from 'react-router-dom';
import history from './navigation/history';
import Routes from './navigation/Routes';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import AuthStorage from './components/auth/Auth.storage';

export const client = new ApolloClient({
  uri: 'http://localhost:4000',
  request: (operation) => {
    operation.setContext({
      headers: {
        authorization: AuthStorage.bearer_token ? `Bearer ${AuthStorage.bearer_token}` : ''
      }
    })
  }
});

class App extends Component {

  public render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Header/>
          <Router history={history}>
            <Routes/>
          </Router>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
