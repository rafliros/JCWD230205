// React
import React from "react";

// Logo-1
import Logo1 from '../supports/assets/logo-1.png'; 

// Icon
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaPhoneAlt } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#09958C]">
      <div className="container mx-auto px-3 text-white ">

      <div className="flex mt-2  ">
          <div className="mt-8  sm:mt-5 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
              <div className="flex flex-col ">
                  <span className="ml-7"><img  src={Logo1} width='96px' height='96px' /></span>
                  <span className="my-2 font-medium">Hospitality and Comfort <br />are our watchwords</span>
              </div>
              <div className="flex flex-col">
                  <span className="font-bold  uppercase mt-4 md:mt-0 mb-1">Contact Us</span>
                  <span className="flex items-center  md:justify-start my-2 gap-2 font-medium">
                    <FaPhoneAlt size={18}/> 08518602 9439</span>
                  <span className="flex items-center  md:justify-start my-1 gap-2 font-medium">
                    <MdEmail size={18}/>support@pwd.com</span>
                  <span className="flex items-center  md:justify-start my-1 gap-2 font-medium">
                    <MdLocationOn size={20}/>Jl. Foresta Raya, Tangerang, Banten</span>
              </div>
              <div className="flex flex-col">
                  <span className="font-bold uppercase mt-4 md:mt-0 mb-1 ">Follow Us</span>
                  <div className="flex gap-5">
                  <span className="my-2"><RiWhatsappFill size={24} /></span>
                  <span className="my-2"><AiFillInstagram size={24}/></span>
                  <span className="my-2"><FaFacebookF size={24}/></span>
                  </div>
              </div>
          </div>
      </div>
    </div>

    </footer>
  );
};

export default Footer;