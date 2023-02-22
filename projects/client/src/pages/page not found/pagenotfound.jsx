// React
import React from 'react';

// Import Link Router-Dom
import {Link} from 'react-router-dom';

export default function Pagenotfound(){
    return(
        <div className="md:flex mt-28">

            <div className="max-w-md mx-auto my-28 text-center">
            <p className="text-9xl text-gray-900 font-bold text-center mb-4 cursor-pointer">404</p>    
            <p className="text-4xl text-gray-800 font-bold text-center mb-4 cursor-pointer">Page Not Found</p>
			<p className="mt-4 text-3sm font-medium">The Page you are looking for doesn’t exist or an other error occured. 
            Go to <Link to='/'><span className="text-blue-600/100 underline underline-offset-1 cursor-pointer">Home Page</span></Link></p>
            </div>

        </div>
    )
}