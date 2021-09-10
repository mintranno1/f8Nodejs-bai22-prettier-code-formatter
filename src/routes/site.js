const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.use('/search', siteController.search); // Trang search

router.use('/', siteController.index); // Trang home



module.exports = router;