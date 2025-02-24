import { useState, useEffect } from 'react';

function Slide() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    '/slide-image/image1.jpg',
    '/slide-image/image2.jpg',
    '/slide-image/image3.jpg',
    '/slide-image/image4.jpg',
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex items-center justify-center">
      <div className="w-screen h-screen overflow-hidden flex flex-col justify-end top-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-2000 ease-in-out ${
              index === activeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            style={{ transition: 'opacity 2s ease-in-out' }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-2000"></div>

            <img
              src={slide}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover filter blur-sm"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-white text-[55px] font-extrabold">
                Soongsil University
              </div>
              <div className="text-white text-[55px] font-extrabold">
                People of the Land
              </div>
              <div className="text-white text-[20px] font-medium mt-[20px]">
                숭실대학교 중앙 농촌활동 동아리 땅의사람들
              </div>
            </div>
          </div>
        ))}

        <ul className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {slides.map((_, index) => (
            <li key={index}>
              <button
                onClick={() => setActiveSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeSlide
                    ? 'bg-green-700 scale-110'
                    : 'bg-gray-800 opacity-70'
                }`}
              ></button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Slide;
