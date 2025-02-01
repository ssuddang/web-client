'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import PCGnb from './PCGnb';
import MobileGnb from './MobileGnb';
import MobileToggleButton from './MobileToggleButton';

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
      className={`fixed top-0 left-0 w-full z-50 border-b border-[#41ad02] transition-all duration-500 text-black ${
        isMobileOpen
          ? 'bg-gray-100'
          : isHeaderDropdownOpen
            ? 'bg-[#41ad02] h-[300px]'
            : 'bg-[#ffffff] h-[90px]'
      }`}
    >
      <div className="header-inner flex justify-between items-center h-[90px] px-6 md:px-12">
        <div className="header-logo">
          <Image src="/logo.png" alt="Logo" width={100} height={40} priority />
        </div>
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
