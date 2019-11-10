import { Thing } from './Thing';
import { AuthToken } from '../auth/AuthToken';
import { AuthenticationHeader, httpClient, } from '../utils/httpUtils';

export const thingsRequest  = async (bearer: string): Promise<Thing[]> => {

  const result = await httpClient.get('https://api.thingiverse.com/popular',
    AuthenticationHeader(bearer))

  const body: string = await result.readBody();
  return JSON.parse(body);
}