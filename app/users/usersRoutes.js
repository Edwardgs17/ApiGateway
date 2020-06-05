const express = require('express');

const router = express.Router();
const UsersController = require('./UsersController');
const Token = require('../utils/Token');

router.post('/login', UsersController.login);
router.post('/signin', UsersController.signin);
router.put('/:email/password', Token.Verify, UsersController.changePassword);
router.put('/:email', Token.Verify, UsersController.upDateUser);
router.get('/:email', Token.Verify, UsersController.findUserByEmail);
router.get('/:id/user', UsersController.getUsers);
router.put('/recoverPass/:email', UsersController.recoverPass);

module.exports = router;
