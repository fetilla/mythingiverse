import React, { Component, Props } from 'react';
import './App.css';
import { Header } from './header/Headers';
import { RouteComponentProps, RouteProps, Router } from 'react-router-dom';
import history from './navigation/history';
import Routes from './navigation/Routes';
import { Auth } from './auth/Auth';

class App extends Component {

  public render() {
    return (
      <div className="App">
        <Header/>
        <Auth/>
        <Router history={history}>
          <Routes />
        </Router>
      </div>
    );
  }
}

export default App;
