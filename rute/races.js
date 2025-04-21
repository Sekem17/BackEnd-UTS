const express = require('express');
const router = express.Router();
const Race = require('../models/Race');

// GET all races
router.get('/', async (req, res) => {
  try {
    const races = await Race.find();
    res.json(races);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET race by ID
router.get('/:id', async (req, res) => {
  try {
    const race = await Race.findById(req.params.id);
    if (!race) return res.status(404).json({ message: 'Race not found' });
    res.json(race);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST create new race
router.post('/', async (req, res) => {
  try {
    const newRace = new Race(req.body);
    await newRace.save();
    res.status(201).json(newRace);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT update race
router.put('/:id', async (req, res) => {
  try {
    const updatedRace = await Race.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedRace) return res.status(404).json({ message: 'Race not found' });
    res.json(updatedRace);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE race
router.delete('/:id', async (req, res) => {
  try {
    const deletedRace = await Race.findByIdAndDelete(req.params.id);
    if (!deletedRace) return res.status(404).json({ message: 'Race not found' });
    res.json({ message: 'Race deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
