export const FetchStockData = async (symbol, interval) => {
  const API_KEY = 'NPILB2OVVQRZL08B';
  const API_KEY2 = 'R26YJ7L288G3JA40';
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=${interval}&apikey=${API_KEY2}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching stock data:', error);
    return null;
  }
};

// Parse the API response
export const ParseApiData = (apiResponse) => {
  const timeSeries = apiResponse[`Time Series (5min)`];
  return Object.entries(timeSeries).map(([timestamp, values]) => ({
    timestamp: new Date(timestamp),
    open: parseFloat(values['1. open']),
    high: parseFloat(values['2. high']),
    low: parseFloat(values['3. low']),
    close: parseFloat(values['4. close']),
    volume: parseInt(values['5. volume'])
  })).reverse();
};
