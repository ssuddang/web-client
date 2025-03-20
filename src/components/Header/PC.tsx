import Link from 'next/link';
import MENU_DATA from './menuData';
import { Dispatch, SetStateAction } from 'react';

interface User {
  id: string;
  email: string;
}

interface PCProps {
  user: User | null;
  handleLogout: () => void;
  openMenuIndex: number | null;
  setOpenMenuIndex: Dispatch<SetStateAction<number | null>>;
}

function PC({ user, handleLogout, openMenuIndex, setOpenMenuIndex }: PCProps) {
  return (
    <>
      <button className="flex items-center text-white font-bold text-[22px] space-x-2">
        <Link href={'/'} className="flex items-center">
          땅의사람들
        </Link>
      </button>
      <nav className="flex items-center space-x-6">
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
        {user ? (
          <button
            onClick={handleLogout}
            className="ml-4 px-4 py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition"
          >
            LOGOUT
          </button>
        ) : (
          <Link
            href="/login"
            className="ml-4 px-4 py-2 bg-white text-green-700 font-semibold rounded hover:bg-gray-200 transition"
          >
            LOGIN
          </Link>
        )}
      </nav>
    </>
  );
}

export default PC;
