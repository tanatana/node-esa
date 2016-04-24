/// <reference path="./typings/main.d.ts" />

import Teams from './esa/teams'
import Client from './esa/client'

export class Esa {
    public teams: Teams;
    private client: Client;
    private p: Promise<string>;

    constructor(teamName: string, sessionToken: string) {
        this.client = new Client(teamName, sessionToken);
        this.teams = new Teams(this.client);
    }
}