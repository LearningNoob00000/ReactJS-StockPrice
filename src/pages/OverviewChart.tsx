import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge"; // Import the Badge component
import { OptionStocksCrypto } from "@/mock/OptionStocksCrypto";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, ReferenceLine } from 'recharts';
import { FetchTwelveData, ParseApiTwelveData } from "@/service/TwelveDataAPI";
import GraphLoader from "@/assets/loader/GraphLoader";
export const OverviewChart = () => {
  const [chartData, setChartData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [lastPrice, setLastPrice] = useState(null);
 const [selectedStock, setSelectedStock] = useState("AAPL");
  const [search, setSearch] = useState('');
  const handleStockChange = (value) => {
    setSelectedStock(value);
  };
  
  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true);
  //     const data = await FetchTwelveData(selectedStock);
  //     if (data && data.status === 'ok') {
  //       const parsedData = ParseApiTwelveData(data);
  //       setChartData(parsedData);
  //       if (parsedData.length > 0) {
  //         setLastPrice(parsedData[parsedData.length - 1].close);
  //       }
  //     } else {
  //       setError("Failed to fetch stock data");
  //     }
  //     setIsLoading(false);
  //   };

  //   fetchData();
  // }, [selectedStock]);

  return (
   <Card className="col-span-4">
  <div className="flex justify-between items-center">
    <CardHeader>
      <CardTitle>{selectedStock} Price Overview</CardTitle>
    </CardHeader>
    <div className="w-[180px] mr-5">
      <Select onValueChange={handleStockChange} search>
        <SelectTrigger>
          <SelectValue placeholder={selectedStock} />
          
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
  </div>
  <CardContent className="pl-2 flex justify-center items-center min-h-[350px]">
    {isLoading ? (
      <GraphLoader />
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
              Last Price: ${lastPrice.toFixed(2)}
            </Badge>
          </div>
        )}
      </>
    )}
  </CardContent>
</Card>

  )
};