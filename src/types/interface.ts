

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
  mic_code: string;
  sector: string;
  industry: string;
  employees: number;
  website: string;
  description: string;
  type: string;
  CEO: string;
  address: string;
  address2?: string;
  city: string;
  zip: string;
  state: string;
  country: string;
  phone: string;
}
