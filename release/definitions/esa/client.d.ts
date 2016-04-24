export default class Client {
    private _accessToken;
    private _teamName;
    private rateLimit;
    private rateLimitRemaining;
    private scheme;
    private host;
    private apiVersion;
    constructor(teamName: string, accessToken: string);
    accessToken: string;
    teamName: string;
    private baseURL();
    getJSON(path: string): Promise<any>;
}
