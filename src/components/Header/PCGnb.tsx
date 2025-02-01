import Link from 'next/link';
import MENU_DATA from './menuData';

interface PCGnbProps {
  openMenuIndex: number | null;
  setOpenMenuIndex: (index: number | null) => void;
}

function PCGnb({ openMenuIndex, setOpenMenuIndex }: PCGnbProps) {
  return (
    <nav className="hidden md:block">
      <ul className="header-gnb flex space-x-8 text-black">
        {MENU_DATA.map((menuData, index) => (
          <li
            key={index}
            className="relative"
            onMouseEnter={() => setOpenMenuIndex(index)}
            onMouseLeave={() => setOpenMenuIndex(null)}
          >
            <button className="depth-1-link flex items-center h-[90px] px-4 font-bold text-lg relative">
              {menuData.menu}
              <span
                className={`absolute left-0 bottom-0 h-1 bg-[#266900] transition-all duration-300 ${
                  openMenuIndex === index ? 'w-full' : 'w-0'
                }`}
              />
            </button>
            <div
              className={`depth-item absolute top-full left-0 w-full overflow-hidden transition-all duration-300 ${
                openMenuIndex === index ? 'opacity-100' : 'opacity-0'
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
  );
}
export default PCGnb;
