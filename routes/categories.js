var express = require('express');
var router = express.Router();

const {
    getAllCategories,
} = require('../controllers/categories.js');

/* GET users listing. */
router.get('/categorias', getAllCategories);

module.exports = router;
