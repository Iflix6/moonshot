import logo from "../assets/logo.png";
import { footer_link } from '../constant';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";

const Footer = () => {
  return (
    <section className='sm:pt-16 py-6 sm:px-16 px-6'>
        <div className='grid sm:grid-cols-5 grid-cols-1 gap-20 '>
            {footer_link.map((footerlink, index)=>(
                <div className='flex flex-col' key={index}>
                    <p className='text-white text-[20px] font-bold' ><a href="">{footerlink.title}</a></p>
                    <ul className='list-none mt-5'>
                        {footerlink.links.map((item, index)=>(
                            <li className='text-white text-[18px] mb-5 font-normal' key={index}>{item.text}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10 items-center mt-10 m-10">
    <div className='flex items-start sm:justify-center md:justify-start'>
        <a href="#" className='text-white flex items-center font-sans font-[500]'>
            <img src={logo} alt="logo" />
            <span className='mx-1 text-xl'>moonshot</span>
        </a>
    </div>
    
    <div className='flex justify-center gap-10 text-white text-xl cursor-pointer mt-10 sm:mt-10 md:mt-0'>
        <FaFacebook />
        <FaInstagramSquare />
        <FaXTwitter />
        <FaGoogle />
    </div>
    
    <div className='text-center md:text-right'>
        <p className='text-white text-[16px] mt-10 sm:mt-10 md:mt-0'>© 2024 moonshot. All rights reserved.</p>
    </div>
    </div>
    </section>
  )
}

export default Footer