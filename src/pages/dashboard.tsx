import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { OverviewChart } from './OverviewChart';
import { OptionStocksCrypto } from '@/mock/OptionStocksCrypto';
import { Input } from "@/components/ui/input";
import StockNews from './StocsNews';
import toast, { Toaster } from 'react-hot-toast';
import { StockProfiles } from './StockProfiles';

export default function Dashboard() {
  const [currentStock, setCurrentStock] = useState("AAPL");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredOptions = OptionStocksCrypto.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleStockChange = (value: string) => {
    setCurrentStock(value);
    setSearchTerm(""); 
  };

  const handleSearch = () => {
    if (filteredOptions.length === 0) {
      toast.error('No stocks found');
    }
  };

  return (
    <div className="flex-col md:flex">
      <Toaster />
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Overview</h2>
          <div className="flex items-center space-x-2">
            <div className="relative w-[180px] mr-5">
              <Input
                placeholder="Search Stock"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <div className="absolute bg-white dark:bg-gray-800 dark:text-white border dark:border-gray-700 mt-2 rounded-md w-full max-h-60 overflow-y-auto z-10">
                  {filteredOptions.map((option) => (
                    <div
                      key={option.value}
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={() => handleStockChange(option.value)}
                    >
                      {option.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <button
              onClick={handleSearch}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Search
            </button>
          </div>
        </div>
        <StockNews />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <OverviewChart currentStock={currentStock} />
          <StockProfiles currentStock={currentStock} />
        </div>
      </div>
    </div>
  );
}
