# Seed Project setup

1.  Create `.env` file in your `./server` directory with the following env variables

    `GRAPHQL_PORT= *example: 4000 (default for a create react app)*`
    `API_URL= *example: https://swapi.dev/api/ (the URL for the REST API you'd like to call)*`
    `MONGO_DB_PASSWORD= *example: your mongo password*`
    `MONGO_DB_USERNAME= *example: your mongo username*`
    `MONGO_DB_USERNAME= *example: your mongo url (starts with cluster if using Atlas*`
    `MONGO_DB_NAME= *example: you mongo DB's name`
    `JWT_SECRET= *example: someRandomJWTSecretString`

2.  Create a `.env.local` file in your `./client` directory with the following env variables:

    `GRAPHQL_URL= *example: http://localhost:4000/graphql*`

## Start the Seed Project

1. Install dependencies for both server and client by running `npm (or yarn) run install-all` in the root of the project.
2. Start up both projects by running `npm start` in the root of the project`
