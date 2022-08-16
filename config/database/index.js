const { createConnection,   } = require('promise-mysql');

const startConnection = async () => {
    try {
        return await createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'pdv_market'
        });
    } catch (error) {
        console.error('Error creating connection: ', error);
        return error;
    }
};

const getProducts = async () => {
    try {
        const conn = await startConnection();
        const products = await conn.query('SELECT * FROM products');
        conn.destroy();
        return products;
    } catch (error) {
        console.error('Error getting products: ', error);
        return [];
    }
};

module.exports = {
    getProducts,
}