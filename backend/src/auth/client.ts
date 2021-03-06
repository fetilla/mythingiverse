import { AuthToken } from './AuthToken';
import { contentTypeUrlEncodedHeader, httpClient, objectToURLEncoded } from '../utils/httpUtils';

const clientId: string = 'f54c730466738f8e6607';
const clientSecret: string = '8a63b6602e52b3b30c0ec341c2e2614b';

interface TokenBody {
  client_id: string;
  client_secret: string;
  code: string;
}

export const validateCodeGetToken = async (code: string): Promise<AuthToken> => {
  const tokenBody: TokenBody = {client_id: clientId, client_secret: clientSecret, code};

  const result = await httpClient.post('https://www.thingiverse.com/login/oauth/access_token',
    objectToURLEncoded(tokenBody),
    contentTypeUrlEncodedHeader());

  const body: string = await result.readBody();
  return {token: extractToken(body)};
};

const extractToken = (body: string): string | never => {
  if (body.includes('access_token')) {
    return body.split('&').find((responseElements) => responseElements.includes('access_token'))
      .split('=').find((tokenPart) => tokenPart !== 'access_token');
  }
  throw new Error('The token cannot be validated.');
};
