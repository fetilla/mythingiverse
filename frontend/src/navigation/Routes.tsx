import React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { Auth } from '../components/auth/Auth';
import AuthStorage from '../components/auth/AuthStorage';
import { Popular } from '../components/popular/Popular';

export default function Routes() {
  return (
    <BrowserRouter>
        <Route path={AuthStorage.redirect_uri}  component={Auth}/>
        <Route path={'/popular'}  component={Popular}/>
    </BrowserRouter>
  );
}