const express = require('express');
const router = express.Router();
const Spell = require('../models/Spell');

//ini buat mendapatkan semua data spell yang ada
router.get('/', async (req, res) => {
    try {
        const spells = await Spell.find();
        res.json(spells);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// ini buat mendapatkan spell berdasarkan ID
router.get('/:id', async (req, res) => {
    try {
        const spells = await Spell.findById(req.params.id);
        if (!spells) {
            return res.status(404).json({ message: 'Spell tidak ditemukan' });
        }
        res.json(spells);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// ini buat update spell berdasarkan ID
router.put('/:id', async (req, res) => {
    try {
        const updated = await Spell.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updated) {
            return res.status(404).json({ message: 'Spell tidak ditemukan' });
        }

        res.json(updated);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

//ini buat tambah spell baru
router.post('/', async (req, res) => {
    const spells = new Spell(req.body);
    try {
        const saved = await spells.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// ini buat hapus spell berdasarkan ID
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Spell.findByIdAndDelete(req.params.id);
        if (!deleted) {
            return res.status(404).json({ message: 'Spell tidak ditemukan' });
        }
        res.json({ message: 'Spell berhasil dihapus' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
        
module.exports = router;