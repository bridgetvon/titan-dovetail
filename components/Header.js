import Image from 'next/image'
import backgroundImage from '../public/bg.jpg'



export default function Header() {
    return (
    
      <div className='bg-white text-center p-20 relative h-full'>
          <Image
               layout="fill"
               className="object-cover pointer-events-none"
               src={backgroundImage}
               
               alt='image of a pergola'
             />
        <div className='relative z-1'>
          <h1 className='text-white text-6xl font-bold'>REAL TIMBER PERGOLAS</h1>
          <h2 className='text-white text-4xl p-2'>FROM PASSIONATE CRAFTSMAN</h2>
          <p className='text-white text-xl m-auto'>Bring your backyard to life with our do-it-yourself Pergola systems. Whether you want to spend time with family enjoying the outdoors, or entertain a company party our pergolas will bring your backyard to the next level.</p>
          <button className='text-white border-2 p-3 rounded mt-6 cursor-pointer'>CONTACT US</button>
          </div>
      </div>
    )
  }