import rp = require("request-promise");

export default class Client {
    private _accessToken: string;
    private _teamName: string;
    private rateLimit: number;
    private rateLimitRemaining: number;
    private scheme: string = "https";
    private host: string = "api.esa.io";
    private apiVersion = "v1";

    constructor(teamName: string, accessToken: string){
        this._teamName = teamName;
        this._accessToken = accessToken;
    }

    get accessToken() : string {
        return this._accessToken;
    }
    get teamName() : string {
        return this._teamName;
    }
    private baseURL(): string {
        return `${this.scheme}://${this.host}/${this.apiVersion}/teams/${this._teamName}`;
    }

    getJSON(path: string): Promise<any> {
        console.log(this.baseURL() + path);
        var options = {
            url: this.baseURL() + path,
            headers: {
                "Authorization": `Bearer ${this.accessToken}`
            },
            gzip: true,
            json: true
        };
        return rp.get(options)
            .catch(err => {
                throw(err);
            });
    }
}
