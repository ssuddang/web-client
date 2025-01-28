// components/Header.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";


const Header: React.FC = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [isHeaderDropdownOpen, setHeaderDropdown] = useState(false);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // PC 메뉴 열기/닫기
  const handleMouseEnter = (index: number) => {
    setOpenMenuIndex(index);
  };

  const handleMouseLeave = () => {
    setOpenMenuIndex(null);
  };

  // 모바일 메뉴 열기/닫기
  const toggleMobileMenu = () => {
    setIsMobileOpen((prev) => !prev);
  };

  // 모바일 서브메뉴 아코디언
  const handleMobileAccordion = (index: number) => {
    setOpenMenuIndex((prev) => (prev === index ? null : index));
  };

  return (
    <header
  ref={headerRef}
  className={`fixed top-0 left-0 w-full z-50 border-b border-[#41ad02] transition-all duration-500 ${
    isMobileOpen 
      ? "bg-gray-100"
      : isHeaderDropdownOpen
      ? "bg-[#41ad02] h-[300px]" // 슬라이드 색상상
      : "bg-[#ffffff] h-[90px]" // 기본색상상
  }`}
>
      <div className="header-inner flex justify-between items-center h-[90px] px-6 md:px-12">
        {/* 로고 */}
        <div className="header-logo">
          <img src="/logo.png" alt="Logo" className="h-10" />
        </div>

       {/* PC GNB */}
       <nav className="hidden md:block">
          <ul className="header-gnb flex space-x-8">
            {[
              {
                menu: "About Us",
                submenus: [
                  { name: "동아리 소개", link: "/about" },
                  { name: "조직", link: "/team" },
                  { name: "CI", link: "/ci" },
                  { name: "Contact", link: "/contact" },
                ],
              },
              {
                menu: "커뮤니티",
                submenus: [
                  { name: "공지사항", link: "/notice" },
                  { name: "캘린더", link: "/calendar" },
                  { name: "주요 활동", link: "/activities" },
                ],
              },
              {
                menu: "지원하기",
                submenus: [{ name: "지원하기", link: "/apply" }],
              },
            ].map((menuData, index) => (
              <li
                key={index}
                className="relative"
                onMouseEnter={() => {
                  handleMouseEnter(index);
                  setHeaderDropdown(true); // 헤더 드롭다운 활성화
                }}
                onMouseLeave={() => {
                  handleMouseLeave();
                  setHeaderDropdown(false); // 헤더 드롭다운 비활성화
                }}
              >
                {/* Depth-1 메뉴 */}
                <button className="depth-1-link flex items-center h-[90px] px-4 font-bold text-lg relative">
                  {menuData.menu}
                  {/* 밑줄 효과 */}
                  <span
                    className={`absolute left-0 bottom-0 h-1 bg-[#266900] transition-all duration-300 ${
                      openMenuIndex === index ? "w-full" : "w-0"
                    }`}
                  />
                </button>

                {/* 서브메뉴 */}
                <div
                  className={`depth-item absolute top-full left-0 w-full overflow-hidden transition-all duration-300 ${
                    openMenuIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <ul className="gnb-depth-2 py-2 bg-transparent shadow-lg">
                    {menuData.submenus.map((submenu, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          href={submenu.link}
                          className="depth-2-link block px-4 py-2 text-gray-800 hover:text-[#E6AFAF] hover:bg-gray-100"
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


        {/* 모바일 GNB 버튼 */}
        <button
          className="sidebar-btn md:hidden relative w-10 h-10"
          onClick={toggleMobileMenu}
        >
          <span
            className={`block absolute w-6 h-0.5 bg-black transition-all duration-300 ${
              isMobileOpen ? "rotate-45 top-4" : "top-3"
            }`}
          ></span>
          <span
            className={`block absolute w-6 h-0.5 bg-black transition-all duration-300 ${
              isMobileOpen ? "opacity-0" : "top-4"
            }`}
          ></span>
          <span
            className={`block absolute w-6 h-0.5 bg-black transition-all duration-300 ${
              isMobileOpen ? "-rotate-45 top-4" : "top-5"
            }`}
          ></span>
        </button>
      </div>

      {/* 모바일 GNB 메뉴 */}
      <div
  className={`mobile-gnb fixed top-[90px] left-0 w-full h-[calc(100vh-90px)] bg-white transform transition-transform duration-500 ${
    isMobileOpen ? "translate-x-0" : "translate-x-full"
  }`}
>
  <ul className="gnb-depth-1">
    {[
      {
        menu: "About Us",
        submenus: ["동아리 소개", "조직", "CI", "Contact"],
      },
      {
        menu: "커뮤니티",
        submenus: ["공지사항", "캘린더", "주요 활동"],
      },
      {
        menu: "지원하기",
        submenus: ["지원하기"],
      },
    ].map((menuData, index) => (
      <li
        key={index}
        className={`depth-1 ${
          openMenuIndex === index ? "open" : ""
        } border-b border-gray-300`}
      >
        <a
          href="#"
          className="depth-1-link flex justify-between items-center px-6 py-4 font-bold"
          onClick={(e) => {
            e.preventDefault();
            handleMobileAccordion(index);
          }}
        >
          <span>{menuData.menu}</span>
          <span className="text-xs">
            {openMenuIndex === index ? "▲" : "▼"}
          </span>
        </a>
        <ul
          className={`gnb-depth-2 overflow-hidden transition-all duration-300 ${
            openMenuIndex === index ? "max-h-40" : "max-h-0"
          }`}
        >
          {menuData.submenus.map((submenu, subIndex) => (
            <li key={subIndex}>
              <a
                href="#"
                className="depth-2-link block px-6 py-2 text-gray-600"
              >
                {submenu}
              </a>
            </li>
          ))}
        </ul>
      </li>
    ))}
  </ul>
</div>

    </header>
  );
};

export default Header;


