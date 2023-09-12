import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export default function DarkModeButton() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  // When mounted on client, now we can show the UI
  useEffect(() => {
    setMounted(true)
  }, []);

  if (!mounted) return null;
  // 전체 컴포넌트 내의 텍스트에 스타일 적용
  const textColorClass = theme === 'dark' ? 'text-orange-500' : 'text-blue-500';

  return (
    <>
      <button
        className={`inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 ${theme === 'dark' ? 'hover:text-orange-500' : 'hover:text-blue-500'
          }
          ${textColorClass}
          `}

        type="button"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >


        {/* light 모드 일 때 */}
        {theme === "dark" && (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>)}



        {theme === "light" && (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>)}


        <path d="M5 12h14M12 5l7 7-7 7"></path>

      </button >

    </>

  );
}