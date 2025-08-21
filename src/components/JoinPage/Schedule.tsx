function Schedule() {
  return (
    <div className="flex flex-col items-center justify-center mt-[80px]">
      <div className="font-bold text-[25px]">2025년 2학기 모집기간</div>
      <div className="flex flex-col lg:flex-row items-center px-auto mt-[40px]">
        <div className="mx-[50px] flex flex-col items-center lg:mt-0 bg-green-100 rounded-xl p-4 w-[300px] lg:bg-white">
          <div className="font-semibold text-[20px]">08/18(월) ~ 08/31(일)</div>
          <div className="mt-[40px] text-[20px] bg-green-700 text-white px-[15px] py-[10px] rounded-2xl">
            서류 모집
          </div>
        </div>
        <div className="mx-[50px] flex flex-col items-center mt-[40px] lg:mt-0 bg-green-100 rounded-xl p-4 w-[300px] lg:bg-white">
          <div className="font-semibold text-[20px]">09/05(금)</div>
          <div className="mt-[40px] text-[20px] bg-green-700 text-white px-[15px] py-[10px] rounded-2xl">
            최종 합격자 발표
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
