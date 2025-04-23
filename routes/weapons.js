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

  // ini buat update spell berdasarkan ID
  router.put('/:id', async (req, res) => {
      try {
          const updated = await Weapon.findByIdAndUpdate(
              req.params.id,
              req.body,
              { new: true, runValidators: true }
          );
  
          if (!updated) {
              return res.status(404).json({ message: 'Weapon tidak ditemukan' });
          }
  
          res.json(updated);
      } catch (err) {
          res.status(400).json({ message: err.message });
      }
  });
  
  //ini buat tambah spell baru
  router.post('/', async (req, res) => {
      const weapons = new Weapon(req.body);
      try {
          const saved = await weapons.save();
          res.status(201).json(saved);
      } catch (err) {
          res.status(400).json({ message: err.message });
      }
  });
  
  // ini buat hapus spell berdasarkan ID
  router.delete('/:id', async (req, res) => {
      try {
          const deleted = await Weapon.findByIdAndDelete(req.params.id);
          if (!deleted) {
              return res.status(404).json({ message: 'Weapon tidak ditemukan' });
          }
          res.json({ message: 'Weapon berhasil dihapus' });
      } catch (err) {
          res.status(500).json({ message: err.message });
      }
  });

module.exports = router;