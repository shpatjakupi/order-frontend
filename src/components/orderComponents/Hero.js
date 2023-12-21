import React from 'react'

const Hero = () => {
  return (
    <div className='h-[160px] md:h-[260px] relative img'>
        <img 
        className='h-full w-full'
        src="https://www.valsemollen.dk/wp-content/uploads/2022/06/kartoffel-moerk-napolitansk-1-1140x490.jpg"
        alt="NextUI hero Image"
        />
        <div className='absolute bg-[#0000005f] h-full w-full top-0'>
        </div>
    </div>
  )
}

export default Hero