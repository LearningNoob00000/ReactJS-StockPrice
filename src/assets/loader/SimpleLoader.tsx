import React from 'react';

interface TradingLoaderProps {
  fullScreen?: boolean;
  loaderText?: string;
}

export const TradingLoader: React.FC<TradingLoaderProps> = ({ fullScreen = false, loaderText = "Loading..." }) => {
  const containerClasses = fullScreen
    ? "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    : "absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center";

  const loaderClasses = fullScreen
    ? "bg-white dark:bg-gray-800 p-5 rounded-lg shadow-lg text-center"
    : "bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg text-center";

  const spinnerClasses = fullScreen
    ? "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"
    : "animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500 mx-auto mb-2";

  const textClasses = fullScreen
    ? "text-lg font-semibold"
    : "text-sm font-medium";

  return (
    <div className={containerClasses}>
      <div className={loaderClasses}>
        <div className={spinnerClasses}></div>
        <p className={textClasses}>{loaderText}</p>
      </div>
    </div>
  );
};