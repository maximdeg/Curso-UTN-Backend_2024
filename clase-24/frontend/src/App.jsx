import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Screens/Login/Login.jsx';
import Register from './Screens/Register/Register.jsx';
import ForgotPassword from './Screens/ForgotPassword/ForgotPassword.jsx';
import ResetPassword from './Screens/ResetPassword/ResetPassword.jsx';
import CreateProductScreen from './Screens/CreateProductScreen/CreateProductScreen.jsx';
import ProductDetails from './Screens/ProductDetails/ProductDetails.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import Home from './Screens/Home/Home.jsx';

import './global.css';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password/:reset_token" element={<ResetPassword />} />
                <Route element={<ProtectedRoute />}>
                    <Route path="/home" element={<Home />} />
                    <Route path="/product/new" element={<CreateProductScreen />} />
                    <Route path="/product/:product_id" element={<ProductDetails />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
