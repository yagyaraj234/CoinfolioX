# MERN Stack Crypto Tracker

Welcome to the MERN Stack Crypto Tracker! This web application allows users to track live cryptocurrency prices, view price charts, manage their portfolio to track profit and loss, and create a wishlist of favorite cryptocurrencies. The application is built using the MERN (MongoDB, Express, React, Node.js) stack.

## Live Project

The live version of the project can be accessed [here](https://coinfolio-n.vercel.app/).

## Features

- **Live Price Tracking:** Users can check the live prices of various cryptocurrencies.
- **Price Chart:** Users can view price charts for selected cryptocurrencies.
- **Portfolio Management:** Users can add cryptocurrencies to their portfolio to track profit and loss.
- **Wishlist:** Users can create a wishlist of their favorite cryptocurrencies.

## Technologies Used

The MERN Stack Crypto Tracker utilizes the following technologies:

- **MongoDB:** A NoSQL database used to store user data, such as portfolios and wishlists.
- **Express:** A back-end web application framework for Node.js, used to build the server and API endpoints.
- **React:** A JavaScript library for building user interfaces, used to create the front-end of the application.
- **Node.js:** A JavaScript runtime environment used for server-side development.
- **CoinGecko API:** An API that provides cryptocurrency market data, used to fetch live prices and historical data.

## Installation

To run the MERN Stack Crypto Tracker locally, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/your-username/mern-stack-crypto-tracker.git
   ```

2. Change to the project directory:

   ```
   cd mern-stack-crypto-tracker
   ```

3. Install the dependencies:

   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add the following environment variables:

   ```
   MONGODB_URI=your_mongodb_connection_string
   COINGECKO_API_KEY=your_coingecko_api_key
   ```

5. Start the development server:

   ```
   npm run dev
   ```

6. Open your web browser and navigate to `http://localhost:3000` to access the application.

## Folder Structure

The folder structure of the MERN Stack Crypto Tracker is as follows:

- `client`: Contains the front-end React application.
- `server`: Contains the back-end Express server.
- `models`: Defines the database models using Mongoose.
- `routes`: Contains the API routes for the server.
- `controllers`: Implements the logic for API endpoints.
- `config`: Contains configuration files.
- `middlewares`: Defines custom middleware functions.
- `utils`: Contains utility functions.

## Contributing

Contributions to the MERN Stack Crypto Tracker are welcome! If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature/fix: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m "Add feature/fix"`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- The MERN Stack Crypto Tracker utilizes the [CoinGecko API](https://coingecko.com/) for fetching cryptocurrency data.
- Thanks to the open-source community for providing the tools and libraries used in this project.

---

Thank you for using the MERN Stack Crypto Tracker! If you have any questions or need further assistance, please don't hesitate to contact us. Enjoy tracking your favorite cryptocurrencies!
