import { XrangePointOptionsObject } from "highcharts";
export interface TotalTradesApiResponse {
  totalTrades: number;
}
export interface TotalClientsApiResponse {
  totalClients: number;
}
export interface TopTradesObject {
  tradeId: string;
  value: number;
}
export interface TopTradesApiResponse {
  topTrades: TopTradesObject[];
}
export interface CurrencyResponse {
  symbol: string;
  name: string;
  decimal_digits: number;
  rounding: number;
  code: string;
}
export interface RejectedTradesApiResponse {
  tradeId: string;
  cptyName: string;
  ticketStatus: string;
  isin: string;
  error: string;
}

export interface CashByMonthApiResponse {
  name: "Repo" | "Reverse Repo" | "Sell Buy" | "Buy Sell";
  data: XrangePointOptionsObject[];
  color?: string;
  type?: any;
}
