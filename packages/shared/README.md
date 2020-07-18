# Shared

A useful package which includes shared scripts. They can be imported in either `app/` or `server/` using the webpack alias `MM:Shared`. This avoids the need to faff about with `.symlinks`, `npm link` or Lerna.

Any scripts which you will need to access on both the server/backend and the app/frontend can be added here, and then imported using:

```javascript
import myScript from "MM:Shared/scripts/myScript";
```

# Getting started

This package contains no `dev` or `build` scripts.

To run tests either follow the guide in the [main README](/README.md) or run:

`npm run jest`

