const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categories = Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categories);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.get ('/:id'), (req, res) => {}
  try {
    const categoryId = req.params.id; 
        const category = await Category.findByPk(categoryId, 
      include, [{ model: Product }], 
    {  if (category) {
        res.status(404).json({ message: 'Category not found' });
        return; }
    }) } ;

  // find one category by its `id` value
  // be sure to include its associated Products
    

router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(201).json(newCategory);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
  // create a new category
});

router.put('/:id', async (req, res) => {
  if (!updatedCategory[0]) {
    res.status(404).json({ message: 'Category updated' });
    return;
  }
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  try {
    const categoryId = req.params.id;
    const deletedCategory = await Category.destroy({
      where: { id: categoryId },
    }) };

    if (!deletedCategory) {
      res.status(404).json({ message: 'Category not found' });
      return;
    }
  // delete a category by its `id` value
}); 

module.exports = router;
