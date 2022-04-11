import React from 'react'

export default function About() {
    return (
        <div id='about'>
            <h2 className='text-4xl p-4 text-center text-red font-bold'>About Us</h2>
            <div className='grid place-items-center lg:grid-cols-2 gap-4 p-4 mb-10 flex-wrap'>
                <div className="max-w-md rounded overflow-hidden shadow-lg">
                    <div className="p-6">
                        <div className="font-bold text-xl mb-2 text-red">Our History</div>
                        <p className="text-gray-700 text-lg">Michael Schaefer and David Lowrey conceived the business out of a request by a client in 2010. The customer was looking for a pergola that was substantial in girth, strong enough for the Colorado weather, and regal in a way that resembles the days when true craftsmanship was the norm.</p>
                    </div>
                </div>
                <div className="max-w-md rounded overflow-hidden shadow-lg">
                    <div className="p-6">
                        <div className="font-bold text-xl mb-2 text-red">Our Commitment</div>
                        <p className="text-gray-700 text-lg">The company’s skilled team remains dedicated to providing our customers with durable and elegant pergola systems. We want to help you bring out the best in your homes by giving products worthy of your environments. By thinking outside the box and staying true to our craftsmanship, we’ll guide you in turning your common outdoor space into a truly usable outdoor area.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
