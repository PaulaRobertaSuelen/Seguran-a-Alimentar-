const express = require('express');
const router = express.Router();


const authController = require('../controllers/authController')
const userController = require('../controllers/userController')

router.post('/user/login', authController.userLogin)

router.post('/user/create', userController.createUser)

module.exports = router;