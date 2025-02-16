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
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderDropdownOpen = openMenuIndex !== null;

  useEffect(() => {
    if (!isMobileOpen) return;
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMobileOpen(false);
        setOpenMenuIndex(null);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileOpen]);

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
      className={`w-full fixed top-0 left-0 z-50 border-b border-[#41ad02] transition-all duration-500 text-black ${
        isMobileOpen
          ? 'bg-gray-100'
          : isHeaderDropdownOpen
            ? 'bg-green-900 h-[300px]'
            : 'bg-green-900 h-[90px]'
      }`}
    >
      <div className="w-full px-[130px] header-inner flex justify-between items-center h-[90px]">
        <button className="flex items-center text-white font-bold text-[22px] space-x-2">
          <Image
            src="/header-image/tomato.png"
            alt="땅의사람들 로고"
            width={50}
            height={50}
          />
          <Link href={'/'}>땅의사람들</Link>
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
