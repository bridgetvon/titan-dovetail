import { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css';


export default function Cart() {

    const [item, setItem] = useState({
        name: 'TITAN DOVETAIL Timber beam pergola',
        description: 'Post bases CPS6 (included)',
        quantity: 0,
        price: 8000,
      });

      const changeQuantity = () => {
        // Don't allow the quantity less than 0, if the quantity is greater than value entered by user then the user entered quantity is used, else 0
        setItem({ ...item, quantity: Math.max(0, value) });
      };
      
      const onQuantityPlus = () => {
        changeQuantity(item.quantity + 1);
      };
      
      const onQuantityMinus = () => {
        changeQuantity(item.quantity - 1);
      };
      
  return (
    <main>
    <div className='shadow-lg border rounded p-2 '>
      {/* <Image src={item.image} width={300} height={150} alt={item.name} /> */}
      <h2 className='text-2xl'>$ {item.price}</h2>
      <h3 className='text-xl'>{item.name}</h3>
      <p className='text-red-500'>{item.description}</p>
      <p className='text-sm text-red-600 mt-1'>Quantity:</p>
      <div className='border rounded'>
        <button
          className='bg-red-500 py-2 px-4 text-white rounded hover:bg-red-600'
        >
          -
        </button>
        <input
          type='number'
          className='p-2'
          defaultValue={item.quantity}
        />
        <button
          className='bg-red-500 py-2 px-4 text-white rounded hover:bg-blue-600'
        >
          +
        </button>
      </div>
      <p>Total: ${item.quantity * item.price}</p>
      <button
        // disabled={item.quantity === 0}
        className='bg-red-500 hover:bg-red-600 text-white block w-full py-2 rounded mt-2'
      >
        Buy
      </button>
    </div>
  </main>
  )
}
