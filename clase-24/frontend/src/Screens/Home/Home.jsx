import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GET } from '../../fetching/http.fetching.js';
// import { useGlobalContext } from '../../context/GlobalContext.jsx';
import useProducts from '../../Hooks/useProducts.jsx';

const Home = () => {
    const user_info = JSON.parse(sessionStorage.getItem('user_info'));
    const { products } = useProducts();

    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         try {
    //             const productsToGet = await GET('http://127.0.0.1:3000/api/products');
    //             setProducts(productsToGet.payload.products);
    //         } catch (err) {
    //             console.error(err);
    //         }
    //     };
    //     fetchProducts();
    // }, []);

    return (
        <div>
            <h1>
                <strong>Welcome to home {user_info.name}</strong>
            </h1>
            <Link to="/product/new">Creat producto</Link>
            {products.length !== 0 &&
                products.map((product) => {
                    return (
                        <div key={product._id}>
                            <Link to={`/product/${product._id}`}>
                                {product.name} ${product.price}
                            </Link>
                        </div>
                    );
                })}
        </div>
    );
};

export default Home;
