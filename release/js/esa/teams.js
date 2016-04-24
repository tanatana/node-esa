"use strict";
var Teams = (function () {
    function Teams(client) {
        this.client = client;
    }
    Teams.prototype.teams = function () {
        this.client.getJSON("");
    };
    Teams.prototype.stats = function () {
        return this.client.getJSON("/stats").catch(function (_) {
            return Promise.reject(_);
        });
    };
    Teams.prototype.members = function () {
        return this.client.getJSON("/members").catch(function (_) {
            return Promise.reject(_);
        });
    };
    Teams.prototype.posts = function () {
        return this.client.getJSON("/posts").catch(function (_) {
            return Promise.reject(_);
        });
    };
    Teams.prototype.post = function (postId) {
        return this.client.getJSON("/posts/" + postId).catch(function (_) {
            return Promise.reject(_);
        });
    };
    // POST /v1/teams/:team_name/posts
    // create a new post.
    // PATCH /v1/teams/:team_name/posts/:post_number
    // edit the post.
    // DELETE /v1/teams/:team_name/posts/:post_number
    // delete the post.
    Teams.prototype.comments = function (postId) {
        return this.client.getJSON("/posts/" + postId + "/comments").catch(function (_) {
            return Promise.reject(_);
        });
    };
    Teams.prototype.comment = function (commentId) {
        return this.client.getJSON("/comments/" + commentId).catch(function (_) {
            return Promise.reject(_);
        });
    };
    return Teams;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Teams;
