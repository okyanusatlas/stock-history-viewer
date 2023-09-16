# Stock Price Visualization App

This is a React application that visualizes historical stock prices using the EOD Historical Data API.

## Table of Contents

1. [Features](#features)
2. [Project Structure](#project-structure)
3. [Design Decisions](#design-decisions)
4. [Setup & Installation](#setup--installation)
5. [Tests](#tests)
6. [Future Improvements](#future-improvements)
7. [Contributing](#contributing)
8. [License](#license)

## Features

- **Search for Stock Prices**: Enter a stock ticker symbol (e.g., "AAPL" for Apple Inc.) to retrieve and visualize its historical prices.
- **Interactive Chart**: The data is visualized using a line chart to depict stock price trends.
- **Error Handling**: Any issues with data retrieval or invalid ticker entries are gracefully handled with user feedback.
- **Responsive**: Designed to work on both desktop and mobile.

## Project Structure

- **Components**: All reusable UI components can be found under the `components` directory.
- **Context**: The React Context API is utilized for state management, keeping the application structure straightforward and allowing easy access to the stock data across components.
- **Utilities**: Helper functions and API-related code reside in the `utils` directory.
- **Styles**: Styling is managed using SCSS, located in the root with the `.scss` extension.

## Design Decisions

- **React Context API**: Used for state management to demonstrate its utility, even in a smaller-scale application. It offers a simple way to share state across components without prop drilling.
- **Function Components & Hooks**: The application exclusively uses function components combined with hooks, offering a clear and modern approach to manage component lifecycle and state.
- **Separation of Concerns**: Functionality such as data fetching has been abstracted into custom hooks to ensure components remain lean and maintainable.
- **Error Handling**: To enhance user experience, errors (like failed API calls or invalid stock tickers) trigger UI feedback.

## Setup & Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the required npm packages using `npm install`.
4. Create a `.env` file in the root directory and set the API token as `REACT_APP_API_TOKEN=your_token_here`.
5. Start the application using `npm start`.

## Tests

Unit tests have been written for the major components and custom hooks. To run the tests, execute `npm test` from the project directory.

## Future Improvements

- **Pagination**: Introduce pagination or a date range selector for data to allow users to narrow down the timeframe of stock prices.
- **Additional Stock Info**: Enhance the application by adding more stock-related data, such as company profiles, news, etc.
- **Theme Toggle**: Introduce a dark/light theme toggle for user preference.

## Contributing

While this project is mainly for demonstration purposes, contributions are always welcome! Please open an issue or submit a PR if you have improvements or fixes.

## License

This project is open source and available under the [MIT License](LICENSE.md).
