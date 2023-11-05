const express = require('express');
const router = express.Router();
const user = require('../controllers/Cuser');

router.get('/', user.signIn);

module.exports = router;