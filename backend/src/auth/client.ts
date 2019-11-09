import * as restClient from 'typed-rest-client/RestClient'
import { AuthToken } from './AuthToken';

const authRest: restClient.RestClient = new restClient.RestClient('rest-samples', 'https://www.thingiverse.com');
const clientId: string = '4cba0d21d0b85e9cae68';
const clientSecret: string = '3ae8c6a7600848c8467b5b2bdb6d382e';

interface TokenBody {
  client_id: string
  client_secret: string
  code: string;
}

export const validateCodeGetToken = async (code: string): Promise<AuthToken> => {
  const tokenBody: TokenBody = {client_id: clientId, client_secret: clientSecret, code: code};
  const result = await authRest.create<string>('/login/oauth/access_token', JSON.stringify(tokenBody))
  return {token: result.result};
}