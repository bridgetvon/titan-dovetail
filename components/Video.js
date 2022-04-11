import Image from 'next/image'

function Video() {
    return (
        <div>
            <h1 className='text-center font-bold text-red text-3xl mt-20'>Sample of Pergola Floor Plan Measurements</h1>
            <div className='flex justify-center p-20'>
                <Image
                    src='/Pergola-floor-plan.jpeg'
                    alt='pergola floor plan'
                    width={300}
                    height={300}
                    layout='intrinsic'
                />
            </div>
            <h2 className='text-xs text-center mb-20 break-words'>Size is determined by canopy top measurements
                Image is of a 10X12 Canopy. Post to post size is roughly 12” shorter than canopy measurement</h2>
        </div>
    )
}

export default Video

