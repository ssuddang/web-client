'use client';

import { useState, useEffect, useRef } from 'react';
import { supabase } from '@/lib/supabase';
import PC from './PC';
import Mobile from './Mobile';

function Header() {
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const threshold = 200;
  const [user, setUser] = useState<any>(null);

  // 로그인 여부 확인
  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data?.user);
    };

    getUser();

    // 로그인 상태 변화 감지
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        setUser(session?.user || null);
      },
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  // 로그아웃 처리
  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    if (!isMobile) {
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
    }
  }, [lastScrollY, isMobile]);

  return (
    <header
      ref={headerRef}
      className={`w-full fixed top-0 left-0 z-50 border-b border-[#41ad02] transition-transform duration-500 ease-in-out ${
        openMenuIndex === null
          ? 'bg-green-900 h-[70px]'
          : 'bg-green-900 h-[250px]'
      } ${!isMobile && !isHeaderVisible ? '-translate-y-full' : 'translate-y-0'}`}
      onMouseLeave={() => setOpenMenuIndex(null)}
    >
      <div className="w-full px-[20px] lg:px-[130px] flex justify-between items-center h-[70px]">
        {isMobile ? (
          <Mobile user={user} handleLogout={handleLogout} />
        ) : (
          <PC
            user={user}
            handleLogout={handleLogout}
            openMenuIndex={openMenuIndex}
            setOpenMenuIndex={setOpenMenuIndex}
          />
        )}
      </div>
    </header>
  );
}

export default Header;
