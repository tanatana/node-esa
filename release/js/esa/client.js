"use strict";
var rp = require("request-promise");
var Client = (function () {
    function Client(teamName, accessToken) {
        this.scheme = "https";
        this.host = "api.esa.io";
        this.apiVersion = "v1";
        this._teamName = teamName;
        this._accessToken = accessToken;
    }
    Object.defineProperty(Client.prototype, "accessToken", {
        get: function () {
            return this._accessToken;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "teamName", {
        get: function () {
            return this._teamName;
        },
        enumerable: true,
        configurable: true
    });
    Client.prototype.baseURL = function () {
        return this.scheme + "://" + this.host + "/" + this.apiVersion + "/teams/" + this._teamName;
    };
    Client.prototype.getJSON = function (path) {
        console.log(this.baseURL() + path);
        var options = {
            url: this.baseURL() + path,
            headers: {
                "Authorization": "Bearer " + this.accessToken
            },
            gzip: true,
            json: true
        };
        return rp.get(options)
            .catch(function (err) {
            throw (err);
        });
    };
    return Client;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Client;
