import Image from 'next/image';

function Title() {
  return (
    <div className="relative text-black h-[300px] flex flex-col items-center justify-end">
      <Image
        src="/title-image/aboutus-title.jpg"
        className="w-full h-full object-cover filter blur-sm"
        alt="지원하기 배경 이미지"
        fill
      />

      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="absolute flex flex-col items-center justify-center h-[200px] text-white">
        <div className="text-4xl font-bold mb-2">Contact</div>
        <div className="mt-2">찾아오시는 길.</div>
      </div>
    </div>
  );
}

export default Title;
