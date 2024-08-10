import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Piring from './Piring'
import usePlateCalculator from './hooks/price'

function App() {
  const [quantities, setQuantities] = useState(Array(PlatePrice.length).fill(0));
  const { total, calculateTotal } = usePlateCalculator(PlatePrice);

  const handleQuantityChange = (index, quantity) => {
    const newQuantities = [...quantities];
    newQuantities[index] = quantity;
    setQuantities(newQuantities);
    calculateTotal(newQuantities);
  };
  

  return (
    <>
      <div className='flex justify-center'>

        <div className='flex flex-col gap-y-4'>
          <h2 className='text-3xl font-extrabold'>Kalkulator Raja Sushi</h2>
          {
            PlatePrice.map((plate, index) => {
              return (
                <PlateWithInput
                  key={index}
                  color={plate.color}
                  price={plate.price}
                  index={index}
                  onQuantityChange={handleQuantityChange}
                />
              )
            })
          }
          <p className='text-2xl font-bold'>
            RM {Number(total/100).toFixed(2)}
          </p>
        </div>
      </div>
    </>
  )
}

const PlatePrice = [
  { color: "#4a95de", price: 232 },
  { color: "#ecb073", price: 348 },
  { color: "#f79585", price: 464 },
  { color: "#fc1a15", price: 580 },
  { color: "#a284c0", price: 696 },
]

const PlateWithInput = ({ color, price, index, onQuantityChange }) => {
  const handleChange = (e) => {
    const quantity = parseInt(e.target.value, 10);
    onQuantityChange(index, isNaN(quantity) ? 0 : quantity);
  };

  return (
    <div className='flex gap-x-4 items-center'>
      <Piring color={color} price={price}/>
      <div>
        <input
          id="number-input"
          type="number"
          className="mt-1 block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="Bil. Pinggan"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default App
