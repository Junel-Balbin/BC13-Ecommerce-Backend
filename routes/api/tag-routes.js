// Imports the Express Router and models.
const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint.
// Find all tags.
router.get('/', async (req, res) => {
  try {
    const tag = await Tag.findAll({
      include: [{ model: Product, through: ProductTag, }],
      });
      res.status(200).json(tag);

      } catch (err) {
      res.status(500).json();
      }
});

// Find a single tag by its `id`.
// be sure to include its associated Product data
router.get('/:id', async (req, res) => {
  try {
    const tagId = await Tag.findByPk(req.params.id, {
      include: [{ model: Product, through: ProductTag, }],
      });
      if (!tagId) {
      return res.status(404).json({ message: "ID not found" });
      }
      res.status(200).json(tagId);

      } catch (err) {
        res.status(500).json();
      }
});

// Create a new tag.
router.post('/', async (req, res) => {
  try {
    const newTag = await Tag.create(req.body);
    res.status(200).json(newTag);
    
  } catch (err) {
    res.status(400).json();
    }
});

// Update a tag's name by its `id` value.
router.put('/:id', async (req, res) => {
  try {
    const updatedTag = await Tag.update(req.body, { where: { id: req.params.id } });
    
    !updatedTag[0] ? res.status(404).json({ message: 'ID not found' }) : 
    res.status(200).json(updatedTag);
        
  } catch (err) {
    res.status(500).json();
    }
    
});

// Delete on tag by its `id` value.
router.delete('/:id', async (req, res) => {
  try {
    const removedTag = await Tag.destroy({ where: { id: req.params.id } });
    
    if (!removedTag) {
      return res.status(404).json({ message: 'Product not found.' });
      } 
      res.status(200).json(removedTag);
    }
    
    catch (err) {
    res.status(500).json(err);
    }
    
});
  

module.exports = router;

// Class Mini Project 13 helped with structure and code snippets.