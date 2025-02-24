'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MENU_DATA from './menuData';

function Header() {
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const threshold = 200;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > threshold && currentScrollY > lastScrollY) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      ref={headerRef}
      className={`w-full fixed top-0 left-0 z-50 border-b border-[#41ad02] transition-transform duration-500 ease-in-out ${
        openMenuIndex === null
          ? 'bg-green-900 h-[70px]'
          : 'bg-green-900 h-[250px]'
      } ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}`}
      onMouseLeave={() => setOpenMenuIndex(null)}
    >
      <div className="w-full px-[130px] flex justify-between items-center h-[70px]">
        <button className="flex items-center text-white font-bold text-[22px] space-x-2">
          <Link href={'/'} className="flex items-center">
            <Image
              src="/header-image/tomato.png"
              alt="땅의사람들 로고"
              width={50}
              height={50}
            />
            땅의사람들
          </Link>
        </button>
        <nav>
          <ul className="header-gnb flex text-white">
            {MENU_DATA.map((menuData, index) => (
              <li key={index} className="relative">
                <button
                  className="depth-1-link flex items-center justify-center h-[70px] px-8 font-bold text-lg relative"
                  onMouseEnter={() => setOpenMenuIndex(index)}
                >
                  {menuData.menu}
                  <span
                    className={`absolute left-0 bottom-0 h-1 bg-[#266900] transition-all duration-300 ${
                      openMenuIndex === index ? 'w-full' : 'w-0'
                    }`}
                  />
                </button>

                <div
                  className={`depth-item absolute top-full left-0 w-full overflow-hidden transition-all duration-300 ease-in-out ${
                    openMenuIndex === index
                      ? 'opacity-100 translate-y-[0]'
                      : 'opacity-0 translate-y-[-10px] pointer-events-none'
                  }`}
                  onMouseEnter={() => setOpenMenuIndex(index)}
                  onMouseLeave={() => setOpenMenuIndex(null)}
                >
                  <ul className="gnb-depth-2 pt-2 h-[180px]">
                    {menuData.submenus.map((submenu, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          href={submenu.link}
                          className="depth-2-link block px-2 py-2 text-white hover:text-red-500"
                          onClick={() => setOpenMenuIndex(null)}
                        >
                          {submenu.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
