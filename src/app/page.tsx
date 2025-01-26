'use client';

import Header from '@/components/MainPage/Header';
import { useState } from 'react';

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    '/image1.jpg', // 이미지 경로 예시
    '/image2.jpg',
    '/image3.jpg',
    '/image4.jpg',
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div>
      <Header />

      {/* 슬라이드 */}
      <main className="mt-24">
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`${
                  index === activeSlide ? 'opacity-100' : 'opacity-0'
                } transition-opacity duration-500 absolute top-0 left-0 w-full h-full`}
              >
                <img src={slide} alt={`Slide ${index}`} className="w-full" />
              </div>
            ))}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white rounded-full p-2"
            >
              &lt;
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white rounded-full p-2"
            >
              &gt;
            </button>
          </div>
          <ul className="flex justify-center space-x-2 mt-4">
            {slides.map((_, index) => (
              <li key={index}>
                <button
                  onClick={() => setActiveSlide(index)}
                  className={`w-4 h-4 rounded-full ${
                    index === activeSlide ? 'bg-gray-800' : 'bg-gray-400'
                  }`}
                ></button>
              </li>
            ))}
          </ul>
        </div>
      </main>

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
