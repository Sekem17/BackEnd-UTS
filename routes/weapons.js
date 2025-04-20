const express = require('express');
const router = express.Router();
const Weapon = require('../models/Weapon');

// Menampilkan semua weapon
router.get('/', async (req, res) => {
  try {
    const weapons = await Weapon.find();
    res.json(weapons);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Menampilkan weapon berdasarkan ID
router.get('/:id', async (req, res) => {
  try {
    const weapon = await Weapon.findById(req.params.id);
    if (!weapon) {
      return res.status(404).json({ message: 'Weapon tidak ditemukan' });
    }
    res.json(weapon);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;