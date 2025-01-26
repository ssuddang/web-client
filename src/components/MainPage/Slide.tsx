import { useState, useEffect } from 'react';

function Slide() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // 자동 슬라이드 일시정지 상태 추가

  const slides = [
    '/slide-image/image1.jpg',
    '/slide-image/image2.jpg',
    '/slide-image/image3.jpg',
    '/slide-image/image4.jpg',
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (isPaused) return; // 일시정지 시 타이머 비활성화
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <main className="flex items-center justify-center">
      <div className="max-w-5xl mx-auto">
        {/* 슬라이드 컨테이너 */}
        <div
          className="relative flex items-center justify-center mt-[20px] w-[900px] h-[400px] bg-white rounded-md overflow-hidden"
          onMouseEnter={() => setIsPaused(true)} // 마우스 올리면 일시정지
          onMouseLeave={() => setIsPaused(false)} // 마우스 나가면 재생
        >
          {/* 슬라이드 이미지 */}
          <div className="w-[600px] h-full relative">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`${
                  index === activeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                } transition-opacity duration-500 absolute top-0 left-0 w-full h-full`}
              >
                <img
                  src={slide}
                  alt={`Slide ${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* 이전 슬라이드 버튼 */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white rounded-full p-3 z-10"
            aria-label="Previous Slide"
          >
            &lt;
          </button>

          {/* 다음 슬라이드 버튼 */}
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white rounded-full p-3"
            aria-label="Next Slide"
          >
            &gt;
          </button>
        </div>

        {/* 슬라이드 인덱스 선택 버튼 */}
        <ul className="flex justify-center space-x-2 mt-[20px] mb-[20px]">
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
  );
}

export default Slide;
