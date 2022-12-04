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

module.exports = {
    startConnection,
}