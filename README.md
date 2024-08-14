StockMarket Pro
StockMarket Pro is a web application designed to provide real-time stock data, advanced analytics, and portfolio management tools. This README provides instructions on how to set up and run the application locally.

Prerequisites
Before running the application, ensure that you have the following installed:

Node.js (v14 or higher) - Download Node.js
npm (Node Package Manager) - Comes with Node.js
Setup
Clone the Repository

First, clone the repository to your local machine using the following command:

git clone https://github.com/LearningNoob00000/ReactJS-StockPrice.git
Navigate to the Project Directory

Change into the project directory:


cd stockmarket-pro
Install Dependencies

Install the necessary dependencies using npm:


npm install
Environment Variables

Ensure that you have the necessary environment variables set. Create a .env file in the root directory of the project and add your API keys and other configurations. Example:

env
REACT_APP_TWELVE_DATA_API_KEY=d29e1de2a5364243857ca2a3dcd4dcab
Start the Development Server

To start the application in development mode, use the following command:

npm start
This will start the development server and open the application in your default web browser at http://localhost:3000.

Application Structure
Landing Page
Components:

TextEffect: Applies text animations.
AnimatedBackground: Adds animated backgrounds.
SpinnerLoader: Displays a loading spinner.
Functionality:

Displays a welcome message and a "Get Started" button.
Navigates to the /dashboard route upon clicking the button.
Dashboard
Components:

OverviewChart: Shows a line chart of the selected stock's performance.
StockProfiles: Displays stock profile information.
StockNews: Shows the latest stock news.
Functionality:

Allows users to search and select stocks.
Displays an overview chart of the selected stock.
Shows stock profile data and recent news.
OverviewChart
Components:
Utilizes LineChart from recharts to visualize stock price data.
Handles API data fetching and parsing for chart updates.
StockProfiles
Components:
Displays detailed information about the selected stock.
Uses mock data for demonstration.
Troubleshooting
Issue with Dependencies:
If you encounter issues with dependencies, try deleting node_modules and running npm install again.

Environment Variables:
Ensure all required environment variables are properly configured in the .env file.
