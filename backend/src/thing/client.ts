import { Thing } from './Thing';
import { AuthToken } from '../auth/AuthToken';
import { AuthenticationHeader, httpClient, } from '../utils/httpUtils';

export const getPopular  = async (root: any, args: any, context: any): Promise<Thing[]> => {

  console.log(root);
  console.log(args);
  console.log(context);
  const result = await httpClient.get('https://www.thingiverse.com/popular',
    AuthenticationHeader(args))

  const body: string = await result.readBody();
  return JSON.parse(body);
}