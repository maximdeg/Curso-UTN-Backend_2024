import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { GlobalContextProvider } from './context/GlobalContext.jsx';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <GlobalContextProvider>
            <App />
        </GlobalContextProvider>
    </BrowserRouter>
);
