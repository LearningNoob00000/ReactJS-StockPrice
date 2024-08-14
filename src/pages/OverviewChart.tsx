import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { FetchTwelveData, ParseApiTwelveData } from "@/service/TwelveDataAPI";
import { TradingLoader } from "@/assets/loader/SimpleLoader";
import { useTheme } from "@/components/theme-provider";

export const OverviewChart = ({ currentStock }: { currentStock: string }) => {
  const [chartData, setChartData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [lastPrice, setLastPrice] = useState(null);
  const { theme } = useTheme(); // Getting the current theme from ThemeProvider

  const loadingText = `Loading ${currentStock} data`;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await FetchTwelveData(currentStock);
      if (data && data.status === 'ok') {
        const parsedData = ParseApiTwelveData(data);
        setChartData(parsedData);
        if (parsedData.length > 0) {
          setLastPrice(parsedData[parsedData.length - 1].close);
        }
      } else {
        setError("Failed to fetch stock data");
      }
      setIsLoading(false);
    };

    fetchData();
  }, [currentStock]);

  const tooltipStyles = {
    fontSize: '12px',
    padding: '5px',
    backgroundColor: theme === 'dark' ? '#333333' : '#ffffff',
    color: theme === 'dark' ? '#ffffff' : '#000000',
  };

  return (
    <Card className="col-span-4 relative">
      <div className="flex justify-between items-center">
        <CardHeader>
          <CardTitle>{currentStock} 1 HR Price Overview</CardTitle>
        </CardHeader>
      </div>
      <CardContent className="pl-2 min-h-[350px]">
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <TradingLoader loaderText={loadingText} />
          </div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          <>
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={chartData}>
                <XAxis
                  dataKey="timestamp"
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => new Date(value).toLocaleTimeString()}
                />
                <YAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `$${value.toFixed(2)}`}
                />
                <Tooltip
                  labelFormatter={(label) => `Timestamp: ${new Date(label).toLocaleString()}`}
                  formatter={(value) => [`$${value.toFixed(2)}`, "Close"]}
                  contentStyle={tooltipStyles}
                />
                <Line
                  type="monotone"
                  dataKey="close"
                  stroke="#8884d8"
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
                {lastPrice && (
        <div className="mt-4 flex justify-end">
          <Badge variant="outline" className="text-lg">
            <div className="items-center">
              Last Price: ${lastPrice.toFixed(2)}
            </div>
          </Badge>
        </div>
      )}

          </>
        )}
      </CardContent>
    </Card>
  );
};