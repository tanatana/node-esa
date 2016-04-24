/// <reference path="./typings/main.d.ts" />
"use strict";
var teams_1 = require('./esa/teams');
var client_1 = require('./esa/client');
var Esa = (function () {
    function Esa(teamName, sessionToken) {
        this.client = new client_1.default(teamName, sessionToken);
        this.teams = new teams_1.default(this.client);
    }
    return Esa;
}());
exports.Esa = Esa;
