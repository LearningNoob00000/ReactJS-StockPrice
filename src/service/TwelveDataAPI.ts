import { STOCK_API_KEY } from "@/lib/utils";
import twelvedata from "twelvedata";

const config = {
  key: STOCK_API_KEY,
};

const client = twelvedata(config);

// Function to fetch stock data using TwelveData API
export const FetchTwelveData = async (symbol) => {
  const params = {
    symbol: symbol,
    interval: "1day",
    outputsize: 20,
  };

  try {
    const data = await client.timeSeries(params);
    return data;
  } catch (error) {
    console.error("Error fetching data from TwelveData API:", error);
    return null;
  }
};

// Parsing function for the API response to format data for the chart
export const ParseApiTwelveData = (apiResponse) => {
  const { values } = apiResponse;
  return values.map((item) => ({
    timestamp: new Date(item.datetime),
    close: parseFloat(item.close),
  }));
};


export const StockEarning =  async (symbol)  => {
  const params = {
    symbol: symbol,
  };

  try {
    const data = await client.earnings(params);
    return data;
  } catch (error) {
    console.error("Error fetching EODPrice from TwelveData API:", error);
    return null;
  }
};
export const StockProfile =  async (symbol)  => {
  const params = {
    symbol: symbol,
  };

  try {
    const data = await client.profile(params);
    return data;
  } catch (error) {
    console.error("Error fetching EODPrice from TwelveData API:", error);
    return null;
  }
};
