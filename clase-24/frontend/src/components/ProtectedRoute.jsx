import React from 'react';
import { useAuthContext } from '../context/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    const { isAuthenticatedUser } = useAuthContext();
    return <div>{isAuthenticatedUser ? <Outlet /> : <Navigate to={'/login'} />}</div>;
};

export default ProtectedRoute;
