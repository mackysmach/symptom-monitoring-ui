'use client'

import { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const [lineProfile, setlineProfile] = useState({});
    const [trigger, setTrigger] = useState(0);


    return (
        <MyContext.Provider value={{ lineProfile, setlineProfile, trigger, setTrigger }}>
            {children}
        </MyContext.Provider>
    );
};

export const useMyContext = () => {
    return useContext(MyContext);
};
