const express = require('express');
const Weapon = require('../models/Weapon');

const router = express.Router();

// GET /weapons - list all weapons
router.get('/', async (req, res) => {
  try {
    const weapons = await Weapon.find();
    res.json(weapons);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching weapons', error: err });
  }
});

module.exports = router;
