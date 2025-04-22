const express = require('express');
const router = express.Router();
const Spell = require('../models/Spell'); 

// Menampilkan semua list spells
router.get('/', async (req, res) => {
  try {
    const spells = await Spell.find();
    res.json(spells);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Menampilkan spell berdasarkan ID
router.get('/:id', async (req, res) => {
  try {
    const spell = await Spell.findById(req.params.id);
    if (!spell) {
      return res.status(404).json({ message: 'Spell tidak ditemukan' });
    }
    res.json(spell);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;