// Imports the Express Router and models.
const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint.
// Find all tags.
// be sure to include its associated Product data
router.get('/', async (req, res) => {

});

// Find a single tag by its `id`.
// be sure to include its associated Product data
router.get('/:id', async (req, res) => {

});

// Create a new tag.
router.post('/', async (req, res) => {

});

// Update a tag's name by its `id` value.
router.put('/:id', async (req, res) => {

});

// Delete on tag by its `id` value.
router.delete('/:id', async (req, res) => {
  
});

module.exports = router;
