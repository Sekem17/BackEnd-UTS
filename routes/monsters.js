const express = require('express');
const router = express.Router();
const Monster = require('../models/Monster');

//ini buat mendapatkan semua data monster yang ada
router.get('/', async (req, res) => {
    try {
        const monsters = await Monster.find();
        res.json(monsters);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// ini buat mendapatkan monster berdasarkan ID
router.get('/:id', async (req, res) => {
    try {
        const monster = await Monster.findById(req.params.id);
        if (!monster) {
            return res.status(404).json({ message: 'Monster tidak ditemukan' });
        }
        res.json(monster);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// ini buat update monster berdasarkan ID
router.put('/:id', async (req, res) => {
    try {
        const updated = await Monster.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updated) {
            return res.status(404).json({ message: 'Monster tidak ditemukan' });
        }

        res.json(updated);
    } catch (err) {
        res.status(400).json({ message: err.message });
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

// ini buat hapus monster berdasarkan ID
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Monster.findByIdAndDelete(req.params.id);
        if (!deleted) {
            return res.status(404).json({ message: 'Monster tidak ditemukan' });
        }
        res.json({ message: 'Monster berhasil dihapus' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
        
module.exports = router;