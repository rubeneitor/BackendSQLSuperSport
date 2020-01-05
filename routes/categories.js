var express = require('express');
var router = express.Router();

const {
    getAllCategories,
    addCategory,
} = require('../controllers/categories.js');

/* GET categories listing. */
router.get('/', getAllCategories);
router.post('/addCategory', addCategory)

module.exports = router;
