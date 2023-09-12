import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie-player';
import lottieLogo from '../svg/logo.json';
import Link from 'next/link'
import { useRouter } from 'next/router';
import DarkModeButton from './DarkMode'

export default function Header() {
  const [play, setPlay] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setPlay(true);
  }, []);

  const handleClick = () => {
    router.push('/');
  };
  return (

    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        
            <Lottie
              loop={false}
              animationData={lottieLogo}
              play={play}
              style={{ width: 110, height: 95 }}
              className={"w-10 h-10 text-white p-2"}
              onClick={handleClick} // 클릭 이벤트 핸들러 추가
            />

          <span className="ml-3 text-xl">KWON YEJUN's portfolio</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link className="mr-5 hover:text-gray-900" href="/">Main</Link>
          <Link className="mr-5 hover:text-gray-900" href="/project">Porject</Link>
          <a href="https://keytypers.com" className="mr-5 hover:text-gray-900">KeyTypers</a>
        </nav>
      {/* 버튼 작업 진행 해야 한다. */}
<DarkModeButton />

      </div>
    </header>

  );
}