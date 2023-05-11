import React from 'react'
import Logo from '../assets/iu.png'

function banner() {
  return (
    <div className='w-full p-3  flex justify-between align-baseline border-b-2 border-slate-50 bg-white fixed elevate shadow'>
    <div >
        {/* <h2 className='p-1 font-bold text-blue'>PIPs  <span className='bg-black text-white p-2 rounded-sm'>Catchers</span></h2> */}
        <img src={Logo} className='w-2/4'/>
    </div>
    {/* navigigation */}
    <nav>
        <ul className='flex gap-10 mr-10 font-sens text-blue-700 sm:flex-auto'>
            <li><a href='#home' className='  hover:border-blue-200 hover:border-b-2 p-2 cursor-pointer'>Home</a></li>
            <li><a href='#programm' className='  hover:border-blue-200 hover:border-b-2 p-2 cursor-pointer'>Programme</a></li>
            <li><a href='#test' className='  hover:border-blue-200 hover:border-b-2 p-2 cursor-pointer'>Testimonial</a></li>
            <li><a href='#About' className='  hover:border-blue-200 hover:border-b-2 p-2 cursor-pointer'>About Us</a></li>
            <li><a href='#contact' className='  hover:border-blue-200 hover:border-b-2 p-2 cursor-pointer'>Contact Us</a></li>
        </ul>
    </nav>
    {/*  */}
    </div>
  )
}

export default banner