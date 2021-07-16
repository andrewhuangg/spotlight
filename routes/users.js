const express = require('express');
const { updateUser, deleteUser, getUser, getUsers, getUserStats } = require('../controllers/users');
const { protect } = require('../middleware/protect');
const router = express.Router();

router.route('/stats').get(protect, getUserStats);
router.route('/:id').get(getUser).put(protect, updateUser).delete(protect, deleteUser);
router.route('/').get(protect, getUsers);

module.exports = router;
