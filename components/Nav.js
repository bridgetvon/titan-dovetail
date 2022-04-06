import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'

export default function Nav() {
    const [open, setOpen] = useState(false)
    return (
        <nav className='flex bg-black items-center flex-wrap inline text-sm'>
            <MobileNav open={open} setOpen={setOpen} />
            <div className="w-11/12 p-3 flex justify-end items-center">
                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center lg:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>
                <div className="hidden w-full lg:inline-flex lg:flex-grow lg:w-auto text-red">
                    <div className='lg:inline-flex lg:flex-row lg:ml-48 lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto border-b-2 border-white lg:m-auto'>
                        <Link href='/' passHref>
                        <Image
                            src='/logo.png'
                            alt='Titan dovetail logo'
                            width={80}
                            height={80}
                        />
                        </Link>
                        
                        <span className='text-white pr-20 pl-5 mr-40 tracking-wide justify-start'>Titan Dovetail Systems</span>
                        <Link href='/#luxury-suites'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 text-red justify-end hover:text-white '>
                                About Us
                            </a>
                        </Link>
                        <Link href='/#exclusive-clubs'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 justify-end hover:text-white'>
                                Shop
                            </a>
                        </Link>
                        <Link href='/#contact'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 justify-end hover:text-white'>
                                Contact us
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>

    )
}

function MobileNav({ open, setOpen }) {
    return (
        <div className={`absolute top-12 left-0 h-screen w-screen bg-black transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex flex-col items-center text-white">
             
                <a className="text-xl font-medium my-4" href="/about" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    Luxury Suites
                </a>
                
                <a className="text-xl font-normal my-4" href="/contact" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    Exclusive Clubs
                </a>
                <a className="text-xl font-normal my-4" href="/contact" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    Contact
                </a>
            </div>
        </div>
    )
}