const { startConnection } = require("..");

const settingProductsURL = (action) => {
    switch (action) {
        case 'GET':
            return `SELECT
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
                        FROM products`;
        case 'INSERT':
            return 'INSERT INTO products SET ?';
        case 'UPDATE':
            return `UPDATE products SET
                            name = ?,
                            price = ?,
                            manage_stock = ?,
                            stock = ?,
                            min_stock = ?,
                            max_stock = ?,
                            code = ?,
                            unity = ?
                        WHERE id = ?`;
        case 'DELETE':
            return 'DELETE FROM products WHERE id = ?';
        default:
            break;
    }
}

const isNumeric = (num) => {
    return !isNaN(num)
}

// TODO: Revisar esta idea.
const queryExecution = async (action, data) => {
    const conn = await startConnection();
    const query = settingProductsURL(action);

    switch (action) {
        case 'GET':
            break;
        case 'INSERT':
            conn.query(query, data.product);
            break;
        case 'UPDATE':
            break;
        case 'DELETE':
            break;
        default:
            break;
    }
};

const getProducts = async (search = null) => {
    try {
        let queryCondition = '';
        if (search && search.length > 0) {
            if (isNumeric(search)) {
                queryCondition = ` WHERE code = '${search}'`;
            } else {
                queryCondition = ` WHERE LOCATE('${search}', name) > 0;`;
            }
        }
        const conn = await startConnection();
        const query = settingProductsURL('GET') + queryCondition;
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