import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

interface ChartData {
  timestamp: number | string | Date;
  close: number;
}

interface LazyChartProps {
  chartData: ChartData[];
  theme: string;
}

const LazyChart: React.FC<LazyChartProps> = ({ chartData, theme }) => {
  const tooltipStyles = {
    fontSize: '12px',
    padding: '5px',
    backgroundColor: theme === 'dark' ? '#333333' : '#ffffff',
    color: theme === 'dark' ? '#ffffff' : '#000000',
  };

  return (
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
          tickFormatter={(value) => `$${(value as number).toFixed(2)}`}
        />
        <Tooltip
          labelFormatter={(label) => `Timestamp: ${new Date(label).toLocaleString()}`}
          formatter={(value: number) => [`$${value.toFixed(2)}`, "Close"]}
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
  );
};

export default LazyChart;
