import React from 'react';
import AuthStorage from './Auth.storage';

export const RedirectAuth = () => {
  window.location.assign(
    `${AuthStorage.request_auth}?client_id=${AuthStorage.clientId}&response_type=${AuthStorage.response_type}&redirect_uri=${AuthStorage.redirect_host}${AuthStorage.redirect_uri}`);
  return null;
};