import Link from 'next/link';
import MENU_DATA from './menuData';

interface MobileGnbProps {
  isMobileOpen: boolean;
  openMenuIndex: number | null;
  handleMobileAccordion: (index: number) => void;
  closeMobileMenu: () => void;
}

function MobileGnb({
  isMobileOpen,
  openMenuIndex,
  handleMobileAccordion,
  closeMobileMenu,
}: MobileGnbProps) {
  return (
    <div
      className={`mobile-gnb fixed top-[90px] left-0 w-full h-[calc(100vh-90px)] bg-white transform transition-transform duration-500 ${
        isMobileOpen ? 'translate-x-0' : 'translate-x-full'
      } text-black`}
    >
      <ul className="gnb-depth-1">
        {MENU_DATA.map((menuData, index) => (
          <li
            key={index}
            className={`depth-1 ${
              openMenuIndex === index ? 'open' : ''
            } border-b border-gray-300`}
          >
            <button
              className="depth-1-link flex justify-between items-center px-6 py-4 font-bold w-full"
              onClick={() => handleMobileAccordion(index)}
            >
              <span>{menuData.menu}</span>
              <span className="text-xs">
                {openMenuIndex === index ? '▲' : '▼'}
              </span>
            </button>
            <ul
              className={`gnb-depth-2 overflow-hidden transition-all duration-300 ${
                openMenuIndex === index
                  ? 'max-h-40 opacity-100'
                  : 'max-h-0 opacity-0'
              }`}
            >
              {menuData.submenus.map((submenu, subIndex) => (
                <li key={subIndex}>
                  <Link
                    href={submenu.link}
                    className="depth-2-link block px-6 py-2 text-gray-600"
                    onClick={closeMobileMenu}
                  >
                    {submenu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MobileGnb;
