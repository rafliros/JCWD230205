import React, { useState } from "react";
import axios from "axios";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [alert, setAlert] = useState("")

  const changeEmail = (e) => {
    setEmail(e.target.value)
    setError("")
  }

  const submit = async() => {
    if(!email) {
        setError("email is required")
    }else{
        await axios.post("http://localhost:8000/users/forgotpassword", {email:email})
        .then(res => {
            setEmail("")
            setAlert("please check your email")
            setTimeout(() => {
                setAlert()
            }, 3000)
        })
    }
  }

  return (
    <>
      <div className="md:flex mt-28">
        <div className="md:flex m-28">
            <div className="py-6 px-12 bg-white shadow-xl z-20">
              <div className=" float-right"></div>
              <div>
                <h1 className="text-xl font-bold text-center mb-4 cursor-pointer">
                  Welcome to PWD Properties
                </h1>
              </div>
              <div className="space-y-4">
              {
                    alert && (
                        <div>
                            <p className='text-red-700'>{alert}</p>
                        </div>
                    )
                }
                {
                    error && (
                        <div>
                            <p className='text-red-700'>{error}</p>
                        </div>
                    )
                }
                <div className="flex items-center mb-4 py-2 px-3 text-gray-400">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder="email"
                    className="after:content-['*'] after:ml-0.5 after:text-red-500"
                    value={email}
                    onChange={changeEmail}
                  />
                  <button onClick={submit}className="py-1.5 w-full  text-xl font-medium text-white bg-[#09958C] rounded-3xl">
                    Submit
                  </button>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}
