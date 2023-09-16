import React from 'react';
import { render } from '@testing-library/react';
import ErrorComponent from './ErrorComponent';

test('renders the correct error message', () => {
    const { getByText } = render(<ErrorComponent message="Something went wrong." />);
    const errorMessage = getByText(/Something went wrong./i);
    expect(errorMessage).toBeInTheDocument();
});
