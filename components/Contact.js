

export default function Contact() {
    return (
        <div>
        <h1 className='text-4xl p-4 text-center text-red font-bold mb-10'>CONTACT US</h1>

        <div className='bg-darkGray text-black grid lg:grid-cols-2 flex flex-wrap justify-center' id='contact'>
                <div className="mb-10">
                    <ul>
                        <li className='lg:p-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            Mike: 303-885-9923</li>
                            <li className='lg:p-4'>Dave: 303-921-0422</li>
                        <li className='lg:p-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                            </svg>
                            mike@titandovetail.com</li>
                            <li className='lg:p-4'>
                                dave@titandovetail.com
                            </li>
                    </ul>
                </div>
                <div>
                    <form>
                        <div className="w-full">
                            <label htmlFor="name">Name:</label>
                            <input className='block rounded-sm w-full p-1 mt-1 border-2 border-black-500'
                                type="text"
                                name="name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email address:</label>
                            <input className='block rounded-sm w-full p-1 mt-1 border-2 border-black-500'
                                type="email"
                                name="email"
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Phone Number:</label>
                            <input className='block rounded-sm w-full p-1 mt-1 border-2 border-black-500'
                                type="phone"
                                name="email"
                            />
                        </div>
                        <div>
                            <label>Options:</label>
                            <select className='block rounded-sm w-full p-1 mt-1 border-2 border-black-500 appearance-none'>
                                <option>Customize</option>
                                <option>Pricing</option>
                                <option>Appointments/consultation</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="message">Message:</label>
                            <textarea className='block rounded-sm w-full p-1 mt-1 border-2 border-black-500'
                                name="message"
                                rows="3"
                            />
                        </div>
                        <button className='text-red border-2 p-3 rounded mt-6 mb-10 cursor-pointer'>Send</button>
                    </form>
                </div>
        </div>
        </div>
    );
}