# API Documentation

#### Backend deployed [here](https://hertz-api-challenge.herokuapp.com/) on Heroku <br>

## Getting started

To get the server running locally:

- Clone this repo
- **npm install** to install all required dependencies
- **npm run dev** to start the local server
- **knex migrate:latest** to create the database locally
- **knex seed:run** to run the seed file to populate the local database

### Backend framework

I chose to create a Node/Express REST API beacause:

- I'm more familiar and comfortable creating a REST API since I've been working with this technology for the past year and only requries to know 1 language, JavaScript. 

- By using Knex with Express, Knex integrates easily with it and allows more control over how the database is constructed and allows the use of being able to create custom functions to access the database. The downside is that performance is at the mercy of the developer.

## Endpoints

|HTTP Request           |Route           |Description                     |
| ----------------------| ---------------|----------------------------------------|
|POST             |/api/users|Takes a body of userID that's set in an integer and returns if the user has been registered                                                                   |
|GET             |/api/users|Returns the userIDs of the all the registered users 

## Data Model

#### Users

---

```
Users {
  id: integer Primary key
  userId: integer notNullable unique
}
```

## Post Request sample input
---
```
{
  userId: 12345
}
```
## Post Request sample output
---
```
{
  userRegistered: true
}
```

## Get Request sample output
---
```
[
  {
    "userId": 12345
  },
  {
    "userId": 12346
  },
  {
    "userId": 12347
  },
  {
    "userId": 12348
  }
]
```
