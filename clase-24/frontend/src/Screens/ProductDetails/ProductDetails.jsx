import React from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../../context/GlobalContext';

const ProductDetails = () => {
    const { product_id } = useParams();

    return <div>{product_id}</div>;
};

export default ProductDetails;
