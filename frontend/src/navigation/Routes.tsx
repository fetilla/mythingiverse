import React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { Auth } from '../auth/Auth';
import AuthStorage from '../auth/AuthStorage';

export default function Routes() {
  return (
    <BrowserRouter>
        <Route path={AuthStorage.redirect_uri}  component={Auth}/>
    </BrowserRouter>
  );
}