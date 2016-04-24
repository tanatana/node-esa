/// <reference path="typings/main.d.ts" />
import Teams from './esa/teams';
export declare class Esa {
    teams: Teams;
    private client;
    private p;
    constructor(teamName: string, sessionToken: string);
}
