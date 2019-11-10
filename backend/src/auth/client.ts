import * as httpm from 'typed-rest-client/HttpClient';
import { AuthToken } from './AuthToken';
import { objectToURLEncoded } from '../utils/httpUtils';

let httpClient: httpm.HttpClient = new httpm.HttpClient('typed-rest-client', []);

const clientId: string = '4cba0d21d0b85e9cae68';
const clientSecret: string = '3ae8c6a7600848c8467b5b2bdb6d382e';

interface TokenBody {
  client_id: string
  client_secret: string
  code: string;
}

export const validateCodeGetToken = async (code: string): Promise<AuthToken> => {
  const tokenBody: TokenBody = {client_id: clientId, client_secret: clientSecret, code: code};

  const result = await httpClient.post('https://www.thingiverse.com/login/oauth/access_token',
    objectToURLEncoded(tokenBody),
    {
      'content-type': 'application/x-www-form-urlencoded'
    })

  const body: string = await result.readBody();
  return {token: extractToken(body)};
}

const extractToken = (body: string): string => {
  return body.includes('access_token') ?
    body.split('&').find((responseElements) => responseElements.includes('access_token'))
      .split('=').find((tokenPart) => tokenPart !== 'access_token')
    : body;

}