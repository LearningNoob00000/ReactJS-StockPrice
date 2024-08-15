import { mockStockNews } from "@/mock/mockStockNews";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatCardProps } from "@/types/interface";
import { NewsItem } from "@/types/interface";

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, subValue, animate }) => (
  <Card className={`transition-opacity duration-500 ${animate ? 'opacity-0' : 'opacity-100'}`}>
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

export default function StockNews() {
  const [randomNews, setRandomNews] = useState<NewsItem[]>([]);
  const [animate, setAnimate] = useState(false);

  const updateNews = () => {
    setAnimate(true);
    setTimeout(() => {
      const shuffledNews = mockStockNews.sort(() => 0.5 - Math.random());
      setRandomNews(shuffledNews.slice(0, 4));
      setAnimate(false);
    }, 500); 
  };

  useEffect(() => {
    updateNews();
    const interval = setInterval(updateNews, 1 * 30 * 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {randomNews.map((news, index) => (
        <StatCard
          key={index}
          title={news.title}
          value={news.value}
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-4 w-4 text-muted-foreground">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          }
          subValue={news.subValue}
          animate={animate}
        />
      ))}
    </div>
  );
}
