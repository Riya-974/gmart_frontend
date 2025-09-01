import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Category = () => {

    const [cat, setcat] = useState([])
    const [pro, setpro] = useState([])
    const params=useParams()
    const navigate=useNavigate()
    const API=import.meta.env.VITE_API


    const grtpro=async()=>{
        try {

            const res=await axios.get(`${API}/products/categorypro/${params.id}`)

            setcat(res.data.category)
            setpro(res.data.product)
            
        } catch (error) {
            console.log(error);
            
            
        }
    }


useEffect(() => {
 grtpro()
}, [params.id])

  return (
    <div className='bg-white min-h-screen w-[100vw]' >

         <div className='text-center m-[20px] text-4xl text-red-500 font-bold  '>
                <h1>{pro.length===0?"NO PRODUCT FOUND":cat.name}</h1>
            </div>


        <div className='flex justify-center flex-wrap gap-3 md:m-[20px]'>


           
            {
                pro?.map((items)=>(

                  <div onClick={()=>navigate(`/products/${items._id}`)}  className="relative group hover:scale-105 duration300" key={items._id}>
        
        <img src={items.image1} className=' w-[300px] h-[300px] rounded-3xl shadow-2xl'/>
        <h3 className='absolute bottom-6 text-white m-[10px] text-center bg-black/40 backdrop-blur-3xl opacity-100  md:opacity-0 group-hover:opacity-100 scale-105 duration-300'>{items.name}</h3>
        </div>
))

            
            }
        </div>

      
    </div>
  )
}

export default Category
