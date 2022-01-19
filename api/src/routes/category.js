const { Router } = require('express');
const createNewCategory = require('../controllers/Categories/PostCategories.js')
const updateCategory = require('../controllers/Categories/UpdateCategory')
const getCategories = require('../controllers/Categories/GetCategories')

const router = Router();

router.get('/', getCategories)

router.post('/', createNewCategory);

router.put('/:id', updateCategory);

module.exports = router;