# App

This app uses CRA (unejected but rewired with `react-app-rewire` and customised with `customize-cra`).

This allows hassle free development without dealing with any of the webpack stuff, but also for the flexibility of some custom features. Such as webpack aliases and custom ESLinting.

# Getting started

Ensure the `server/` dev script is running concurrently and run:

`npm run dev`

To run tests either follow the guide in the [main README](/README.md) or run:

`npm run jest`

To build the app simply run:

`npm run build`