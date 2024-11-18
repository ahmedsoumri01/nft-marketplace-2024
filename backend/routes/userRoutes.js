const express = require('express');
const router = express.Router();
const { getUser } = require('../controllers/User/userController');


// @route   GET api/user
// @desc    Get user by token
// @access  Private
router.get('/profile', getUser);



module.exports = router;