import React from 'react';
import Header from './components/Header';
import StockInput from './components/StockInput';
import StockChart from './components/StockChart';
import ErrorComponent from './components/ErrorComponent';
import useFetchStockData from './hooks/useFetchStockData';
import {StockProvider, useStock} from './context/StockContext';
import './App.scss';

const AppContent: React.FC = () => {
    const { fetchData, ticker, error } = useFetchStockData();
    const { data } = useStock();

    return (
        <div className="App">
            <StockInput onFetch={fetchData} />
            <Header ticker={ticker} />
            {error ? <ErrorComponent message={error} /> : data && data.length > 0 ? <StockChart data={data} /> : null}
        </div>
    );
}

const App: React.FC = () => {
    return (
        <StockProvider>
            <AppContent />
        </StockProvider>
    );
}

export default App;
