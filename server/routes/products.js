const router = require('express').Router();

const productQuerys = require('../../config/database/products');

router.get('/', async (req, res) => {
    const products = await productQuerys.getProducts();
    res
        .status(200)
        .send({
            response: 'Get products done.',
            products,
            // sales,
        });
});

router.post('/search', async (req, res) => {
    const { search } = req.body;
    const products = await productQuerys.getProducts(search);
    res
        .status(200)
        .send({
            response: 'Get filter products done.',
            products,
            // sales,
        });
});

router.post('/add', async (req, res) => {
    const insertRes = await productQuerys.insertProduct(req.body);
    const code = insertRes ? 201 : 409;
    const response = `Product inserted ${insertRes ? 'succcesfully' : 'failed'}.`;
    res
        .status(code)
        .send({ response })
});

router.post('/edit', async (req, res) => {
    const editRes = await productQuerys.editProduct(req.body);
    const code = editRes ? 201 : 409;
    const response = `Product edited ${editRes ? 'successfully' : 'failed'}.`;
    res
        .status(code)
        .send({ response });
});

router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;
    const deleteRes = await productQuerys.deleteProduct(id);
    const code = deleteRes ? 200 : 409;
    const response = `Product deleted ${deleteRes ? 'successfully' : 'failed'}.`;
    res
        .status(code)
        .send({ response });
});

module.exports = router;