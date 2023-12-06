import { FacebookIcon } from "../assets/icons/FacebookIcon";
import { InstagramIcon } from "../assets/icons/InstagramIcon";
import { TailcastLogo } from "../assets/logos/TailcastLogo";
import { TwitterIcon } from "../assets/icons/TwitterIcon";
import { useState } from "react";
import { motion } from "framer-motion";

import { InvitationModal } from "./InvitationModal";



const footerData = [
  {
    title: "Products",
    items: ["Services", "About Us", "News and Stories", "Roadmap"],
  },
  {
    title: "Important Links",
    items: [
      "Organization Team",
      "Our Journeys",
      "Pricing Plans",
      "Roadmap",
      "Terms & Conditions",
      "Privacy Policy",
    ],
  },
  {
    title: "Company",
    items: ["About Us", "Jobs", "Press", "Contact Us"],
  },
];


export const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <footer>
      <div className="pt-10  lg:pt-20 lg:pb-12 bg-customDarkBg1 radius-for-skewed ">
        <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3 mb-16 lg:mb-0">
              <div className="flex justify-center lg:justify-start items-center grow basis-0">
                <div className="text-white mr-2 text-6xl">
                  <img src="https://serv.husky.nz/spectrum/logo/default.png" width={50} height={50}/>
                </div>
                <div className="text-white font-['Inter'] font-bold text-xl">
                  Spectrum
                </div>
                
              </div>
              
            </div>
            <div className="w-full lg:w-2/3  lg:pl-16 hidden lg:flex flex-wrap justify-between">
              <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold text-white"></h3>
                <ul>
            
                </ul>
              </div>
              <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold text-white">
                </h3>
                <ul>
                
                </ul>
              </div>
              <div className="w-full md:w-1/3 lg:w-auto">
                <div
                  className="custom-button-colored w-64 sm:w-52 h-12 mr-0 sm:mr-4 lg:mr-6 mb-2 sm:mb-0"
                  onClick={() => setIsModalOpen(true)}
                >
                Download
                </div>
                {isModalOpen && (
                  <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
                )}
                <ul>
               
                </ul>
              </div>
              </div>
              </div>
              
              <p className="lg:text-center text-sm text-gray-400 border-t border-[rgb(255,255,255,0.2)] pt-12 mt-16 hidden lg:block">
            Spectrum Website &copy;  <a href="https://www.husky.nz">HuskyNZ</a> |  Spectrum, it's Assets, Images, and Code is Copyrighted &copy; <a href="https://liamsherwin.tech">Liam Sherwin</a> (Unless otherwise specified)
          </p>
        </div>
      </div>
    </footer>
  );
};
