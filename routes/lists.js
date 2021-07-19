const express = require('express');
const { createList, deleteList, getLists } = require('../controllers/lists');
const { protect } = require('../middleware/protect');
const router = express.Router();

router.route('/:id').delete(protect, deleteList, getLists);
router.route('/').get(protect, getLists).post(protect, createList);

module.exports = router;
