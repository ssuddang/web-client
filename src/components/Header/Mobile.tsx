import { useState } from 'react';
import Link from 'next/link';
import MENU_DATA from './menuData';
import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/outline';

interface User {
  id: string;
  email: string;
}

interface MobileProps {
  user: User | null;
  handleLogout: () => void;
}

function Mobile({ user, handleLogout }: MobileProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  const toggleMenu = (index: number) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center bg-green-900">
        <Link href={'/'} className="text-white font-bold text-[22px]">
          땅의사람들
        </Link>
        <button
          className="text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Bars4Icon className="w-8 h-8" />
        </button>
      </div>

      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <nav
        className={`fixed top-0 right-0 w-[70%] h-screen bg-green-950 transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button className="text-white" onClick={() => setIsMenuOpen(false)}>
            <XMarkIcon className="w-8 h-8" />
          </button>
        </div>
        <ul className="text-center text-white mt-[30px]">
          {MENU_DATA.map((menuData, index) => (
            <li key={index}>
              <button
                className={`text-xl font-bold block py-5 w-full text-left px-6 transition-colors duration-300 ${
                  activeMenu === index ? 'text-red-600' : 'text-white'
                }`}
                onClick={() => toggleMenu(index)}
              >
                {menuData.menu}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out bg-green-900 font-semibold ${
                  activeMenu === index
                    ? 'max-h-40 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                {menuData.submenus.length > 0 && (
                  <ul className="border-t-2 border-red-600">
                    {menuData.submenus.map((submenu, subIndex) => (
                      <li
                        key={subIndex}
                        className="border-b border-green-800 last:border-none py-1"
                      >
                        <Link
                          href={submenu.link}
                          className="text-lg block py-2 px-6 hover:text-red-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {submenu.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ul>
        <div className="text-center mt-[100px]">
          {user ? (
            <button
              onClick={() => {
                handleLogout();
                setIsMenuOpen(false);
              }}
              className="px-6 py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition"
            >
              LOGOUT
            </button>
          ) : (
            <Link
              href="/login"
              className="px-6 py-2 bg-white text-green-700 font-semibold rounded hover:bg-gray-200 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              LOGIN
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Mobile;
