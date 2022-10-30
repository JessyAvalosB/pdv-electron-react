const router = require('express').Router();

const { getProducts, insertProduct } = require('../../config/database/index');

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

router.post('/add', async (req, res) => {
    const insertRes = await insertProduct(req.body);
    console.log(insertRes);
    const code = insertRes ? 201 : 409;
    const response = `Product inserted ${insertProduct ? 'succcesfully' : 'failed' }.`;
    res
        .status(code)
        .send({response})
});

module.exports = router;