var express = require('express');
var router = express.Router();

const {
    getAllCategories,
    addCategory,
} = require('../controllers/categories.js');

/* GET users listing. */
router.get('/categorias', getAllCategories);
router.post('/addCategory', addCategory)

module.exports = router;
