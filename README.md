# Workshop: Backend Fundamentals - Gamestore

## Overview

In this workshop, you will learn how to create a RESTful API with Express using try / catch blocks. We'll also review body-parser and how to use it to parse the body of a request as well as CORS middleware.

## Getting Started with PostgreSQL

Be sure that your PostgreSQL database is running before you start this demo.

Login as a user with the `SUPERUSER` role. You can do this by running the following command in your terminal:

```bash
psql -U postgres
```

Create a new database called `gamestore`:

```sql
CREATE DATABASE gamestore;
```

## Getting Started with the Workshop

1. Clone this repo.
2. Navigate to the top folder that contains `package.json`.
3. Run `npm install` to install the dependencies.
4. Run `npm run seed` to seed the database.
5. Run `npm start` to start the server.

### Problem 1: GET all video games

Inside our `/api/` directory, we have a `videoGames.js` file. This file contains all of our video game routes. We have already created the route handler for `GET /api/video-games`. This route handler will return all of the video games in our database.

Unfortunately, there is a problem with the database query. The query is not returning any video games. We need to fix this query so that it returns all of the video games in our database.

HINT: Follow the logic in the `getAllVideoGames()` function.

### Problem 2: GET video games by ID

Our `GET /api/video-games/:id` route handler is not working. We need to fix this route handler so that it returns a single video game by ID.

### Problem 3: POST add a new video game

Write the route handler and database query for `POST /api/video-games`. This route handler should add a new video game to the database.

HINT: Follow the logic in the `createVideoGame()` function.

### Problem 4: PUT update a video game

Write the route handler and database query for `PUT /api/video-games/:id`. This route handler should update a video game in the database.

### Problem 5: DELETE a board game

Write the route handler and database query for `DELETE /api/video-games/:id`. This route handler should delete a video game from the database.

### Endpoints

Port 8080 by default.

| Method | Endpoint             | Description                       |
| ------ | -------------------- | --------------------------------- |
| GET    | /                    | Returns a welcome message         |
| GET    | /api/health          | Returns a health check message    |
| GET    | /api/video-games     | Returns all video games           |
| GET    | /api/video-games/:id | Returns a single video game by ID |
| POST   | /api/video-games     | Adds a new video game             |
| PUT    | /api/video-games/:id | Updates a video game              |
| DELETE | /api/video-games/:id | Deletes a video game              |
| GET    | /api/board-games     | Returns all board games           |
| GET    | /api/board-games/:id | Returns a single board game by ID |
| POST   | /api/board-games     | Adds a new board game             |
| PUT    | /api/board-games/:id | Updates a board game              |
| DELETE | /api/board-games/:id | Deletes a board game              |
