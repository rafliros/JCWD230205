// React
import {useRef, useState} from 'react';

// Import Link Router-Dom
import {Link} from 'react-router-dom';

// Import Logo
import Logo from '../../supports/assets/logo.png'; 

// Import axios
import axios from 'axios';

// Import Icon Menu
import {FaTimes, FaFacebook, FaPhoneAlt} from "react-icons/fa";
import {RiLock2Fill} from "react-icons/ri";
import {AiFillGoogleCircle, AiFillTwitterCircle } from "react-icons/ai";
import { MdEmail} from "react-icons/md";
import { IoMdPerson} from "react-icons/io";


export default function Signup(props){

    const [disabledButton, setDisabledButton] = useState(false)
    const [message, setMessage] = useState('')

    const name = useRef()
    const email = useRef()
    const phonenumber = useRef()
    const password = useRef()

    let onSubmit = async() => {
        try {
            // Step.1 Get Input Value from Input
            let inputname = name.current.value 
            let inputEmail = email.current.value
            let inputPhonenumber = phonenumber.current.value  
            let inputPassword = password.current.value 

            // Step2. Validate Input Value
            if(inputname.length === 0 || inputPassword.length === 0 || inputEmail.length === 0 || inputPhonenumber.length === 0 ) throw { message: 'Inputan belum lengkap' }
            
            if(inputPassword.length < 8) throw { message: 'Password invalid' }

            let character = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/
            if(!character.test(inputPassword)) throw { message: 'Password must contains number' }

            setDisabledButton(true)
            let result = await axios.post(`http://localhost:8000/users/register`, {name: inputname, email: inputEmail, phonenumber: inputPhonenumber, password: inputPassword})
            
            name.current.value = ''

        } catch (error) {
            console.log(error)
            setMessage(error.response.data.message)
        }finally{
            setDisabledButton(false)
        }
        
    }

    return(
        <div className="md:flex mt-28">

            <div className="md:flex m-28">
                
            <div>
	
	
	<div class="py-6 px-12 bg-white shadow-xl z-20">
    <div className=" float-right" ><FaTimes/></div>
		<div>
                <div className="flex justify-center mt-4">
                    <Link to='/'>
                    <img className="w-21 h-28 rounded-full"
                     src={Logo} alt='logo' />
                     </Link>
                </div>
			<h1 className="text-xl font-bold text-center mb-4 cursor-pointer">Welcome to PWD Properties </h1>
			<p className=" text-center text-sm mb-8 font-semibold text-gray-700 cursor-pointer">Login to PWD Properties</p>
		</div>
		<div className="space-y-4">

            <div className="flex items-center border-2 mb-4 py-2 px-3 rounded-lg text-gray-400">
                <IoMdPerson/>
                <input ref={name} className="pl-2 w-full outline-none border-none" type="text"  placeholder="Name" />   
            </div>

            <div className="flex items-center border-2 mb-4 py-2 px-3 rounded-lg text-gray-400">
                <MdEmail/>
                <input ref={email} className="pl-2 w-full outline-none border-none" type="text"  placeholder="Email Address" />   
            </div>
            
            <div class="flex items-center border-2 mb-4 py-2 px-3 rounded-lg text-gray-400">
                <FaPhoneAlt/>
                <input ref={phonenumber} className="pl-2 w-full outline-none border-none" type="text"  placeholder="Phone Number" />   
            </div>

            <div class="flex items-center border-2 py-2 px-3 rounded-lg text-gray-400">
                <RiLock2Fill/>
                <input ref={password} className="pl-2 w-full outline-none border-none" type="password"  placeholder="Password" />   
            </div>
               
            </div>
                    <div className="text-center mt-6">
                        <button disabled={disabledButton} onClick={onSubmit} className="py-1.5 w-full  text-xl font-medium text-white bg-[#09958C] rounded-3xl">Sign In</button>
                        <p className="mt-4 text-sm">Or Sign Up With</p>
                        
                        <div className='md:flex flex-col items-center  mt-2 text-[#09958C]'>
                            <div class="container pt-1">
                                <div class="mb-1 flex justify-center gap-5 ">
                                    <span className="my-2"><AiFillGoogleCircle size={28}/></span>
                                    <span className="my-2"><AiFillTwitterCircle size={28}/></span>
                                    <span className="my-2"><FaFacebook size={26}/></span>
                                </div>
                            </div>
                        </div>

                        <p className="mt-4 text-sm">Don’t Have An Account? <span className="font-bold cursor-pointer"> Sign In</span>
                        </p>
                        
                    </div>
                </div>
                
            </div>
                
            

             </div>

        </div>
    )
}