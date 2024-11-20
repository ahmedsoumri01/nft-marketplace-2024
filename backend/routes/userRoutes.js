const express = require('express');
const router = express.Router();
const { getUser,updateUserBio,updateUsername,updateSocialLinks,firstTimeLogin,completeUserProfile } = require('../controllers/User/userController');
const authMiddleware = require('../middleware/authMiddleware');

// @route   GET api/user
// @desc    Get user by token
// @access  Private
router.get('/profile',authMiddleware, getUser);

// @route   PUT api/user/bio
// @desc    Update user bio
// @access  Private
router.put('/profile/update/bio',authMiddleware, updateUserBio);

// @route   PUT api/user/username
// @desc    Update username
// @access  Private
router.put('/profile/update/username',authMiddleware, updateUsername);

// @route   PUT api/user/socialLinks
// @desc    Update socialLinks
// @access  Private
router.put('/profile/update/socialLinks',authMiddleware, updateSocialLinks);

// @route   PUT api/user/firstTimeLogin
// @desc    Update firstTimeLogin
// @access  Private
router.put('/profile/update/firstTimeLogin',authMiddleware, firstTimeLogin);

 
// @route   PUT api/user/completeUserProfile
// @desc    Update completeUserProfile
// @access  Private
router.put('/profile/update/completeUserProfile',authMiddleware, completeUserProfile);


module.exports = router;