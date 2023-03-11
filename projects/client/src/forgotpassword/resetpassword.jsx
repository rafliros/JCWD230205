import React, { useState } from 'react';
import axios from "axios";
import { useLocation } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

export default function ResetPassword() {
    const [password, setPassword] = useState("")
    const [errpassword, seterrpassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [errConfirmPassword, setErrConfirmPassword] = useState("")

    const query = useLocation().search.split("=")[1]
    console.log(query)
    
    
    

    let changePassword = (e) => {
        const value = e.target.value
        setPassword(value)
        if(!value){
            seterrpassword('password not empty')
        }else{
            seterrpassword('')
        }
    }
    let changeConfirmPassword= (e) => {
        const value = e.target.value
        setConfirmPassword(value)
        if(!value){
            setErrConfirmPassword('password not empty')
        }else if(password === value){
            setErrConfirmPassword('password not match')
        }
        else{
            setErrConfirmPassword('')
        }
    }
    
    let submit = async() => {
        const data = {
          password : password,
          token : query
        }
        try {
            let response = await axios.put("http://localhost:8000/users/resetpassword", data)
            .then(res => {
              if(res) {
                setPassword('')
                setConfirmPassword('')
                toast("password successfully changed")
              }
            })
        } catch (error) {
            
        }
    }
    
    return (
    <>
    <div className="md:flex mt-28">
        <div className="md:flex m-28">
          <div>
            <div className="py-6 px-12 bg-white shadow-xl z-20">
              <div className=" float-right"></div>
              <div>
                <h1 className="text-xl font-bold text-center mb-4 cursor-pointer">
                  Welcome to PWD Properties
                </h1>
              </div>
              <div className="space-y-4">
                <div className="flex items-center mb-4 py-2 px-3 text-gray-400">
                  <label>password</label>
                  <input type="password" placeholder="new password" value={password} onChange={changePassword} className="after:content-['*'] after:ml-0.5 after:text-red-500" />
                  {
                    errpassword &&(
                        <p className='text-red-700'>{errpassword}</p>
                    )
                  }
                </div>
                <div className="flex items-center mb-4 py-2 px-3 text-gray-400">
                    <label>confirm</label>
                    <input type="password" placeholder="confirm password" value={confirmPassword} onChange={changeConfirmPassword}className="after:content-['*'] after:ml-0.5 after:text-red-500" />
                    {
                        errConfirmPassword &&(
                            <p className='text-red-700'>{errpassword}</p>
                        )
                    }
                </div>
                <button  onClick={submit} className="py-1.5 w-full  text-xl font-medium text-white bg-[#09958C] rounded-3xl">Submit</button>
              </div>
            </div>
          </div>
        </div>
        <Toaster/>
      </div>
    </>
  );
}
