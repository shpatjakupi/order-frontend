import React from 'react'

const url = 'https://www.pixel-industry.com/html/royal-plate/img/pics/spices-left.png';

const url2 = 'https://www.pixel-industry.com/html/royal-plate/img/pics/spices-right.png'



const Aboutsection = () => {
  return (
    <div className='flex justify-between lg:mx-32 py-12 lg:py-32'>

        <div className='hidden lg:block lg:w-1/4'>
            <img className='w-full' src={url} />
        </div>

        <div className='text-center w-full lg:w-1/2  shadow-xl border-[15px] border-[#131822] py-[125px] px-8 lg:px-[80px] mx-3 lg:mx-14' style={{backgroundImage: 'url(https://www.pixel-industry.com/html/royal-plate/img/pics/bkg-img2.png)'}}>
            <p className='text-md font-semibold'>Our story</p>
            <h2 className='text-2xl font-bold uppercase'>LOVE FOR FOOD</h2>
            <hr></hr>

            <p className='mt-10 font-light'>
            Welcome. This is Royal plate. Elegant & sophisticated restaurant template. Royal plate offers different home page layouts with smart and unique design, showcasing beautifully designed elements every restaurant website should have. Smooth animations, fast loading and engaging user experience are just some of the features this template offers.
            So, give it a try and dive into a world of royal restaurant websites.   
            </p>
        </div>

        <div className='hidden lg:block lg:w-1/4'>
        <img className='w-full' src={url2} />
        </div>

    </div>
  )
}

export default Aboutsection