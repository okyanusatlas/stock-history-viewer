import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

test('renders the correct ticker in header', () => {
    const { getByText } = render(<Header ticker="AAPL" />);
    const linkElement = getByText(/Showing historical stock prices for AAPL/i);
    expect(linkElement).toBeInTheDocument();
});

test('does not render if ticker is null', () => {
    const { queryByText } = render(<Header ticker={null} />);
    expect(queryByText(/Showing historical stock prices for/i)).toBeNull();
});
