import React, { useEffect, useState } from 'react';
import { GET } from '../fetching/http.fetching';

const useProducts = () => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const response = await GET('http://127.0.0.1:3000/api/products', {
            headers: {
                'x-api-key': 'f77fa1b6-f294-4240-adbc-32f8e84dbc62',
                Authentication: sessionStorage.getItem('access_token'),
            },
        });

        if (response.ok) {
            setProducts(response.payload.products);
        }
    };

    useEffect(() => {
        getProducts();
    });
    return { products };
};

export default useProducts;
