import logo from "../assets/logo.png";
import { links } from '../constant';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';


const Navbar = () => {
 const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  }

  return (
    <nav className = "w-full py-6 flex justify-between items-center">

    <a href="#" className='text-white flex items-center font-sans font-[500]'>
      <img src={logo} alt="Logo" className="h-12 w-12 mr-2" />
      <h1 className = "text-2xl font-bold text-gradient mx-1">Moonshot</h1>
    </a>
    <div className='sm:hidden flex items-end justify-end'>
          <RxHamburgerMenu className='text-2xl text-white items-end justify-end hover:text-gradrient' onClick={handleToggle} />
          <div className={`${toggle ? "right-0" : "right-[-600px]"} fixed top-0 bg-primary w-[60%] h-[70%] p-6 z-10 sidenav`}>
            <IoMdClose className='text-4xl text-white' onClick={handleToggle}  />
            <ul className='list-none flex flex-col justify-center items-center flex-1 mt-20 '>
              {links.map((link)=>(
                <li key={link.id} className='text-white font-sans text-[18px] cursor-pointer mb-10'>
                    <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul> 
            <div className='flex flex-col items-center justify-center'>
            <button><a href="#" className='bg-gradient rounded-full px-8 py-3 text-white font-sans font-[700] cursor-pointer'>Get the App</a></button>
            </div>
          </div>
        </div>

        <ul className='list-none sm:flex hidden justify-center flex-1'>
            {links.map((link)=>(
                <li key={link.id}>
                    <a href={`#${link.id}`} className='text-white font-sans text-[16px] mr-10 cursor-pointer hover:text-gradient'>{link.title}</a>
                </li>
            ))}
        </ul>
        <button><a href="#" className='bg-gradient rounded-full px-8 py-3 text-white font-sans font-[700] cursor-pointer sm:flex hidden'>Get the App</a></button>
    </nav>
  )
  }

export default Navbar;