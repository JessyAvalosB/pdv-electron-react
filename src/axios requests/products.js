import axios from 'axios';

export const getProducts = async (setProducts) => {
    await axios.get(`http://localhost:3002/products`)
        .then(data => {
            if (data.status === 200) {
                setProducts(data.data.products);
            }
        })
        .catch(err => {
            // TODO: handle error
            console.log(err);
        });
}

