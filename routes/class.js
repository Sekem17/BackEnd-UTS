const express = require('express');
const router = express.Router();
const Class = require('../models/Class');

//ini buat mendapatkan semua data class yang ada
router.get('/', async (req, res) => {
    try {
        const classes = await Class.find();
        res.json(classes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// ini buat mendapatkan class berdasarkan ID
router.get('/:id', async (req, res) => {
    try {
        const classes = await Class.findById(req.params.id);
        if (!classes) {
            return res.status(404).json({ message: 'Class tidak ditemukan' });
        }
        res.json(classes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// ini buat update class berdasarkan ID
router.put('/:id', async (req, res) => {
    try {
        const updated = await Class.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updated) {
            return res.status(404).json({ message: 'Class tidak ditemukan' });
        }

        res.json(updated);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

//ini buat tambah class baru
router.post('/', async (req, res) => {
    const classes = new Class(req.body);
    try {
        const saved = await classes.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// ini buat hapus class berdasarkan ID
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Class.findByIdAndDelete(req.params.id);
        if (!deleted) {
            return res.status(404).json({ message: 'Class tidak ditemukan' });
        }
        res.json({ message: 'Class berhasil dihapus' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
        
module.exports = router;