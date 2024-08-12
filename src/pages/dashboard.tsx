import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

// Mock data representing stock market performance
const data = [
  { month: 'Jan', value: 13000 },
  { month: 'Feb', value: 13500 },
  { month: 'Mar', value: 13200 },
  { month: 'Apr', value: 14000 },
  { month: 'May', value: 13800 },
  { month: 'Jun', value: 14200 },
  { month: 'Jul', value: 14500 },
  { month: 'Aug', value: 15000 },
  { month: 'Sep', value: 14800 },
  { month: 'Oct', value: 15500 },
  { month: 'Nov', value: 15800 },
  { month: 'Dec', value: 16000 },
];

// Mock data representing recent trades
const recentTrades = [
  { name: 'Tesla Inc.', email: 'trade@tesla.com', amount: '+$2,500.00' },
  { name: 'Apple Inc.', email: 'trade@apple.com', amount: '-$1,200.00' },
  { name: 'Amazon.com Inc.', email: 'trade@amazon.com', amount: '+$3,800.00' },
  { name: 'Microsoft Corp.', email: 'trade@microsoft.com', amount: '+$1,500.00' },
  { name: 'Alphabet Inc.', email: 'trade@alphabet.com', amount: '-$900.00' },
];

const StatCard = ({ title, value, icon, subValue }) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      {icon}
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      <p className="text-xs text-muted-foreground">{subValue}</p>
    </CardContent>
  </Card>
);

const OverviewChart = () => (
  <Card className="col-span-4">
    <CardHeader>
      <CardTitle>Market Overview</CardTitle>
    </CardHeader>
    <CardContent className="pl-2">
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <XAxis dataKey="month" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
          <Bar dataKey="value" fill="currentColor" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

const RecentTrades = () => (
  <Card className="col-span-3">
    <CardHeader>
      <CardTitle>Recent Trades</CardTitle>
      <CardContent>5 recent trades executed.</CardContent>
    </CardHeader>
    <CardContent>
      <div className="space-y-8">
        {recentTrades.map((trade, index) => (
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

export default function Dashboard() {
  return (
    <div className="flex-col md:flex">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Stock Market Dashboard</h2>
          <div className="flex items-center space-x-2">
            <button className="bg-primary text-primary-foreground shadow hover:bg-primary/90 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2">
              Download Report
            </button>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard title="Total Market Value" value="$150,000.00" icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-4 w-4 text-muted-foreground"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>} subValue="+2.5% from last month" />
          <StatCard title="New Investments" value="+$50,000.00" icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-4 w-4 text-muted-foreground"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>} subValue="+10% from last month" />
          <StatCard title="Trades Executed" value="+15" icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-4 w-4 text-muted-foreground"><rect width="20" height="14" x="2" y="5" rx="2" /><path d="M2 10h20" /></svg>} subValue="+5% from last month" />
          <StatCard title="Market Movers" value="AAPL, TSLA, AMZN" icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-4 w-4 text-muted-foreground"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>} subValue="Top gainers this week" />
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <OverviewChart />
          <RecentTrades />
        </div>
      </div>
    </div>
  );
}
