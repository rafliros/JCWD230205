// React
import React from 'react';

// Import Home css
import './home.css'

// Import Calender
import Calendar from './calender'

// Default BG
import Defaultbg from './../../supports/assets/defaultBg.jpg'; 

import {FaTimes, FaFacebook, FaPhoneAlt} from "react-icons/fa";

export default function Home(){


    return(
        <div className="md:flex mt-28">

            <div className="grid grid-cols-1 divide-y">
     
                
                    <div className="default">
                        <div>
                        <p className="text-white text-center font-bold text-5xl m-4">COME LIVE WITH US</p>
                        <p  className="text-white text-center font-regular m-4">Find Your Perfect Place With PWD Properties</p>
                            <div className="p-8 gap-6 bg-[#A4BDBD]/75  shadow-lg rounded-lg">
                                <div className="flex flex-col md:flex-row  space-x-4">
                                    <div className="flex space-x-8 p-2 ">
                                        
                                        <select className="border px-2 py-2 rounded " >
                                            <option >Tangerang</option>
                                            <option>Jakarta</option>
                                            <option>Bandung</option>
                                        </select>
                                    
                                        {/* <Calendar /> */}
                                        <select className="border  px-4 py-2 rounded">
                                            <option>4 Passangers</option>
                                            <option>3 Passangers</option>
                                            <option>2 Passangers</option>
                                        </select>
                                    
                                    
                                        <select className="border px-4 py-2 rounded">
                                            <option>Economy</option>
                                        </select>
                                    </div>
                                        <div className="flex justify-center p-2">
                                            <button className=" rounded-md bg-[#09958C] px-7 py-4 text-white md:uppercase">Start Searching </button>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>

                

                


                <div>
                    <div className="md:flex">

                        <div className="md:shrink-0">
                            <img src={Defaultbg} class="h-48 w-full object-cover md:h-full md:w-48"  alt="Modern building architecture"/>
                        </div>
                        
                        <div className="p-8">
                            
                            <p className="block mt-1 leading-tight font-medium text-black font-bold text-3xl  underline underline-offset-8 decoration-[#09958C]">STAY AT PWD PROPERTIES</p>

                            <p className="mt-2 text-base">Enjoy the peace and quiet of the housing environment around BSD Serpong</p>

                            <p className="mt-2 text-base">Our place have a large bed,  bathroom, a  satellite TV, air conditioning, 
                                                        an additional work area with free internet access and a walk-in closet.You 
                                                        might never want to leave your room. Come and experience our properties!</p>
                            <ol className=' list-disc list-inside text-black font-bold'>
                                <li >Clean,spacious rooms</li>
                                <li>Great friendly neighbor</li>
                                <li>Fun, Relaxing </li>
                            </ol>
                        </div>
                        
                    </div>

                </div>
                
                <div>ghbrtfggtr</div>

            </div>

            

        </div>
    )
}