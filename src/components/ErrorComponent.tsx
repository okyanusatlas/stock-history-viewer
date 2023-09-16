import React from 'react';

interface Props {
    message: string;
}

const ErrorComponent: React.FC<Props> = ({ message }) => {
    return (
        <div className="error">
            <p>{message}</p>
        </div>
    );
}

export default ErrorComponent;
