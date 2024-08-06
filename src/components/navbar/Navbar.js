import React from 'react';
import { House,UserRoundPlus, UserRoundPen } from 'lucide-react';


const Navbar = () => {
  return <>
  <header className="w-full h-20 bg-blue-600 flex items-center justify-between px-6 text-white">
    <h1 className="text-xl font-bold capitalize">Redux crud app</h1>
    <nav className="w-2/5">
        <ul className="w-full flex items-center justify-around">
            <li className='flex items-center gap-1'><House />Home</li>
            <li className='flex items-center gap-1'><UserRoundPlus />Adduser</li>
            <li className='flex items-center gap-1'><UserRoundPen />Edituser</li>
        </ul>
    </nav>
  </header>
  </>
}

export default Navbar;