import Image from 'next/image';

function Footer() {
  return (
    <footer className="bg-green-900 text-white flex flex-col">
      <div className="flex items-center justify-between w-full px-[20px] lg:px-[130px] mx-auto mt-[40px] mb-[10px]">
        <div className="text-[15px] font-extrabold mb-[5px]">땅의사람들</div>

        <a
          href="https://www.instagram.com/ssu_ddang4/"
          className="flex items-center justify-center gap-1"
        >
          <Image
            src="/icon/icon-instagram.png"
            width={20}
            height={20}
            alt="인스타그램"
          />
        </a>
      </div>
      <div className="w-full px-[20px] lg:px-[130px]">
        <hr className="w-full border-t border-white" />
      </div>
      <div className="text-[13px] font-thin lg:flex justify-between px-[20px] lg:px-[130px] mt-[20px] lg:mb-[20px] mb-[40px]">
        <div className="flex flex-col lg:justify-between space-y-8">
          <div>
            <div>서울특별시 동작구 상도로 369, 숭실대학교 학생회관 232호</div>
          </div>
          <div>
            <div>2025 Ver. Created by 박성욱, 정휘도</div>
            <div className="mt-1">
              Copyright ⓒ 땅의사람들 All Rights Reserved.
            </div>
          </div>
        </div>
        <div className="lg:space-y-3 space-y-8 mt-8 lg:mt-0">
          <div className="bg-white/10 rounded-xl p-3">
            <div className="text-[15px] font-extrabold">회장단</div>
            <div className="flex gap-[38px]">
              <div className="font-medium">회장</div>
              <div>정휘도 010-2551-2861</div>
            </div>
            <div className="flex gap-[25px]">
              <div className="font-medium">부회장</div>
              <div>김민석 010-3958-0319</div>
            </div>
          </div>
          <div className="bg-white/10 rounded-xl p-3">
            <div className="text-[15px] font-extrabold">부장단</div>
            <div className="flex gap-[12px]">
              <div className="font-medium">홍보부장</div>
              <div>박경민 010-5746-6493</div>
            </div>
            <div className="flex gap-[12px]">
              <div className="font-medium">문화부장</div>
              <div>김시현 010-6671-9111</div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="text-[13px] font-thin">
        <div className="flex justify-between mx-auto w-full px-[20px] lg:px-[130px] mt-[20px] mb-[20px]">
          <div>
            <div>서울특별시 동작구 상도로 369, 숭실대학교 학생회관 232호</div>
          </div>

          <div>
            <div className="text-[15px] font-extrabold">회장</div>
            <div>정휘도 010-2551-2861</div>
          </div>
        </div>
        <div className="flex items-end justify-between mx-auto w-full px-[20px] lg:px-[130px] mb-[30px]">
          <div>
            <div>2025 Ver. Created by 박성욱, 정휘도</div>
            <div className="mt-1">
              Copyright ⓒ 땅의사람들 All Rights Reserved.
            </div>
          </div>
          <div className="flex flex-col justify-end">
            <div className="text-[15px] font-extrabold">부회장</div>
            <div>
              김민석 010-3958-0319
              <br />
              전상하 010-8214-9040
            </div>
          </div>
        </div>
      </div> */}
    </footer>
  );
}

export default Footer;
