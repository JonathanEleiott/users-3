# BCrypt & JWT & localStorage & .env

## BCrypt - encrypting and decrypting information

## JWT - authenticating a user after they've logged in

## localStorage - a place to store a key/value pair in the browser

## .env - stores information we don't want to share with others

- create a .env file
- require('dotenv').config() -> put in the server at the top
- process.env.VARIABLE_NAME
- Things to put in your .env
  - DATABASE_URL
  - PORT
  - JWT_SECRET
