// React
import { useState, useEffect, useRef } from "react";

// Import Link Router-Dom
import {Link} from 'react-router-dom';

// Import Logo
import Logo from '../../supports/assets/logo.png'; 

// Import axios
import axios from 'axios'

// Import Icon Menu
import {FaTimes, FaFacebook, FaPhoneAlt} from "react-icons/fa";
import {RiLock2Fill} from "react-icons/ri";
import {AiFillGoogleCircle, AiFillTwitterCircle } from "react-icons/ai";

export default function Login(props){

    const email = useRef()
    const password = useRef()

    return(
        <div className="md:flex mt-28">

            <div className="md:flex m-28">
                
        <div>
	
	
	<div className="py-6 px-12 bg-white shadow-xl z-20">
        <div className=" float-right" ><FaTimes/></div>
		    <div>
                <div className="flex justify-center mt-4">
                    <Link to='/'>
                    <img className="w-21 h-28 rounded-full"
                     src={Logo} alt='logo' />
                     </Link>
                </div>
			<h1 className="text-xl font-bold text-center mb-4 cursor-pointer">Welcome to PWD Properties </h1>
			<p className=" text-center text-sm mb-8 font-semibold text-gray-700 cursor-pointer">Sign up to Users PWD Properties</p>
		</div>
		<div className="space-y-4">
            
            <div class="flex items-center border-2 mb-4 py-2 px-3 rounded-lg text-gray-400">
                <FaPhoneAlt/>
                <input ref={email} className="pl-2 w-full outline-none border-none" type="text"  placeholder="Email Address / Phone Number" />   
            </div>

            <div class="flex items-center border-2 py-2 px-3 rounded-lg text-gray-400">
                <RiLock2Fill/>
                <input ref={password} className="pl-2 w-full outline-none border-none" type="password"  placeholder="Password" />   
            </div>
            
            <span className="text-sm text-blue-600 hover:text-sky-500 font-medium ">Forgot Password</span>

            
    </div>
			<div className="text-center mt-6">
                <button onClick={() => props.myFunc.onLogin(email.current.value, password.current.value)} className="py-1.5 w-full  text-xl font-medium text-white bg-[#09958C] rounded-3xl">Sign In</button>
                <p className="mt-4 text-sm">Or Sign Up With</p>

                <div className='md:flex flex-col items-center  mt-2 text-[#09958C]'>
                    <div className="container pt-1">
                        <div className="mb-1 flex justify-center gap-5 ">
                            <span className="my-2"><AiFillGoogleCircle size={28}/></span>
                            <span className="my-2"><AiFillTwitterCircle size={28}/></span>
                            <span className="my-2"><FaFacebook size={26}/></span>
                        </div>
                    </div>
                </div>

				<p className="mt-4 text-sm">Account? <span className="font-bold cursor-pointer">Sign Up </span>
				</p>
			</div>
		</div>
		
	</div>
                
                

             </div>

        </div>
    )
}