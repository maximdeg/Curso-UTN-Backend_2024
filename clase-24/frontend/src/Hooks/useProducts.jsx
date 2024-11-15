import React, { useEffect, useState } from 'react';
import { GET } from '../fetching/http.fetching';
import { getAuthenticatedHeaders } from '../utils/Headers';

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [isLoadingProducts, setIsLoadingProducts] = useState(true);

    const getProducts = async () => {
        const response = await GET('http://127.0.0.1:3000/api/products', {
            headers: getAuthenticatedHeaders(),
        });

        if (response.ok) {
            setProducts(response.payload.products);
            setIsLoadingProducts(false);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);
    return { products, isLoadingProducts };
};

export default useProducts;
