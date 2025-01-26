'use client';

import Header from '@/components/MainPage/Header';
import Slide from '@/components/MainPage/Slide';

function Home() {
  return (
    <div>
      <Header />
      {/* 슬라이드 */}
      <Slide />
      {/* 푸터 */}
      <footer className="bg-green-700 text-white mt-16">
        <div className="py-16 px-8">
          <div className="flex justify-center space-x-4">
            <a href="#" className="bg-white text-black p-3 rounded-full">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="bg-white text-black p-3 rounded-full">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="bg-white text-black p-3 rounded-full">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <nav className="mt-8">
            <ul className="flex justify-center space-x-4">
              <li>
                <a href="#" className="hover:opacity-100 opacity-70">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 opacity-70">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 opacity-70">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="bg-green-800 py-4 text-center">
          <p className="text-sm">
            &copy; 2025 Your Company. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
export default Home;
