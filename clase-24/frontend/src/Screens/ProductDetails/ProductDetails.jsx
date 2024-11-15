import React from 'react';
import { useParams } from 'react-router-dom';
import useProductDetails from '../../Hooks/useProductDetails';

const ProductDetails = () => {
    const { product_id } = useParams();
    const user_info = JSON.parse(sessionStorage.getItem('user_info'));

    const { productDetails, isLoadingProducts } = useProductDetails();

    return (
        <div>
            <h1>
                <strong>{productDetails.name}</strong>
            </h1>
            {isLoadingProducts ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    <img src={productDetails.image_base_64} style={{ width: '100px' }} />
                    <div>Description: {productDetails.description}</div>
                    <div>Price: ${productDetails.price}</div>
                    <div>Stock: {productDetails.stock}</div>
                    <div>Category: {productDetails.category}</div>
                </div>
            )}
        </div>
    );
};

// TODO: Create a component to show the product details instead of up here

export default ProductDetails;
