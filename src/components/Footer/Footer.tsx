function Footer() {
  return (
    <footer className="bg-green-900 text-white flex flex-col">
      <div className="flex items-center justify-between w-full px-[130px] mx-auto mt-[40px] mb-[10px]">
        <div className="text-[13px] font-thin">
          Copyright ⓒ SSUDDANG All Rights Reserved.
        </div>
        <a href="https://www.instagram.com/ssu_ddang4/" className="w-7 h-7">
          <img src="/icon/icon-instagram.png" />
        </a>
      </div>
      <div className="w-full px-[130px]">
        <hr className="w-full border-t border-white" />
      </div>
      <div className="text-[13px] font-thin">
        <div className="flex justify-between mx-auto w-full px-[130px] mt-[20px] mb-[20px]">
          <div>
            <div className="text-[15px] font-extrabold mb-[5px]">
              땅의사람들
            </div>
            <div>2025 Ver. Created by 박성욱, 정휘도</div>
          </div>

          <div>
            <div className="text-[15px] font-extrabold">회장</div>
            <div>정휘도 010-0000-0000</div>
          </div>
        </div>
        <div className="flex items-end justify-between mx-auto w-full px-[130px] mb-[30px]">
          <div>서울특별시 동작구 상도로 369, 숭실대학교 학생회관 232호</div>
          <div>
            <div className="text-[15px] font-extrabold">부회장</div>
            <div>
              김민석 010-0000-0000
              <br />
              전상하 010-0000-0000
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
