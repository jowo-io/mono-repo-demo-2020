# CRA + Express Mono repo starter 2020

This project is a mono-repo starter with a Frontend and a Backend with a scripts package shared between the two!

The mono-repo has Jest & Babel as well as ESLint/Prettier configured in all packages.

See the blog post for more detail [here](https://medium.com/@jowo_io/my-javascript-development-stack-in-2020-react-express-mono-repo-4418c8988e82)

## App/Frontend

Uses React CRA (unejected but rewired with `react-app-rewire` and customised with `customize-cra`).

See the [app readme here](./packages/app/README.md)

## Server/Backend

Uses a custom webpack config to generate a single bundle file which can be deployed to a remote server. Is configured with Jest, ES6/Babel, Express. It is run in the background with Nodemon.

See the [server readme here](./packages/server/README.md)

## Shared

A useful package which includes shared scripts. They can be imported in either `app/` or `server/` using the webpack alias `MM:Shared`. This avoids the need to faff about with `.symlinks`, `npm link` or Lerna.


See the [shared readme here](./packages/shared/README.md)

----

# Getting started

First, run `npm install` in the repo root, then cd into each of the folders inside `packages/` and again run `npm install`.

Next you'll want to concurrently run:

`cd packages/app/ && npm run dev`

and

`cd packages/server/ && npm run dev`

and finally open the CRA test port at `localhost:3000`

# About

See below for an overview of the mono-repo features:

## Node

This repo is powered by Node `v14.4.0`. On windows you can use the `Nodist` cli to manage your local Node versions.

## VSCode

This repo is configured for usage with VSCode and the following VSCode plugins:

* `dbaeumer.vscode-eslint`
    The project is configured to auto-format all JS files on save
* `asvetliakov.run-current-test`
    `CTRL` + `SHIFT` + `P` while you have a `*.test.js` open and search for `Run current test`.


## ESLint

Auto-formatting on save should be configured in VSCode. However to ESLint across all packages you can run `npm run eslint` in the repo root.

All ESLint config is handled in the root lint file: `/.eslintrc.js`

## JSConfig

There are custom `jsconfig.json` files in use in each package for VSCode intellisense / aliased import path auto lookup!

## Jest

Each package has a basic Babel and Jest config which allows for ES6 imports and webpack aliases!

