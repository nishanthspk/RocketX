import { useState, useEffect } from 'react';
import axios from 'axios';

const useSwapData = (fromToken = 'ETHEREUM.ethereum', toToken = 'METIS.metis-token', amount = 1) => {
  const [swapData, setSwapData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchSwapData = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.get(
        `https://w3dv-widget.rocketx.exchange/swap/ETHEREUM.ethereum/METIS.metis-token/1?from=Ethereum&to=Metis%20Token&mode=w`,
        {
          params: {
            from: 'Ethereum',
            to: 'Metis Token',
            mode: 'w'
          },
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }
      );

      setSwapData(response.data);
    } catch (err) {
      setError(err.message || 'Failed to fetch swap data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSwapData();
  }, [fromToken, toToken, amount]);

  return { swapData, loading, error, refetch: fetchSwapData };
};

// Example component using the hook
const SwapComponent = () => {
  const { swapData, loading, error, refetch } = useSwapData();
  
  if (loading) {
    return <div className="text-center p-4">Loading swap data...</div>;
  }

  if (error) {
    return (
      <div className="text-red-500 p-4">
        <p>Error: {error}</p>
        <button 
          onClick={refetch}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Swap Details</h2>
      {swapData && (
        <pre className="bg-gray-100 p-4 rounded">
          {JSON.stringify(swapData, null, 2)}
        </pre>
      )}
      <button 
        onClick={refetch}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Refresh Rates
      </button>
    </div>
  );
};

export default SwapComponent;