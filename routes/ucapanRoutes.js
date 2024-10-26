const express = require('express');
const router = express.Router();
const { getUcapan, addUcapan } = require('../controllers/ucapanController');

// Route GET dan POST untuk ucapan
router.get('/', getUcapan);
router.post('/add', addUcapan);

module.exports = router;
