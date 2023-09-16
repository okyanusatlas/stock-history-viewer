import React from 'react';

const Header: React.FC<{ ticker: string | null }> = ({ ticker }) => {
    if (!ticker) return null;
    return <h2 className="stock-header">Showing historical stock prices for {ticker}</h2>;
}

export default Header;