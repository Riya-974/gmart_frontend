import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Portofolio = () => {

    const [pro, setpro] = useState([])
       const API=import.meta.env.VITE_API
    const navigate=useNavigate()

    const getpro=async()=>{
        try {
            const res=await axios.get(`${API}/products/getproduct`)

            setpro(res.data.product)
        } catch (error) {
            console.log(error);
            
            
        }
    }

    useEffect(() => {
     getpro()
    }, [])
    
  return (
    <div className='bg-white w-[100vw] min-h-screen mt-[10px] '>

        <div>
                        <h1 className='text-red-600 text-3xl font-semibold text-center'> <span className='text-black'>OUR</span> Portfolio</h1>

            <p className='text-center w-[90%] m-[10px]'>Explore our creative work across multiple disciplines</p>

<div className='flex gap-3.5 justify-center flex-wrap'>
    {
pro?.map((items)=>(
    <div onClick={()=>navigate(`/products/${items._id}`)}  className="relative group hover:scale-105 duration-300" key={items._id}>
        
        <img src={items.image1} className='w-[300px] h-[300px] rounded-3xl shadow-2xl'/>
        <h3 className='absolute bottom-6 text-white m-[10px] text-center bg-black/40 backdrop-blur-3xl opacity-100  md:opacity-0 group-hover:opacity-100 scale-105 duration-300'>{items.name}</h3>
        </div>
))

    }
</div>
    

        </div>

      
    </div>
  )
}

export default Portofolio
