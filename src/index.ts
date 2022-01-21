/// ///////////////////////////////////////////////////
//                  Tinder.js                       //
// This is the entrypoint of the tinder.js api      //
// wrapper. If you have any questions feel free to  //
// open an issue.                                   //
/// ///////////////////////////////////////////////////

import HttpService from "./http/HttpService";

export interface TinderJsConfig {
    xAuthToken?: string;
    redirectAuth?: boolean;
    disableRateLimit?: boolean;
}

const DEFAULT_CONFIG: TinderJsConfig = {
    redirectAuth: true,
    disableRateLimit: false
}

class TinderJS {

    private HttpClient: HttpService;

    constructor(config: TinderJsConfig|undefined = undefined) {
        this.constructClient(config ?? DEFAULT_CONFIG);
    }

    private constructClient(config: TinderJsConfig) {
        if (config.redirectAuth) {
            if (navigator === undefined) {
                throw new Error("You cannot use redirect auth in a not web environment");
            }
            throw new Error("This feature is not implemented yet");
        }
        if (config.xAuthToken) {
            this.HttpClient = new HttpService(config.xAuthToken);
            return;
        }
        throw new Error("If you disabled webauth, you have to provide a X-Auth-Token");
    }

}

export default TinderJS;
