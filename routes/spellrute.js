const express = require('express');
const router = express.Router();
const controller = require('../controllers/spellController');

router.get('/', controller.getAllSpells);
router.post('/', controller.createSpell);

module.exports = router;
