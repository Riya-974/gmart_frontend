import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Service = () => {

    const [cate, setcate] = useState([])
       const API=import.meta.env.VITE_API
    const navigate=useNavigate()

    const getcat=async()=>{
        try {

            const res=await axios.get(`${API}/category/getcat`)
            setcate(res.data.category)
            
        } catch (error) {
            console.log(error);
            
            
        }
    }

    useEffect(() => {
     getcat()
    }, [])
    
  return (
    <div className='bg-white w-[90vw] min-h-screen mt-[30px]'>
        <div>
            <h1 className='text-red-600 text-3xl font-semibold text-center'> <span className='text-black'>OUR</span> SERVICE</h1>

            <p className='text-center w-[100%] m-[10px]'>We provide creative, development, and marketing solutions to help your business grow online & offline</p>


            <div className='flex justify-center flex-wrap gap-5'>
                {
                    cate?.map((items)=>(
                        <div className={`cursor-pointer hover:scale-105` } onClick={()=>navigate(`/product/${items._id}`)} key={items._id}>
                            <img src={items.image} className=' w-[600px] m-[10px] h-[300px]  md:w-[300px] md:h-[300px] rounded-2xl'/>
                            <h4 className='text-2xl font-bold text-center'>{items.name}</h4>
                           

                        </div>
                    ))
                }
            </div>
        </div>
      
    </div>
  )
}

export default Service
