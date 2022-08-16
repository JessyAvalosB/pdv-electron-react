const router = require('express').Router();

const { getProducts } = require('../../config/database/index');

router.get('/', async (req, res) => {
    const products = await getProducts();
    // const sales = await db.query('SELECT * FROM sales');

    res
        .status(200)
        .send({
            response: 'Get products done.',
            products,
            // sales,
        });
});

module.exports = router;