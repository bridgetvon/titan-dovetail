import { useState } from 'react'
import Image from 'next/image'


export default function Cart() {

    const [item, setItem] = useState({
        name: 'timber pergula',
        description: 'lorem aodfadsf',
        image: '/public/firepit.jpg',
        quantity: 0,
        price: '2,000',
      });
      
  return (
    <main>
    <div className='shadow-lg border rounded p-2 '>
      <Image src={item.image} width={300} height={150} alt={item.name} />
      <h2 className='text-2xl'>$ {item.price}</h2>
      <h3 className='text-xl'>{item.name}</h3>
      <p className='text-gray-500'>{item.description}</p>
      <p className='text-sm text-gray-600 mt-1'>Quantity:</p>
      <div className='border rounded'>
        <button
          className='bg-blue-500 py-2 px-4 text-white rounded hover:bg-blue-600'
        >
          -
        </button>
        <input
          type='number'
          className='p-2'
          defaultValue={item.quantity}
        />
        <button
          className='bg-blue-500 py-2 px-4 text-white rounded hover:bg-blue-600'
        >
          +
        </button>
      </div>
      <p>Total: ${item.quantity * item.price}</p>
      <button
        disabled={item.quantity === 0}
        className='bg-blue-500 hover:bg-blue-600 text-white block w-full py-2 rounded mt-2 disabled:cursor-not-allowed disabled:bg-blue-100'
      >
        Buy
      </button>
    </div>
  </main>
  )
}
