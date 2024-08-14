import React from 'react';
import { Link } from 'react-router-dom';
import { ModeToggle } from '@/components/mode-toggle';

const PageHeader = () => {

  return (
    <header className="p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold hover:underline">
        StockMarket Pro
      </Link>
      <ModeToggle />
    </header>
  );
};

export default PageHeader;
