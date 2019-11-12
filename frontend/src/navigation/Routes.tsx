import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Auth } from '../components/auth/Auth';
import AuthStorage from '../components/auth/AuthStorage';
import { PopularThings } from '../components/popular/Popular';
import { ThingDetails } from '../components/thing/Thing';

const PrivateRoute = (props: any) => <Route path={props.path} render={() => {
  return AuthStorage.bearer_token ?
    (props.children) :
    (<Redirect to={'/'}/>)
}} />;

export default function Routes() {
  return (
    <Switch>
      <PrivateRoute path={'/popular'}>
        <PopularThings />
      </PrivateRoute>
      <PrivateRoute path={'/thing'}>
        <ThingDetails />
      </PrivateRoute>
      <Route path={AuthStorage.redirect_uri}>
        <Auth />
      </Route>
      <Route exact={true} path={'/'}>
        <Auth />
      </Route>
    </Switch>
  );
}