import Link from 'next/link';
import MENU_DATA from './menuData';

interface PCGnbProps {
  openMenuIndex: number | null;
  setOpenMenuIndex: (index: number | null) => void;
}

function PCGnb({ openMenuIndex, setOpenMenuIndex }: PCGnbProps) {
  return (
    <nav className="hidden md:flex items-center space-x-6">
      <ul className="header-gnb flex text-white">
        {MENU_DATA.map((menuData, index) => (
          <li key={index} className="relative">
            {/* 1차 메뉴 */}
            <button
              className="depth-1-link flex items-center justify-center h-[70px] px-8 font-bold text-lg relative"
              onMouseEnter={() => setOpenMenuIndex(index)} // ✅ 메뉴 항목에 직접 마우스를 올려야 열림
            >
              {menuData.menu}
              <span
                className={`absolute left-0 bottom-0 h-1 bg-[#266900] transition-all duration-300 ${
                  openMenuIndex === index ? 'w-full' : 'w-0'
                }`}
              />
            </button>

            {/* 2차 메뉴 (서브메뉴) */}
            <div
              className={`depth-item absolute top-full left-0 w-full overflow-hidden transition-all duration-300 ease-in-out ${
                openMenuIndex === index
                  ? 'opacity-100 translate-y-[0]'
                  : 'opacity-0 translate-y-[-10px] pointer-events-none'
              }`}
              onMouseEnter={() => setOpenMenuIndex(index)} // ✅ 서브메뉴에 들어가도 유지됨
              onMouseLeave={() => setOpenMenuIndex(null)} // ✅ 서브메뉴에서 벗어나면 닫힘
            >
              <ul className="gnb-depth-2 pt-2 h-[180px]">
                {menuData.submenus.map((submenu, subIndex) => (
                  <li key={subIndex}>
                    <Link
                      href={submenu.link}
                      className="depth-2-link block px-2 py-2 text-white hover:text-red-500"
                      onClick={() => setOpenMenuIndex(null)} // ✅ 클릭 시 메뉴 닫힘
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

      {/* ✅ 로그인 버튼 추가 */}
      <Link
        href="/login"
        className="ml-4 px-4 py-2 bg-white text-green-700 font-semibold rounded hover:bg-gray-200 transition"
      >
        LOGIN
      </Link>
    </nav>
  );
}

export default PCGnb;
