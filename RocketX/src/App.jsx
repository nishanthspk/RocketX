import React, { useState } from 'react';
import { Settings, ChevronDown, ArrowDownUp, Info } from 'lucide-react';

const CryptoSwap = () => {
  const [fromAmount, setFromAmount] = useState('1');
  const [toAmount, setToAmount] = useState('57.0511');
  const [slippage, setSlippage] = useState('1.00');
  
  const handleSwap = () => {
    const temp = fromAmount;
    setFromAmount(toAmount);
    setToAmount(temp);
  };

  return (
    <div className="bg-black text-white p-6 max-w-md mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">SWAP</h1>
        <Settings className="w-6 h-6" />
      </div>

      <div className="space-y-2">
        <div className="bg-gray-800 p-4 rounded-lg">
          <div className="flex justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-900 rounded-full"></div>
              <input
                type="text"
                value={fromAmount}
                onChange={(e) => setFromAmount(e.target.value)}
                className="bg-transparent text-2xl w-24 focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-2">
              <span>ETH</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
          <div className="text-gray-400">~$3567.09</div>
        </div>

        <div className="flex justify-center">
          <button 
            onClick={handleSwap}
            className="bg-orange-500 p-2 rounded-full hover:bg-orange-600"
          >
            <ArrowDownUp className="w-4 h-4" />
          </button>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg">
          <div className="flex justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-cyan-500 rounded-full"></div>
              <input
                type="text"
                value={toAmount}
                onChange={(e) => setToAmount(e.target.value)}
                className="bg-transparent text-2xl w-24 focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-2">
              <span>METIS</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
          <div className="text-gray-400">~$3509.06</div>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-400">SLIPPAGE TOLERANCE:</span>
          <span>{slippage} %</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-400">PRICE IMPACT <Info className="inline w-4 h-4" /></span>
          <span className="text-red-500">-1.6%</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-400">1 METIS BUY PRICE</span>
          <span>~$62.52</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-400">1 ETH SELL PRICE</span>
          <span>~$3,509.06</span>
        </div>

        <button className="w-full bg-red-900 text-orange-500 py-3 rounded-lg font-medium">
          INSUFFICIENT BALANCE
        </button>
      </div>
    </div>
  );
};

export default CryptoSwap;