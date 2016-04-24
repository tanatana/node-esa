# esa.io API - JavaScript Client

This package is a JavaScript client of the esa.io's API v1, written in TypeScript (and transpiled into Node JS module.

It provides one function for each endpoint, returning a promise.

# Usage Guide

## Package Installation

This project can be installed as a node module with

```js
$ npm install tanatana/node-esa
```

We are currently preparing for publish npm package.

## Basic Usage

### Setup

```js
var Esa = require('node-esa').Esa;
var esa = new Esa(YOUR_TEAM_NAME, YOUR_ACCESS_TOKEN);
```

### Fetch team stats.
```js
esa.teams.stats().then(function(stats){
  console.log(stats);
});
```

### Fetch team members.
```js
esa.teams.members().then(function(members){
  console.log(members);
});
```

### Fetch recent posts.
```js
esa.teams.posts().then(function(posts){
  console.log(posts);
});
```

### Fetch a specific post.
```js
esa.teams.post(POST_NUMBER).then(function(post){
  console.log(post);
});
```

### Fetch a specific comment.
```js
esa.teams.comment(COMMENT_NUMBER).then(function(comment){
  console.log(comment);
});
```

# Development

wip.

## TODO
- Supports all endpoints.

## How to build
## Testing

# Contributors
Feel free to send a pull request if you wish to contribute.

# Legal

API Client provided under the MIT license.
