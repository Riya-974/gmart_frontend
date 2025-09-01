import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Related from './Related'

const Detail = () => {
       const API=import.meta.env.VITE_API
    const [product, setproduct] = useState([])
    const navigate=useNavigate()
    const [productdata, setproductdata] = useState(false)
    const {id}=useParams()
    const [image, setimage] = useState(null)
    const [image1, setimage1] = useState(null)
    const [image2, setimage2] = useState(null)
    const [image3, setimage3] = useState(null)



    const fetchproduct=async()=>{
        product?.map((items)=>{
            if(items._id===id){
                setproductdata(items)
                setimage(items.image1)
                setimage1(items.image1)
                setimage2(items.image2)
                setimage3(items.image3)

                return null
            }
        })

    }


    const products=async()=>{
        const res=await axios.get(`${API}/products/getproduct`)
        setproduct(res.data.product)
    }

    useEffect(() => {
     products()
    }, [id])

    useEffect(() => {
        fetchproduct()
      
    }, [product,id])
    
    
  return (
    
    productdata?
   
    (  <>
    <div className='bg-white w-[100vw] min-h-screen md:flex mt-[10px]'>
        <div className='flex md:flex-col '>
            <div className='m-[40px] gap-3'>
                <img onClick={()=>setimage(image1)} src={image1} className='w-300px  md:w-[100px] md:h-[100px] rounded-2xl scale-105 shadow-4xl ' />
            </div>
            <div className='m-[40px] gap-3'>
                <img onClick={()=>setimage(image2)} src={image2} className='w-500px md:w-[100px] md:h-[100px] rounded-2xl scale-105 shadow-4xl ' />
            </div>
             <div className='m-[40px] gap-3'>
                <img onClick={()=>setimage(image3)} src={image3} className='w-500px  md:w-[100px] md:h-[100px] rounded-2xl scale-105 shadow-2xl' />
            </div>
        </div>

        <div className='md:w-[50%] w-[90%] p-[20px]'>
            <img  src={image} className=' m-[10px] border-2 border-black w-[100%px] md:w-[100%] md:h-[500px] rounded-3xl'/>
        </div>

        

        <div className='w-[90%] md:w-[40%] text-center md:m-[40px] p-[20px]'>
            <h1 className='font-bold text-xl'>{productdata.name}</h1>
            <br></br>
             <hr></hr>
             <h5 className='text-2xl font-bold'>About:</h5>
            <p className='text-xl'>{productdata.description}</p>
              <div className='mt-[10px]'>
             <button onClick={()=>navigate("/contact")} className='bg-black text-white rounded-2xl p-[10px]'>Contact us</button>
        </div>



        </div>

    

      
    </div>

    <div>
       <Related pid={productdata?._id} cid={productdata?.category?._id}/>
    </div>

     
      </>
    
    ):(<div></div>)
    
  )
}

export default Detail
