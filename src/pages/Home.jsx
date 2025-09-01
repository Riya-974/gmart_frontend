import React from 'react'
import Service from './Service'
import Portofolio from './Portofolio'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate=useNavigate()
  return (
    <>
    <div className='bg-white shadow-sm w-[95vw] md:m-[30px] md:flex justify-between' >


 <div className='m-[30px]'>
            <img src={"/first image.avif"} className='w-[600px] rounded-3xl'/>

        </div>
        <div className='md:w-[30%] m-[30px]'>
            <h1 className='text-red-600 text-5xl font-bold'> <span className='text-black' >Transform Your Brand with</span><h1>Creative Solutions</h1></h1>
<p className='mt-[20px]'>From digital marketing to website development, graphic design to high-quality prints — we craft powerful visuals & strategies to boost your business.</p>

<button onClick={()=>navigate("/service")} className='bg-black text-white p-[10px] rounded-2xl text-bold cursor-pointer m-[30px]'>Explore Service</button>
        </div>

       


      
    </div>

    <Service/>
    <Portofolio/>
    </>
  )
}

export default Home
