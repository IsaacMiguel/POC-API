const express = require('express');
const router = express.Router();

// GET all players
router.get('/', (req, res) => {
    res.json({});
});

// GET player by id
router.get('/:id', (req, res) => {
    res.json({});
});

// POST new player
router.post('/', (req, res) => {
    res.json({});
});

// PUT update player
router.put('/:id', (req, res) => {
    res.json({});
});

// PATCH partial update player
router.patch('/:id', (req, res) => {
    res.json({});
});

// DELETE player
router.delete('/:id', (req, res) => {
    res.json({});
});

module.exports = router;