import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect } from "react"

import {AiFillCheckCircle} from 'react-icons/ai'

export default function Activation(){

    let {id} = useParams()
    
    let onActivation = async() => {
        try{
            await axios.patch(`http://localhost:8000/users/activation/${id}`)

            alert('activate')
        }catch{

        }
    }
    
    useEffect(()=> {
        onActivation()
    }, [])
    
    return(
        <>
            <div className="md:flex mt-28">
            <div className="md:flex m-28">
        <div>
        <div class="py-6 px-12 bg-white shadow-xl z-20">
        <div className=" float-right" ></div>
        <div>
            <h1 className="text-xl font-bold text-center mb-4 cursor-pointer">Welcome to PWD Properties </h1>
            </div>
            <div className="space-y-4">

            <div class="flex items-center mb-4 py-2 px-3 text-gray-400">
                <p>your account already active</p>
            </div>
            <div className="mb-1 flex justify-center gap-5 text-4xl" >
            <AiFillCheckCircle/>
            </div>
            </div>
            <div className="text-center mt-6">
                {/* <button  className="py-1.5 w-full  text-xl font-medium text-white bg-[#09958C] rounded-3xl">Get Stared</button> */}
            </div>
            </div>
            </div>
            </div>
            </div>
        </>
    )
}