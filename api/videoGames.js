// ROUTE DEFINITIONS
    // I receive a request then determine what to do with that request using a function
    // Example: You want video game by ID? I'll return video game by ID

const express = require('express');

// Router allows us to create routes within routes to separate them into different files and components
const router = express.Router();

const PORT = 8080;

const { getAllVideoGames,
    getVideoGameById,
    createVideoGame,
    updateVideoGame,
    deleteVideoGame } = require('../db/videoGames');

// GET - /api/video-games - get all video games
router.get('/', async (req, res, next) => {
    try {
        const videoGames = await getAllVideoGames();
        res.send(videoGames);
    } catch (error) {
        next(error);
    }
});

// GET - /api/video-games/:id - get a single video game by id
router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const videoGame = await getVideoGameById(id);
        res.send(videoGame);
    } catch (error) {
        next(error);
    }
});

// POST - /api/video-games - create a new video game
router.post('/', async (req, res, next) => {
    try {
        console.log('request body:', req.body)
        const { name, description, price, inStock, isPopular, imgUrl } = req.body.videoGame;
        
        if (!name || !description || !price) {
            res.status(400).send({
                message: 'Request to create video game requires a name, description, and price.',
            });
        }
        const videoGame = {videoGame: {
            name, description, price, inStock, isPopular, imgUrl
        }}

        console.log('game:', videoGame)
        const newVideoGame = await createVideoGame(videoGame);
        res.send(newVideoGame);

    } catch (error) {
        next(error);
    } 
});

// // Extract the inserted video game from the query result
//     res.status(201).send({
//         message: `Task successfully created.`,
//     });

// PUT - /api/video-games/:id - update a single video game by id
router.put('/:id', async (req, res, next) => {
    // LOGIC GOES HERE 
});

// DELETE - /api/video-games/:id - delete a single video game by id
router.delete('/:id', async (req, res, next) => {
    // LOGIC GOES HERE
});

module.exports = router;
