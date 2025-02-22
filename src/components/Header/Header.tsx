'use client';

import { useState, useEffect, useRef } from 'react';
import PCGnb from './PCGnb';
import MobileGnb from './MobileGnb';
import MobileToggleButton from './MobileToggleButton';
import Link from 'next/link';
import Image from 'next/image';

function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const threshold = 200;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > threshold && currentScrollY > lastScrollY) {
        setIsHeaderVisible(false); // 스크롤 내릴 때 헤더 숨김
      } else {
        setIsHeaderVisible(true); // 스크롤 올릴 때 헤더 표시
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileOpen((prev) => {
      if (prev) {
        setOpenMenuIndex(null);
      }
      return !prev;
    });
  };

  const handleMobileAccordion = (index: number) => {
    setOpenMenuIndex((prev) => (prev === index ? null : index));
  };

  function closeMobileMenu() {
    setIsMobileOpen(false);
    setOpenMenuIndex(null);
  }

  return (
    <header
      ref={headerRef}
      className={`w-full fixed top-0 left-0 z-50 border-b border-[#41ad02] transition-transform duration-500 ease-in-out text-black ${
        isMobileOpen
          ? 'bg-gray-100'
          : openMenuIndex !== null
            ? 'bg-green-900 h-[250px]'
            : 'bg-green-900 h-[70px]'
      } ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="w-full px-[130px] header-inner flex justify-between items-center h-[70px]">
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

        <PCGnb
          openMenuIndex={openMenuIndex}
          setOpenMenuIndex={setOpenMenuIndex}
        />
        <MobileToggleButton
          isMobileOpen={isMobileOpen}
          toggleMobileMenu={toggleMobileMenu}
        />
      </div>
      <MobileGnb
        isMobileOpen={isMobileOpen}
        openMenuIndex={openMenuIndex}
        handleMobileAccordion={handleMobileAccordion}
        closeMobileMenu={closeMobileMenu}
      />
    </header>
  );
}

export default Header;
