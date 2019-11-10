import * as httpm from 'typed-rest-client/HttpClient';

export const objectToURLEncoded = (obj: any): string => {
  return Object.keys(obj).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(obj[k])).join('&');
}

export const httpClient: httpm.HttpClient = new httpm.HttpClient('typed-rest-client', []);

export const AuthenticationHeader = (bearer: string) => {
  return {
    'Authorization': `${bearer}`,
    'Content-Type': 'application/json'
  }
}

export const contentTypeUrlEncodedHeader = () => {
  return {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}