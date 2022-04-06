import Image from 'next/image'

function Video() {
  return (
    <div>
        <div className='object-center'>
        <Image
        src='/Pergola-floor-plan.jpeg'
        alt='pergola floor plan'
        width={300}
        height={300}
        layout='intrinsic'
        />
        </div>
    </div>
  )
}

export default Video

