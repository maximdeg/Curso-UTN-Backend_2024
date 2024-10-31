import React, { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
    const [payload, setPayload] = useState({});

    return <GlobalContext.Provider value={{ setPayload, payload }}>{children}</GlobalContext.Provider>;
};

const useGlobalContext = () => {
    return useContext(GlobalContext);
};

export { useGlobalContext, GlobalContextProvider };
