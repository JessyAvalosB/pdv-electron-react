const { createConnection } = require('promise-mysql');

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

const getProducts = async (search = null) => {
    try {
        const conn = await startConnection();
        const query = `SELECT
                        id,
                        name,
                        price,
                        manage_stock,
                        stock,
                        min_stock,
                        max_stock,
                        code,
                        unity,
                        created_at
                        FROM products ${search ? `WHERE LOCATE('${search}', name) > 0` : ''};`;
        const products = await conn.query(query);
        conn.destroy();
        return products;
    } catch (error) {
        console.error('Error getting products: ', error);
        return [];
    }
};

const insertProduct = async (product) => {
    try {
        const conn = await startConnection();
        await conn.query('INSERT INTO products SET ?', product);
        conn.destroy();
        return true;
    } catch (error) {
        console.log('Error inserting product: ', error);
        return false;
    }
};

const editProduct = async ({ name, price, manage_stock, stock, min_stock, max_stock, code, unity, id }) => {
    try {
        const conn = await startConnection();
        await conn.query(`UPDATE products SET
                            name = ?,
                            price = ?,
                            manage_stock = ?,
                            stock = ?,
                            min_stock = ?,
                            max_stock = ?,
                            code = ?,
                            unity = ?
                            WHERE id = ?`, [name, price, manage_stock, stock, min_stock, max_stock, code, unity, id]);
        conn.destroy();
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};

const deleteProduct = async (id) => {
    try {
        const conn = await startConnection();
        await conn.query('DELETE FROM products WHERE id = ?', id);
        conn.destroy();
        return true;
    } catch (error) {
        console.log('Error deleting product: ', error);
        return false;
    }
}

module.exports = {
    getProducts,
    insertProduct,
    editProduct,
    deleteProduct,
}