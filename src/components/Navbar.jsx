import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { FaBars }  from 'react-icons/fa';
import { FaTimes }  from 'react-icons/fa';
import { FaShoppingCart }  from 'react-icons/fa';
import { RiPlantLine } from 'react-icons/ri'


const Navbar = () => {
    const navItemStyle = 'text-sm hover:text-green-100 active:text-green-300'

    const [navbar, setNavbar] = useState(false)

  return (
    <header className='w-full bg-green-900 z-10 sticky top-0 right-0 shadow-sm px-3 py-2 md:px-10 md:py-3 text-white font-semibold'>
            
           <nav>
                <div className='justify-between mx-auto lg:max-w-7xl md:items-center md:flex'>
                    
                    <div>
                        <div className='flex justify-between items-center'>
                            <Link to='/' className='hover:text-green-100 active:text-green-300 font-bold text-base md:text-xl tracking-wide'><RiPlantLine className='inline -mt-1'/> PlantStation</Link>
                            
                            <div className='md:hidden'>
                                <button onClick={() => setNavbar(!navbar)}
                                    className="p-1 rounded-md outline-none focus:border-gray-400 focus:border">
                                    {navbar ? (
                                        <FaTimes className='w-4 h-4 hover:text-green-100 active:text-green-300' />
                                    ) : (
                                        <FaBars className='w-4 h-4 hover:text-green-100 active:text-green-300' />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    
                    <div>
                        <div className={`flex-1 justify-self-center pb-3 mt-4 md:block md:pb-0 md:mt-0 ${navbar?'block':'hidden'}`}>
                            <div className='items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0'> 
                                <div className='flex flex-col gap-y-4 md:flex-row md:gap-x-7 md:items-center'>
                                    <Link to='/' className={navItemStyle}>Home</Link>
                                    <Link to='/shop'  className={navItemStyle}>Shop</Link>
                                    <Link to='/cart' className={`inline ${navItemStyle}`}>
                                        <FaShoppingCart className='w-4 h-4'/>
                                    </Link>
                                    <HashLink to='/#contact' className={`inline ${navItemStyle}`}>Contact Us</HashLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
           </nav>
        </header>
  )
}

export default Navbar