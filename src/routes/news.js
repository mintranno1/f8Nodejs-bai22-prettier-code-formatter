const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewController');

// router.use('/', (req, res) => {
//     res.render('news');
// });
router.use('/:slug', newsController.show);

router.use('/', newsController.index); //route gốc phải đưa xuống cuối nếu không có mặc định chạy trước mà không chạy vào cac router khác.

module.exports = router;
