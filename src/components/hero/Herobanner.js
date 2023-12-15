import React from 'react'

const url = 'https://images.unsplash.com/photo-1579751626657-72bc17010498?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const Herobanner = (props) => {

  return (
    <>

        <div className='h-[300px] relative'>
            <img className='h-full w-full' src={url} />
            <div className='absolute bg-[#0000009e] h-full w-full top-0'></div>

            {/* <FaSquarePhone className='absolute text-5xl lg:text-6xl bottom-3 right-3 text-[#fcda9a]' /> */}
        </div>


    </>
  )
}

export default Herobanner