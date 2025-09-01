import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
   


const Related = ({pid,cid}) => {

    const [pro, setpro] = useState([])
       const API=import.meta.env.VITE_API
    const navigate=useNavigate()
   

    const related=async()=>{
        try {

            const res=await axios.get(`${API}/products/related/${pid}/${cid}`)

            setpro(res.data.product)
            
        } catch (error) {
            console.log(error);
            
            
        }
    }

    useEffect(() => {
      if(pid && cid){
        related()
      }
    }, [pid,cid])
    
  return (
    <div className='bg-white w-[100vw] min-h-screen'>

         <h1 className='text-red-600 text-3xl font-semibold text-center'> <span className='text-black'>RELATED</span> PRODUCT</h1>

<h1 className='text-center text-3xl mt-[10px] font-bold'>{pro.length===0?"NO PRODUCT FOUND": "pro.length"}</h1>
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
  )
}

export default Related
