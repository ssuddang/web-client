function Schedule() {
  return (
    <div className="flex flex-col items-center justify-center mt-[80px]">
      <div className="font-bold text-[25px]">2025년 1학기 모집기간</div>
      <div className="flex items-center px-auto mt-[40px]">
        <div className="px-[60px] flex flex-col items-center">
          <div className="font-semibold text-[20px]">02/24(월) ~ 03/07(금)</div>
          <div className="mt-[40px] text-[20px] bg-green-700 text-white px-[15px] py-[10px] rounded-2xl">
            서류 모집
          </div>
        </div>
        <div className="px-[60px] flex flex-col items-center">
          <div className="font-semibold text-[20px]">03/10(월)</div>
          <div className="mt-[40px] text-[20px] bg-green-700 text-white px-[15px] py-[10px] rounded-2xl">
            최종 합격자 발표
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
