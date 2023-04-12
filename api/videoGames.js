const express = require('express');
const router = express.Router();

const REPLACE_ME = 'HELP REPLACE ME!!!!';

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
        const videoGame = await getVideoGameById(REPLACE_ME);
        res.send(videoGame);
    } catch (error) {
        next(error);
    }
});

// POST - /api/video-games - create a new video game
router.patch('/', async (req, res, next) => {
    try {
        const videoGame = await createVideoGame(req.body);
        const existingVideoGame = await getVideoGameById(videoGame.id);
        if (existingVideoGame) {
            res.send(existingVideoGame);
        } else {
            const newVideoGame = await createVideoGame(req.body);
            if(newVideoGame) {
                res.send(newVideoGame);
            } else {
                next({
                    name: 'VideoGameCreationError',
                    message: 'There was an error creating the video game.'
                });
            }
        }
    } catch (error) {
        next(error);
    }
});


// PUT - /api/video-games/:id - update a single video game by id
router.put('/:id', async (req, res, next) => {
    try {
        const videoGame = await updateVideoGame(REPLACE_ME, REPLACE_ME);
        res.send(videoGame);
    } catch (error) {
        next(error);
    }
});

// DELETE - /api/video-games/:id - delete a single video game by id
router.delete('/:id', async (req, res, next) => {
    try {
        const videoGame = await deleteVideoGame(req.params.id);
        res.send(videoGame);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
