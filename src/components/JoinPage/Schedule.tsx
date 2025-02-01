function Schedule() {
  return (
    <div className="flex flex-col items-center justify-center mt-[80px]">
      <div className="font-bold text-[25px]">2024년 2학기</div>
      <div className="flex items-center px-auto mt-[40px]">
        <div className="px-[60px] flex flex-col items-center">
          <div className="font-semibold text-[20px]">8/26(월) ~ 9/7(토)</div>
          <div className="mt-[40px] text-[20px] bg-green-700 text-white px-[15px] py-[10px] rounded-2xl">
            서류 모집
          </div>
        </div>
        <div className="px-[60px] flex flex-col items-center">
          <div className="font-semibold text-[20px]">9/8(일)</div>
          <div className="mt-[40px] text-[20px] bg-green-700 text-white px-[15px] py-[10px] rounded-2xl">
            최종 합격자 발표
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
