import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <header>
        <nav className='bg-gray-800 text-white p-6 fixed w-full'>
            <ul className='flex justify-center gap-8 font-medium'>
                <li><Link to="/" className='hover:text-blue-400'>Home</Link></li>
                <li><Link to="/about" className='hover:text-blue-400'>About</Link></li>
                <li><Link to="/services" className='hover:text-blue-400'>Services</Link></li>
                <li><Link to="/contact" className='hover:text-blue-400'>Contact</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar