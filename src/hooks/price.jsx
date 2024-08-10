import { useState } from 'react';

const usePlateCalculator = (platePriceList) => {
  const [total, setTotal] = useState(0);

  const calculateTotal = (plateQuantities) => {
    const newTotal = platePriceList.reduce((acc, plate, index) => {
      return acc + plate.price * (plateQuantities[index] || 0);
    }, 0);
    setTotal(newTotal);
  };

  return { total, calculateTotal };
};

export default usePlateCalculator;
