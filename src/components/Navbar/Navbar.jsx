import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between py-4 px-6 bg-black'>
      <h1 className='text-white'>Convert Case</h1>

      <ul className='flex'>
        <li className='mx-6 text-white'>converter app</li>
        <li className='mx-6 text-white'>change font</li>
        <li className='mx-6 text-white'>Change design</li>
        <li className='mx-6 text-white'>Ai is here</li>
        <li className='mx-6 text-white'>New feature (test)</li>
      </ul>

    </div>
  )
}

export default Navbar
