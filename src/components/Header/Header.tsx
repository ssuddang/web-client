'use client';

import { useState, useEffect, useRef } from 'react';
import { supabase } from '@/lib/supabase';

import PC from './PC';
import Mobile from './Mobile';

import { User } from '@supabase/auth-js';

interface SupabaseUser extends User {
  email: string;
}

function Header() {
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const threshold = 200;
  const [user, setUser] = useState<SupabaseUser | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (data?.user) {
        setUser({
          ...data.user,
          email: data.user.email ?? '',
        });
      }
    };

    getUser();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        if (session?.user) {
          setUser({
            ...session.user,
            email: session.user.email ?? '',
          });
        } else {
          setUser(null);
        }
      },
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

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
