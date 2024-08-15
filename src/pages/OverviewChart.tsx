import { useEffect, useState, lazy, Suspense } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TradingLoader } from "@/assets/loader/SimpleLoader";
import { useTheme } from "@/components/theme-provider";
import { FetchTwelveData, ParseApiTwelveData } from "@/service/TwelveDataAPI";

const LazyChart = lazy(() => import('./LazyChart'));

export const OverviewChart = ({ currentStock }: { currentStock: string }) => {
  const [chartData, setChartData] = useState<{ timestamp: Date; close: number }[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [lastPrice, setLastPrice] = useState<number | null>(null);
  const { theme } = useTheme();

  const loadingText = `Loading ${currentStock} data`;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await FetchTwelveData(currentStock);
        if (data && data.status === 'ok') {
          const parsedData = ParseApiTwelveData(data);
          setChartData(parsedData);
          if (parsedData.length > 0) {
            setLastPrice(parsedData[parsedData.length - 1].close);
          }
        } else {
          throw new Error("Failed to fetch stock data");
        }
      } catch (err) {
          setError((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [currentStock]);

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
          <Suspense fallback={<div>Loading chart...</div>}>
            <LazyChart chartData={chartData} theme={theme} />
          </Suspense>
        )}
        {lastPrice !== null && (
          <div className="mt-4 flex justify-end">
            <Badge variant="outline" className="text-lg">
              <div className="items-center">
                Last Price: ${lastPrice.toFixed(2)}
              </div>
            </Badge>
          </div>
        )}
      </CardContent>
    </Card>
  );
};