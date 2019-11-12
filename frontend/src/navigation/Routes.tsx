import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Auth } from '../components/auth/Auth';
import AuthStorage from '../components/auth/AuthStorage';
import { PopularThings } from '../components/popular/Popular';
import { ThingDetailsQuery } from '../components/thing/Thing';

function BearerCheckToRedirect(props: any) {
  return () => {
    return AuthStorage.bearer_token ?
      (props.children) :
      (<Redirect to={'/'} />)
  };
}

const PrivateRoute = (props: any) => (
  <Route
    path={props.path}
    render={BearerCheckToRedirect(props)}
  />
    );

export default function Routes() {
  return (
    <Switch>
      <PrivateRoute path={'/popular'}>
        <PopularThings/>
      </PrivateRoute>
      <PrivateRoute path={'/thing'}>
        <ThingDetailsQuery/>
      </PrivateRoute>
      <Route path={AuthStorage.redirect_uri}>
        <Auth/>
      </Route>
      <Route exact={true} path={'/'}>
        <Auth/>
      </Route>
    </Switch>
  );
}