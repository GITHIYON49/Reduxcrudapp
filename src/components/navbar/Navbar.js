import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import { House,UserRoundPlus, UserRoundPen } from 'lucide-react';
import { UserContex } from '../../App';


const Navbar = () => {
  const {id} = useContext(UserContex);
  return <>
  <header className="w-full h-20 bg-blue-600 flex items-center justify-between px-6 text-white">
    <h1 className="text-xl font-bold capitalize">Redux crud app</h1>
    <nav className="w-2/5">
        <ul className="w-full flex items-center justify-around">
            
            <Link to={'/'}><li className='flex items-center gap-1'><House />Home</li></Link>
            <Link to={'/addUser'}><li className='flex items-center gap-1'><UserRoundPlus />Adduser</li></Link>
            <Link to={`/editUser/${id}`}><li className='flex items-center gap-1'><UserRoundPen />Edituser</li></Link>
            
            
        </ul>
    </nav>
  </header>
  </>
}

export default Navbar;