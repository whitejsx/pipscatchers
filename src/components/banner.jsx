import React from 'react'
import Logo from '../assets/pipcatchers_logo.svg'

function banner() {
  return (
    <div class="bg-white border-gray-200 dark:bg-gray-900 shadow-sm">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <div>
    <a href="#" class="flex items-center">
      <div className='flex text-black font-bold'>
        <img src={Logo} class="h-8 mr-3" alt="Flowbite Logo" height={"250px"} />
        <p>Pips Catchers</p>
        </div>
    </a>
  </div>
<div>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a  href='#home' class="block py-2 pl-3 pr-4 text-slate-400 hover:text-[#ffdf3f] active:text-[#ffdf3f]  rounded md:bg-transparent md:text-[#24200c] md:p-0">Home</a>
        </li>
        <li>
          <a href='#programm' class="block py-2 pl-3 pr-4 text-slate-400 hover:text-[#ffdf3f] active:text-[#ffdf3f]  rounded md:bg-transparent md:text-[#24200c] md:p-0">Service</a>
        </li>
        <li>
          <a href='#test' class="block py-2 pl-3 pr-4 text-slate-400 hover:text-[#ffdf3f] active:text-[#ffdf3f]  rounded md:bg-transparent md:text-[#24200c] md:p-0">Testimonials</a>
        </li>
       
        <li>
          <a href='#contact' class="block py-2 pl-3 pr-4 text-slate-400 hover:text-[#ffdf3f] active:text-[#ffdf3f]  rounded md:bg-transparent md:text-[#24200c] md:p-0">Contact us</a>
        </li>
        <li>
          <a href='#About' class="block py-2 pl-3 pr-4 text-slate-400 hover:text-[#ffdf3f] active:text-[#ffdf3f]  rounded md:bg-transparent md:text-[#24200c] md:p-0">About</a>
        </li>
      </ul>
    </div>
  </div>
  </div>
</div>
  )
}

export default banner




