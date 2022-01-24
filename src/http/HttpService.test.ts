import HttpService from './HttpService';
import fetch from 'isomorphic-fetch';
test('Tests if the httpService can do a get request', async () => {
  const service = new HttpService('', fetch);
  await expect(async () => await service.get('/', false)).not.toThrowError();
});
