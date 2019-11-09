import React, { Component } from 'react';
import './App.css';
import { Header } from './header/Headers';
import { Router } from 'react-router-dom';
import history from './navigation/history';
import Routes from './navigation/Routes';
import { Auth } from './auth/Auth';
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
          <Auth/>
          <Router history={history}>
            <Routes/>
          </Router>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
