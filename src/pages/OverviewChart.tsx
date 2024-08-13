import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { OptionStocksCrypto } from "@/mock/OptionStocksCrypto";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';


export const OverviewChart = ({ symbol }) => {
  const [chartData, setChartData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

useEffect(() => {
  const fetchData = async () => {
    setIsLoading(true);
    const data = await fetchStockData(symbol, '5min');
    console.log(data)
    if (data) {
      const parsedData = parseApiData(data);
      setChartData(parsedData);
    } else {
      setError("Failed to fetch stock data");
    }
    setIsLoading(false);
  };

  fetchData();
}, [symbol]);

  return (
    <Card className="col-span-4">
      <div className="flex justify-between items-center">
        <CardHeader>
          <CardTitle>{symbol} Stock Overview (5min Intervals)</CardTitle>
        </CardHeader>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="IBM" />
          </SelectTrigger>
          <SelectContent>
            {OptionStocksCrypto.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <CardContent className="pl-2">
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
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
                labelFormatter={(label) => new Date(label).toLocaleString()}
                formatter={(value) => [`$${value.toFixed(2)}`, "Close"]}
              />
              <Line
                type="monotone"
                dataKey="close"
                stroke="#8884d8"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  );
};