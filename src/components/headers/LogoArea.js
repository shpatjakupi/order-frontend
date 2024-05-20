import React from 'react'
import img from '../../pizza.png'

export default function LogoArea() {
  return (
    <div className='bg-white sticky top-0 z-40'>
        <img
            className="w-20 bg-white rounded-3xl m-auto"
            src={img}
            alt="Centered Image"
        />
    </div>
  )
}
