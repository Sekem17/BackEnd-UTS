const express = require('express');
const router = express.Router();
const Monster = require('../models/Monster');

//ini buat mendapatkan semua data mosnter yang ada
router.get('/', async (req, res) => {
    try {
        const monsters = await Monster.find();
        res.json(monsters);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//ini buat tambah monster baru
router.post('/', async (req, res) => {
    const monster = new Monster(req.body);
    try {
        const saved = await monster.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});
        
module.exports = router;