import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Nav = () => {
    const navigate=useNavigate()
  return (
    <div className='w-[100vw] p-[30px] shadow-xl flex items-center justify-between '>
      <div className='flex items-center' onClick={()=>navigate("/")}>
        <img src={"/gmart.jpg"} className='w-[50px] h-[50px]'/>
        <h1 className='text-red-700 font-bold text-3xl cursor-pointer'>GraphicsMart</h1>
      </div>

      <div className='m-[10px] w-[20%] hidden md:flex justify-between font-bold'>
        <NavLink to="/" className={({isActive})=>isActive?"text-red-600 gap-1.5":""}>HOME</NavLink>
        <NavLink to="/service"  className={({isActive})=>isActive?"text-red-600 gap-1.5":""}>SERVICE</NavLink>
        <NavLink to="/portfolio" className={({isActive})=>isActive?"text-red-600 gap-1.5":""}>PORTFOLIO</NavLink>
      </div>

      <div>
        <button onClick={()=>navigate("/contact")} className='bg-black text-white rounded-2xl p-[10px]'>Contact</button>
      </div>

       <div className=' bg-white w-[100%] md:hidden fixed bottom-0 left-0 gap-4 flex justify-center font-bold'>
        <NavLink to="/" className={({isActive})=>isActive?"text-red-600 gap-1.5 text-xl":"text-xl"}>HOME</NavLink>
        <NavLink to="/service"  className={({isActive})=>isActive?"text-red-600 gap-1.5 text-xl":"text-xl"}>SERVICE</NavLink>
        <NavLink to="/portfolio" className={({isActive})=>isActive?"text-red-600 gap-1.5 text-xl":"text-xl"}>PORTFOLIO</NavLink>
      </div>
    </div>
  )
}

export default Nav
