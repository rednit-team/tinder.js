import { BASE_URL } from "../Constants";
import { HttpServiceInterface } from "./HttpServiceInterface";

const HttpHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
};

enum RequestMethods {
    GET = 'GET',
    POST = 'POST',
    PATCH = 'PATCH',
}

class HttpService implements HttpServiceInterface {

    /**
     * Does a GET request to the tinder API
     *
     * @template T The type the response should be casted into
     * @param {string} path The path of the API endpoint
     * @return {*}  {Promise<T>} The response as promise
     * @memberof HttpService
     * @see HttpServiceInterface
     * @see RequestMethods.GET
     */
    public async get<T>(path: string): Promise<T> {
        return await this.doRequest<T>(path, RequestMethods.GET);
    }

    /**
     * Does a POST request to the tinder API
     *
     * @template T The type the response should be casted into
     * @param {string} path The path of the API endpoint
     * @param {object} body The body of the request
     * @return {*}  {Promise<T>} The response as promise 
     * @memberof HttpService
     * @see HttpServiceInterface
     * @see RequestMethods.POST
     */
    public async post<T>(path: string, body: object): Promise<T> {
        return await this.doRequest<T>(path, RequestMethods.POST, JSON.stringify(body));
    }

    /**
     * Does a PATCH request to the tinder API
     *
     * @template T The type the response should be casted into
     * @param {string} path The path of the API endpoint
     * @param {object} body The body of the request
     * @return {*}  {Promise<T>} The response as promise 
     * @memberof HttpService
     * @see HttpServiceInterface
     * @see RequestMethods.PATCH
     */
    public async patch<T>(path: string, body: object): Promise<T> {
        return await this.doRequest<T>(path, RequestMethods.PATCH, JSON.stringify(body));
    }

    /**
     * Fetches an response from the Tinder API with the given
     * request parameter.
     *
     * @template T The type that the response should be wrapped into
     * @param {string} path The path of the API endpoint
     * @param {string} method The method of the request
     * @param {(string|undefined)} [body=undefined] The body of the request
     * @return {*}  {Promise<T>} The async response of the request
     * @memberof HttpService
     */
    private async doRequest<T>(path: string, method: string, body: string|undefined = undefined): Promise<T> {

        const fetchResult = await fetch(`${BASE_URL}${path}`,  {
            method,
            headers: HttpHeaders,
            body
        });
        
        if (fetchResult.ok) {
            return (await fetchResult.json()) as T;
        } else {
            // Throws the content of the bad request as an error
            throw new Error(await fetchResult.json());
        }
    }
}

export default HttpService;