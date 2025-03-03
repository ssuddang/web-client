import Image from 'next/image';

function Title() {
  return (
    <div className="relative text-black h-[300px] flex flex-col items-center justify-end">
      <Image
        src="/title-image/community-title.jpg"
        className="w-full h-full object-cover filter blur-sm"
        alt="지원하기 배경 이미지"
        fill
      />

      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="absolute flex flex-col items-center justify-center h-[200px] text-white">
        <div className="text-2xl lg:text-4xl font-bold mb-2">캘린더</div>
        <div className="mt-2 lg:text-[16px] text-[13px]">
          땅의사람들의 일정을 확인할 수 있는 캘린더입니다.
        </div>
      </div>
    </div>
  );
}

export default Title;
