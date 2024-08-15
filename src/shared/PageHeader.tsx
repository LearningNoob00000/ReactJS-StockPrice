import React from 'react';
import { Link } from 'react-router-dom';
import { ModeToggle } from '@/components/mode-toggle';
import logo from '/logo.png';

const PageHeader = () => {
  return (
    <header className="p-4 flex justify-between items-center">
      <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
        <img src={logo} alt="StockMarket Pro Logo" className="w-10 h-10" />
        <span className="text-2xl font-bold">StockMarket Pro</span>
      </Link>
      <ModeToggle />
    </header>
  );
};

export default PageHeader;