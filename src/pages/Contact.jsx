import React, { useEffect, useState } from 'react'
import {toast} from "react-toastify"
import axios from 'axios'

const Contact = () => {
   const API=import.meta.env.VITE_API
const [input, setinput] = useState({
    name:"",
    email:"",
    phone:"",
    message:"",
    category:""
})


const [loading, setloading] = useState(false)


const onChangeHandle=(e)=>{
    setinput({...input,[e.target.name]:e.target.value})
}


const  onSubmitHandle=async(e)=>{
    e.preventDefault()

    setloading(true)
    try {

        const res=await axios.post(`${API}/contacts/contact`,input)

        if(res.data.success){
            toast.success(res.data.message)
            setinput({
                 name:"",
    email:"",
    phone:"",
    message:"",
    category:""

            })

        }else{
            toast.error(res.data.message)
        }
        
    } catch (error) {
        console.log(error);

        
        
    }

    setloading(false)
}



 const [cat, setcat] = useState([])
   
   


    const grtpro=async()=>{
        try {

            const res=await axios.get(`${API}/category/getcat`)

            setcat(res.data.category)
            
            
        } catch (error) {
            console.log(error);
            
            
        }
    }


useEffect(() => {
 grtpro()
}, [])
  return (
    <div className=' bg-gray-100 w-[100vw] min-h-screen mt-[5px]  flex flex-col items-center'>

        <div className='mt-[20px] text-center'>
            <h1 className='font-bold text-3xl'>Contact Us</h1>
            <p>Drop us a message & let's work together!</p>
            </div>

            
            <form onSubmit={onSubmitHandle}>

                <div className='w-[100%] bg-white shadow-2xl rounded-2xl p-[20px] mt-[20px] '>
                    <div>
                        YOUR NAME:
                        <input name="name" onChange={onChangeHandle} value={input.name} className='w-[90%] p-[10px] border-1 ' type="text" required/>
                    </div>

                    
<div className='mt-[10px]'>
   <select
            name="category"
            value={input.category}
            onChange={onChangeHandle}
            className="w-[90%] border rounded-lg p-3"
            required
          >


            <option value="">-- Select Category --</option>

            {
                cat?.map((items)=>(
                    <option key={items._id} value={items._id}>{items.name}</option>

                ))
            }
            
            <option value="Other">Other</option>
          </select>
</div>
                    <div className='mt-[10px]'>
                        YOUR EMAIL:
                        <input  name="email" onChange={onChangeHandle} value={input.email} className='w-[90%] p-[10px] border-1 ' type="text" required/>
                    </div>

                     <div className='mt-[10px]'>
                        YOUR MOBILE NUMBER:
                        <input  name="phone" onChange={onChangeHandle} value={input.phone} className='w-[90%] p-[10px] border-1 ' type="number"/>
                    </div>

                    
                     <div className='mt-[10px]'>
                        YOUR MESSAGE:
                        <textarea  name="message" onChange={onChangeHandle} value={input.message} className='w-[90%] p-[10px] border-1 ' type="text" required/>
                    </div>
                    <div className='mt-[10px]'>
                        <button type='submit' className='bg-green-700 w-[90%] p-[10px] '> {loading?"Sending":"SendMessage"}</button>
                    </div>
                </div>

            </form>
        </div>
      

  )
}

export default Contact
