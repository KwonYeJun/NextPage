import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie-player';
import lottieLogo from '../svg/footerlogo.json';


export default function Footer() {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    setPlay(true);
  }, []);

  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <Lottie
            loop
            animationData={lottieLogo}
            play={play}
            style={{ width: 110, height: 70 }}
            className={"w-50 h-10 text-white p-0"} 
           
          />
          <span className="ml-3 text-xl">I'm KeyFluencer</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          <a href="https://blog.naver.com/sag7002" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">console.log("This is Dev-Log") </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="text-gray-500">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
         
          <a className="ml-3 text-gray-500">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          
        </span>
      </div>
    </footer>
  );
}