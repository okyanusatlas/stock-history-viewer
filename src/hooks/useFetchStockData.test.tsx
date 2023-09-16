import React from 'react';
import { render, act } from '@testing-library/react';
import useFetchStockData from './useFetchStockData';
import { StockProvider } from '../context/StockContext';
import { fetchStockData } from '../utils/api';

// Mocking the API call
jest.mock('../utils/api', () => ({
    fetchStockData: jest.fn()
}));

const TestComponent: React.FC = () => {
    const { fetchData, ticker, error } = useFetchStockData();
    return (
        <div>
            <button onClick={() => fetchData("AAPL")}>Fetch</button>
            {ticker && <span>{ticker}</span>}
            {error && <span>{error}</span>}
        </div>
    );
}

test('fetches data and sets ticker', async () => {
    (fetchStockData as jest.MockedFunction<typeof fetchStockData>).mockResolvedValueOnce([{
        date: "2022-09-16",
        open: 251.85,
        high: 255.82,
        low: 251.75,
        close: 254.91,
        adjusted_close: 249.3559,
        volume: 4304100
    }]);

    const { getByText, findByText } = render(<StockProvider><TestComponent /></StockProvider>);

    act(() => {
        getByText('Fetch').click();
    });

    const tickerValue = await findByText("AAPL");
    expect(tickerValue).toBeInTheDocument();
});

test('handles fetch errors', async () => {
    (fetchStockData as jest.MockedFunction<typeof fetchStockData>).mockRejectedValueOnce(new Error("API Error"));

    const { getByText, findByText } = render(<StockProvider><TestComponent /></StockProvider>);

    act(() => {
        getByText('Fetch').click();
    });

    const errorMessage = await findByText("Something went wrong fetching the stock data.");
    expect(errorMessage).toBeInTheDocument();
});
