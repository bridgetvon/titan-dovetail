import Image from 'next/image'

export default function Photos() {
  return (
    <div className='grid grid-cols-2 p-3'>
      <div className='p-12 ml-20'>
        <Image
          src='/perg.jpeg'
          alt='pergola with string lights'
          width={350}
          height={400}
        />
      </div>
      <div>
        <h1 className='text-2xl p-4'>Strength and Style All in One</h1>
        <div className='grid grid-cols-2 gap-4 p-4'>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Why Choose Us</div>
                <p className="text-gray-700 text-base">Our team is committed to supplying you with the best quality of wood for your pergolas. The kits you can purchase from us are made from Free of Heart Center and Douglar Fir woods. Since this timber is meant for outdoors, you can be sure that it has natural resistance to insects and rotting. To give the wood products a lovely finishing, we use oil-based stains on them.</p>
              </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">What We Do</div>
                <p className="text-gray-700 text-base">For more than nine years, homeowners have been trusting our products for their pergola projects. Along with the kits we offer, our team also provides pergola building services for our valued clients. We use the old-world method for the pergolas’ main beams and dovetails for the post connections. Our systems are ready for convenient arrangement and assembly by two to three people.</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
