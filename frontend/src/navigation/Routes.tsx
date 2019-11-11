import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Auth } from '../components/auth/Auth';
import AuthStorage from '../components/auth/AuthStorage';
import { Popular } from '../components/popular/Popular';

export default function Routes() {
  return (
    <Switch>
      <Route path={'/'} render={() => Auth}/>
      <Route path={AuthStorage.redirect_uri} render={() => Auth}/>
      <Route path={'/popular'} render={() => Popular}/>
    </Switch>
  );
}