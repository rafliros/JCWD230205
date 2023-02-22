// React
import React from 'react';

// Default BG
import Defaultbg from './../../supports/assets/defaultBg.jpg'; 

export default function Rooms(){
    return(
        <div className="md:flex mt-28">

            <div class="max-w-md mx-auto bg-white border-2 border-indigo-600 rounded-xl shadow-md overflow-hidden md:max-w-2xl m-8">
                <div class="md:flex ">
                    <div class="md:shrink-0">
                    <img src={Defaultbg} class="h-48 w-full object-cover md:h-full md:w-48"  alt="Modern building architecture"/>
                    </div>
                    <div class="p-8">
                    <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
                    <p href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</p>
                    <p class="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}