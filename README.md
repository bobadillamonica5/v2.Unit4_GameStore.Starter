# CRUD Routes with Express and PostgreSQL

## Overview

In this workshop, you will learn how to create a RESTful API with Express using try / catch blocks. We'll also review body-parser and how to use it to parse the body of a request as well as CORS middleware.

## PostgreSQL

Be sure that your PostgreSQL database is running before you start this demo.

Login as a user with the `SUPERUSER` role. You can do this by running the following command in your terminal:

```bash
psql -U postgres
```

Create a new database called `gamestore`:

```sql
CREATE DATABASE gamestore;
```

## Workshop
1. Clone this repo. 
2. Navigate to the top folder that contains `package.json`.
3. Run `npm install` to install the dependencies.
4. Run `npm run seed` to seed the database.
5. Run `npm start` to start the server.

## Objectives

1. Test