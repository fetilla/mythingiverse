import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Auth } from '../components/auth/Auth';
import AuthStorage from '../components/auth/AuthStorage';

export default function Routes() {
  return (
    <BrowserRouter>
        <Route path={AuthStorage.redirect_uri}  component={Auth}/>
    </BrowserRouter>
  );
}