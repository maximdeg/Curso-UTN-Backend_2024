import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Screens/Login/Login.jsx';
import Register from './Screens/Register/Register.jsx';
import ForgotPassword from './Screens/ForgotPassword/ForgotPassword.jsx';
import ResetPassword from './Screens/ResetPassword/ResetPassword.jsx';

import './global.css';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route
                    path="/reset-password/:reset_token"
                    element={<ResetPassword />}
                />
            </Routes>
        </>
    );
}

export default App;
