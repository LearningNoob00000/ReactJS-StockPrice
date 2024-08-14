import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
import GraphLoader from "@/assets/loader/GraphLoader";
import { StockProfileData } from "@/types/interface";
import { StockProfileMockData } from "@/mock/StockProfileMockData";

export const StockProfiles = ({ currentStock }: { currentStock: string }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [stocksData, setStocksData] = useState<StockProfileData[]>([]);

  useEffect(() => {
    const fetchStockData = async () => {
      setIsLoading(true);
      try {
        // Filter the mock data based on the current stock symbol
        const filteredData = StockProfileMockData.filter(stock => stock.symbol === currentStock);
        setStocksData(filteredData);
      } catch (error) {
        console.error("Error fetching stock profile data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStockData();
  }, [currentStock]);

  if (isLoading) {
    return <GraphLoader />;
  }

  return (
    <Card className="col-span-3 bg-card shadow-md rounded-lg">
      <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-600 text-primary-foreground rounded-t-lg">
        <CardTitle className="text-xl font-bold">Stock Profile</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-6">
          {stocksData.map((stock, index) => (
            <Card key={index} className="p-6 border border-border rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center mb-6">
                <Avatar className="h-16 w-16 mr-6">
                  <AvatarFallback className="bg-muted text-xl font-semibold">
                    {stock.name ? stock.name.split(' ').map(n => n[0]).join('') : stock.symbol}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-2xl font-semibold text-card-foreground">{stock.name || 'N/A'}</h3>
                  <p className="text-md text-muted-foreground">{stock.symbol} - {stock.exchange || 'N/A'}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-muted-foreground"><strong>Sector:</strong> {stock.sector || 'N/A'}</p>
                  <p className="text-sm text-muted-foreground"><strong>Industry:</strong> {stock.industry || 'N/A'}</p>
                  <p className="text-sm text-muted-foreground"><strong>Employees:</strong> {stock.employees ? stock.employees.toLocaleString() : 'N/A'}</p>
                  <p className="text-sm text-muted-foreground"><strong>CEO:</strong> {stock.CEO || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground"><strong>Website:</strong> {stock.website ? <a href={stock.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{stock.website}</a> : 'N/A'}</p>
                  <p className="text-sm text-muted-foreground"><strong>Phone:</strong> {stock.phone || 'N/A'}</p>
                  <p className="text-sm text-muted-foreground"><strong>Address:</strong> {stock.address ? `${stock.address}, ${stock.city || ''}, ${stock.state || ''} ${stock.zip || ''}, ${stock.country || ''}` : 'N/A'}</p>
                </div>
              </div>
              <div className="mt-6">
                <h4 className="font-semibold text-lg text-card-foreground">Description:</h4>
                <p className="text-sm text-muted-foreground">{stock.description ? (stock.description.length > 200 ? `${stock.description.substring(0, 200)}...` : stock.description) : 'N/A'}</p>
              </div>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
