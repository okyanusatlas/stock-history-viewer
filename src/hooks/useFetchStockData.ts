import { useState } from 'react';
import { useStock } from '../context/StockContext';
import { fetchStockData } from '../utils/api';

const useFetchStockData = () => {
    const { setData } = useStock();
    const [ticker, setTicker] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async (tickerValue: string) => {
        if (!tickerValue.trim()) {
            setData([]);
            setTicker(null);
            setError(null);
            return;
        }

        try {
            const stockData = await fetchStockData(tickerValue);
            if (stockData.length === 0) {
                setError(`No data available for ticker ${tickerValue}`);
                setData([]);
                setTicker(null);
            } else {
                setData(stockData);
                setTicker(tickerValue);
                setError(null);
            }
        } catch (error) {
            console.error("Error fetching data", error);
            setError("Something went wrong fetching the stock data.");
        }
    }

    return { fetchData, ticker, error };
}

export default useFetchStockData;
