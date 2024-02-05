// DATABASE - This file makes calls to the database

const client = require('./client');
// used to make queries to PostgreSQL

const util = require('util');

const PORT = 8080;

// [COMPLETE] GET - /api/video-games - get all video games
async function getAllVideoGames() {
    try {
        // create a variable that deconstructs rows from videoGames table named videoGames
        // within that variable, select all from videoGames and it should just return rows
        const { rows: videoGames } = await client.query(`SELECT * FROM videoGames`);
        return videoGames;
    } catch (error) {
        throw new Error("Make sure you have replaced the REPLACE_ME placeholder.")
    }
}

// [COMPLETE] GET - /api/video-games/:id - get a single video game by id
async function getVideoGameById(id) {
    try {
        const { rows: [videoGame] } = await client.query(`
            SELECT * FROM videoGames
            WHERE id = $1;
        `, [id]);
        return videoGame;
    } catch (error) {
        throw error;
    }
}

// [COMPLETE] POST - /api/video-games - create a new video game

async function createVideoGame(videoGame) {

    try {
        // destructure these fields from the object inside of videoGame
            // { videogGame: { id, name... } }
        const { name, description, price, inStock, isPopular, imgUrl } = videoGame.videoGame;

        // Perform database query to insert the new video game
        const result = await client.query(`
            INSERT INTO videoGames (name, description, price, "inStock", "isPopular", "imgUrl")
            VALUES ($1, $2, $3, $4, $5, $6);
        `, [name, description, price, inStock, isPopular, imgUrl]);

    } catch (error) {
        throw error;  // Propagate the error to be handled by the calling code
    }
}

// PUT - /api/video-games/:id - update a single video game by id
async function updateVideoGame(id, fields = {}) {
    // LOGIC GOES HERE
}

// DELETE - /api/video-games/:id - delete a single video game by id
async function deleteVideoGame(id) {
    // LOGIC GOES HERE
}

module.exports = {
    getAllVideoGames,
    getVideoGameById,
    createVideoGame,
    updateVideoGame,
    deleteVideoGame
}

    // try {
    //     const { videoGame: { id, name, description, price, inStock, isPopular, imgUrl } } = req.body;

    //     // if there is no id or name given, respond with an error message
    //     if (!id || !name) {
    //         return res.status(400).send({
    //             message: 'Request to create video games requires an id and name.',
    //         });
    //     }

    //     await client.query(`
    //         INSERT INTO videoGames (id, name, description, price, inStock, isPopular, imgUrl) VALUES ($1, $2, $3, $4, $5, $6, $7);
    //     `, [id, name, description, price, inStock, isPopular, imgUrl]);

    //     res.status(201).send({
    //         message: 'Video game successfully created.',
    //     });
    // } catch (e) {
    //     console.error('Failed to create video game.', e);
    //     res.sendStatus(500);
