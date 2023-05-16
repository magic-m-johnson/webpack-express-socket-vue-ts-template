# Complete Application Monorepo Template

This is a template monorepo for a full application, including a backend via NodeJS + Typescript + ExpressJS + Socket.io
and a frontend with Webpack + Babel + Typescript + VueJS.

Simply run `yarn` and `yarn start` to run both in dev mode or `yarn serve` for production mode.

Style and formatting checks are done via eslint + prettier in both ends.

Uses the following versions:

* `NodeJS 18` latest LTS version
* `Yarn 1`, because 2+ is still quite incompatible with TS and different loaders as of today
* `Vue 3` SFC type components
* `Webpack 5` which might require DefinePlugin for env var access
