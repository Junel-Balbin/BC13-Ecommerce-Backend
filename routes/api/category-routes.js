// Imports the Express Router and models.
const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint.
// Find all categories.
router.get('/', async (req, res) => {
  try {
    const category = await Category.findAll({
      include: [{ model: Product, }] 
    });
      res.status(200).json(category);
    } catch (err) {
      res.status(500).json(err);
    }
});

// Find one category by its `id` value.
router.get('/:id', async (req, res) => {
  try {
    const categoryId = await Category.findByPk(req.params.id, 
    { include: [{ model: Product }] });

    if (!categoryId) {
      return res.status(404).json({ message: 'ID not found' });
    }
    res.status(200).json(categoryId);

  } catch (err) {
    res.status(500).json(err);
  }
});

  // Creates a new category.
router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);

  } catch (err) {
    res.status(400).json();
  }
});

// Update a category by its `id` value.
router.put('/:id', async (req, res) => {
  try {
    const updatedCategory = await Category.update(req.body, { where: { id: req.params.id } });

    !update[0] ? res.status(404).json({ message: 'ID not found' }) : 
    res.status(200).json(updatedCategory);
    
  } catch (err) {
    res.status(500).json();
  }

});

// Delete a category by its `id` value.
router.delete('/:id', async (req, res) => {
  try {
    const removedCategory = await Category.destroy({ where: { id: req.params.id } });

    if (!removedCategory) {
      return res.status(404).json({ message: 'Product not found.' });
    } 
    res.status(200).json(removedCategory);
  }

  catch (err) {
    res.status(500).json(err);
  }

});

module.exports = router;

// Class Mini Project 13 helped with structure and code snippets.