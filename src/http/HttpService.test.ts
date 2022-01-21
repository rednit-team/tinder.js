import HttpService from "./HttpService"

test('Tests if the httpService can do a get request', () => {
    const service = new HttpService();
    expect(() => service.get('/')).not.toThrow('');
});