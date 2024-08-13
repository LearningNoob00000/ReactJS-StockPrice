import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const TopStocks = () => {
  const TopStocks = [
    { name: 'Tesla Inc.', email: 'trade@tesla.com', amount: '+$2,500.00' },
    { name: 'Apple Inc.', email: 'trade@apple.com', amount: '-$1,200.00' },
    { name: 'Amazon.com Inc.', email: 'trade@amazon.com', amount: '+$3,800.00' },
    { name: 'Microsoft Corp.', email: 'trade@microsoft.com', amount: '+$1,500.00' },
    { name: 'Alphabet Inc.', email: 'trade@alphabet.com', amount: '-$900.00' },
  ];

  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Recent Trades</CardTitle>
        <CardContent>5 recent trades executed.</CardContent>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {TopStocks.map((trade, index) => (
            <div key={index} className="flex items-center">
              <Avatar className="h-9 w-9">
                <AvatarFallback>{trade.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">{trade.name}</p>
                <p className="text-sm text-muted-foreground">{trade.email}</p>
              </div>
              <div className="ml-auto font-medium">{trade.amount}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
