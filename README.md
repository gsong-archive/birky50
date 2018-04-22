# Sam & Sue’s 50th Anniversary Celebration Website

A basic React app that demonstrates a lot of concepts. Consult
[create-react-app][] for more info on how to navigate around this app.

Actual site (master): <https://birky50th.com>

Staging site (development): <https://staging.birky50th.com>

## Development

* `npx yarn` to install dependencies
* `npx yarn start` to start development server
* `npx yarn test` to start continuous testing

## Cypress Tests

[Cypress][] end-to-end tests are included. To run them:

1. Install `cypress` globally:

    ```sh
    npm install -g cypress
    ```
1. Run Cypress continuously during development:

    ```sh
    npx cypress open
    ```

You must have [Chrome][] installed.


[chrome]: https://www.google.com/chrome/
[create-react-app]: https://github.com/facebook/create-react-app
[cypress]: https://www.cypress.io
