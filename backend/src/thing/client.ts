import { Thing, ThingDetails } from './Thing';
import { AuthToken } from '../auth/AuthToken';
import { AuthenticationHeader, httpClient, } from '../utils/httpUtils';

export const thingsRequest  = async (bearer: string): Promise<Thing[]> => {

  const result = await httpClient.get('https://api.thingiverse.com/popular',
    AuthenticationHeader(bearer))

  const body: string = await result.readBody();
  return JSON.parse(body);
}

export const thingDetailRequest  = async (bearer: string, id: number): Promise<ThingDetails> => {

  const result = await httpClient.get(`https://api.thingiverse.com/things/${id}`,
    AuthenticationHeader(bearer))

  const body: string = await result.readBody();
  return JSON.parse(body);
}