import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-blue-950 w-[100vw] p-[20px] md:p-[50px] md:h-[350px] h-[600px] text-white  '>

        <div>
            <h1 className='font-bold text-2xl'>GMART</h1>
            <p>Creative design solutions to elevate your brand and digital presence.</p>

           
        </div>

        <div className=' w-[100%] md:flex justify-between'>
            <div className='m-[10px] w-[20%] flex flex-col font-bold'>
                     <h1 className='font-bold flex'>QUICK LINK</h1>
        <NavLink to="/" className={({isActive})=>isActive?"text-red-600 gap-1.5":""}>HOME</NavLink>
        <NavLink to="/service"  className={({isActive})=>isActive?"text-red-600 gap-1.5":""}>SERVICE</NavLink>
        <NavLink to="/portfolio" className={({isActive})=>isActive?"text-red-600 gap-1.5":""}>PORTFOLIO</NavLink>
         <NavLink to="/contact" className={({isActive})=>isActive?"text-red-600 gap-1.5":""}>CONTACT</NavLink>
      </div>

      <div className='mt-[10px] '>
        <h1 className='font-bold text-xl'>CONTACT</h1>
        <div className='flex items-center gap-2'>
         <MdEmail /> yuvidollarama@gmail.com
         </div>
        <div className='flex items-center gap-2 mt-[10px]'>
         <b><IoCallSharp/> </b>  <span className='gap-2.5'>+917667189326</span> 
        </div>
      </div>

      <div>
        <h1 className='font-bold text-xl'>FOLLOW US</h1>
        <div className='flex gap-4 mt-[10px]'>
            <Link><FaSquareInstagram /></Link>
        <Link><FaFacebook /></Link>
        </div>
        

      </div>

        </div>
        <br></br>

        <hr></hr>

        <p className='text-center mt-[20px]'>© 2025 GMART. All rights reserved.</p>
      
    </div>
  )
}

export default Footer
