import React, { useState } from 'react';

interface Props {
    onFetch: (ticker: string) => void;
}

const StockInput: React.FC<Props> = ({ onFetch }) => {
    const [ticker, setTicker] = useState("");

    return (
        <div>
            <input
                type="text"
                placeholder="Enter stock ticker..."
                value={ticker}
                onChange={e => setTicker(e.target.value)}
            />
            <button onClick={() => onFetch(ticker)}>
                Get Data
            </button>
        </div>
    );
}

export default StockInput;
