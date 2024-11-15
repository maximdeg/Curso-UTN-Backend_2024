import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GET } from '../fetching/http.fetching';
import { getAuthenticatedHeaders } from '../utils/Headers';

const useProductDetails = () => {
    const { product_id } = useParams();
    const [productDetails, setProductDetails] = useState([]);
    const [isLoadingProducts, setIsLoadingProducts] = useState(true);

    const getProductDetails = async (id) => {
        const response = await GET('http://127.0.0.1:3000/api/products/' + id, {
            headers: getAuthenticatedHeaders(),
        });

        if (response.ok) {
            console.log(response.payload.product_found);
            setProductDetails(response.payload.product_found);
            setIsLoadingProducts(false);
        } else {
            // TODO: HANDLE ERRORS HERE
            // setProductDetailErrors(product_detail_response.payload.errors)
        }
    };

    useEffect(() => {
        getProductDetails(product_id);
    }, []);
    return { productDetails, isLoadingProducts };
};

export default useProductDetails;
