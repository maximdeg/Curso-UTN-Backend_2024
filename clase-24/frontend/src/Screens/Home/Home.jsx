import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GET } from '../../fetching/http.fetching.js';
// import { useGlobalContext } from '../../context/GlobalContext.jsx';
import useProducts from '../../Hooks/useProducts.jsx';

const Home = () => {
    const user_info = JSON.parse(sessionStorage.getItem('user_info'));
    const { products, isLoadingProducts } = useProducts();

    return (
        <div>
            <h1>
                <strong>Welcome to home {user_info.name}</strong>
            </h1>
            <Link to="/product/new">Creat producto</Link>
            {isLoadingProducts ? <h1>Loading...</h1> : <ProductList products={products} />}
        </div>
    );
};

const ProductList = ({ products }) => {
    return products.map((product) => {
        return <Product key={product.id} {...product} />;
    });
};

const Product = ({ id, name, price, image }) => {
    console.log(name, id, price, image);
    return (
        <div key={id}>
            <Link to={`/product/${id}`}>
                {name} ${price}
            </Link>
            <img src={image} style={{ width: '50px' }} />
        </div>
    );
};

export default Home;
