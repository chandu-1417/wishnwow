import React from 'react';
import { FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#F0DFFF] text-gray-700 tracking-wide mt-auto">
      <div className="flex flex-col md:flex-row ml-10 gap-4 text-sm pt-5">
        {/* Brand Section */}
        <div className="md:basis-1/4 flex flex-col mt-2 md:ml-4">
          <a href="/" className="text-lg font-semibold text-gray-700">
            Wish 'n <span className="text-[#540C97]">Wow</span>
          </a>
          <div className="flex gap-4 mt-4">
            <a href="https://www.instagram.com/binge_n_bash/" target="_blank" rel="noreferrer">
              <svg className="w-6 h-6 text-[#540C97]" viewBox="0 0 24 24">
                <path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/@bingenbash" target="_blank" rel="noreferrer">
              <svg className="w-6 h-6 text-[#540C97]" viewBox="0 0 24 24">
                <path fill="currentColor" d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61550343193803" target="_blank" rel="noreferrer">
              <svg className="w-6 h-6 text-[#540C97]" viewBox="0 0 24 24">
                <path fill="currentColor" d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Navigation Links 1 */}
        <div className="md:basis-1/4 flex flex-col md:justify-center md:gap-2 gap-1 md:-ml-10 text-base font-medium">
          <a href="/" className="text-gray-800 hover:text-[#540C97]">Home</a>
          <a href="/book-now" className="text-gray-800 hover:text-[#540C97]">Book Now</a>
          <a href="/decorAddOns" className="text-gray-800 hover:text-[#540C97]">Add-ons</a>
          <a href="/about-us" className="text-gray-800 hover:text-[#540C97]">About Us</a>
        </div>

        {/* Navigation Links 2 */}
        <div className="md:basis-1/4 flex flex-col md:justify-center md:gap-2 gap-1 text-base font-medium">
          <a href="/gallery" className="text-gray-800 hover:text-[#540C97]">Gallery</a>
          <a href="/refund-policy" className="text-gray-800 hover:text-[#540C97]">Refund Policy</a>
          <a href="/refund-policy" className="text-gray-800 hover:text-[#540C97]">Privacy Policy</a>
          <a href="/refund-policy" className="text-gray-800 hover:text-[#540C97]">Terms and Conditions</a>
        </div>

        {/* Contact Section */}
        <div className="md:basis-1/5 flex flex-col">
          <div className="font-medium text-base">Contact Us:</div>
          <ul className="list-disc list-outside ml-4">
            <li className="mt-2">401, Meta towers, Hitec city<br/>Madhapur, Hyderabad - 500081</li>
            <li className="mt-2 hidden md:block">
              <a href="https://wa.me/919948954545?text=Hi%2C%20I%20want%20to%20book%20the%20slot" 
                 target="_blank" 
                 rel="noreferrer" 
                 className="hover:text-[#540C97]">
                +91 XXXXXXXXXX
              </a>
            </li>
            <li className="mt-2 md:hidden">
              <a href="tel:+91 9948954545" className="hover:text-[#540C97]">+91 XXXXXXXXXX</a>
            </li>
            <li className="mt-2">admin@wishnwow.com</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="ml-10 md:ml-14 pb-2 mt-2 text-sm font-medium">
        2023 © Wish 'n Wow, All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;