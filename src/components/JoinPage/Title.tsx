import Image from 'next/image';

function Title() {
  return (
    <div className="relative text-black h-[300px] flex flex-col items-center justify-end">
      <Image
        src="/title-image/join-title.jpg"
        className="w-full h-full object-cover filter blur-sm"
        alt="지원하기 배경 이미지"
        fill
      />

      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="absolute flex flex-col items-center justify-center h-[200px] text-white">
        <div className="text-2xl lg:text-4xl font-bold mb-2">지원하기</div>
        <div className="mt-2 lg:text-[16px] text-[13px]">
          땅의사람들에 가입하고 싶으신가요? 언제나 환영입니다.
        </div>
      </div>
    </div>
  );
}

export default Title;
