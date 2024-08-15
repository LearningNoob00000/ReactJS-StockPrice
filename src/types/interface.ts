

export interface StockMeta {
  symbol: string;
  name: string;
  currency: string;
  exchange: string;
  mic_code: string;
  exchange_timezone: string;
}

export interface EarningsData {
  date: string;
  time: string;
  eps_estimate: number | null;
  eps_actual: number | null;
  difference: number | null;
  surprise_prc: number | null;
}

export interface StockData {
  meta: StockMeta;
  earnings: EarningsData[];
  status: string;
}

export interface StockProfileData {
symbol: string;
  name: string;
  exchange: string;
  sector: string;
  industry: string;
  employees: number;
  website: string;
  description: string;
  CEO: string;
  address: string;
  address2?: string;
  city: string;
  zip: string;
  state: string;
  country: string;
  phone: string;
}
export interface StatCardProps {
  title: string;
  value: string;
  icon: JSX.Element;
  subValue: string;
  animate: boolean;
}
export interface NewsItem {
  title: string;
  value: string;
  subValue: string;
}