import { useState, useEffect } from 'react';

function Slide() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

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
    if (isPaused) return;
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <main className="flex items-center justify-center">
      <div className="max-w-5xl mx-auto">
        <div
          className="relative flex items-center justify-center mt-[20px] w-[900px] h-[400px] bg-white rounded-md overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
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

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white rounded-full p-3 z-10"
            aria-label="Previous Slide"
          >
            &lt;
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white rounded-full p-3"
            aria-label="Next Slide"
          >
            &gt;
          </button>
        </div>

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
