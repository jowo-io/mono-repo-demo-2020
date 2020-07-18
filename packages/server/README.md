# Server

Uses a custom webpack config to generate a single bundle file which can be deployed to a remote server. Is configured with Jest, ES6/Babel, Express. It is run in the background with Nodemon which has been configured with Node/Chrome `--inspect` for much easier debugging.

# Getting started

To develop, run:

`npm run dev`

> NOTE - console logging has been disabled in the webpack config, and node --inspect has been enabled!

To run tests either follow the guide in the [main README](/README.md) or run:

`npm run jest`

To build the server simply run:

`npm run build`

The server bundle is output to `build/server.bundle.js`.