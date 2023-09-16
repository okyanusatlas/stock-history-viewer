import React, { createContext, useContext, useState, ReactNode } from 'react';

interface StockContextProps {
    data: any[];
    setData: React.Dispatch<React.SetStateAction<any[]>>;
}

const StockContext = createContext<StockContextProps | undefined>(undefined);

export const StockProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [data, setData] = useState<any[]>([]);

    return (
        <StockContext.Provider value={{ data, setData }}>
            {children}
        </StockContext.Provider>
    );
}

export const useStock = () => {
    const context = useContext(StockContext);
    if (!context) {
        throw new Error("useStock must be used within a StockProvider");
    }
    return context;
}
