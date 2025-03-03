function FAQ() {
  return (
    <div className="mt-[100px] flex flex-col items-center">
      <div className="font-bold text-[25px]">FAQ</div>
      <div className="mt-[25px] mb-[50px]  w-full lg:w-[900px] px-[20px]">
        <div className="text-white">
          <div className="bg-green-700 my-[15px] px-[20px] lg:px-[40px] py-[20px] rounded-2xl">
            <div className="mb-[10px] font-semibold lg:text-[17px]">
              Q. 동아리 땅의사람들은 어떤 활동을 하나요?
            </div>
            <div className="lg:text-[16px] text-[14px]">
              A. 개강총회, 조모임 활동과 창립제, 종강총회와 농촌 봉사 활동이
              예정되어 있습니다. 그 외에도 각종 번개 모임과 친목 행사 등 다양한
              활동들이 여러분을 기다리고 있습니다. 모든 활동은 필수가 아니며
              부원분들이 원하는 활동만 자율적으로 부담없이 참여 가능합니다.
            </div>
          </div>
          <div className="bg-green-700 my-[15px] px-[20px] lg:px-[40px] py-[20px] rounded-2xl">
            <div className="mb-[10px] font-semibold lg:text-[17px]">
              Q. 내성적인 사람도 지원 가능한가요?
            </div>
            <div className="lg:text-[16px] text-[14px]">
              A. 물론입니다! 동아리 활동에 열정만 있다면 언제나 환영입니다.
              땅의사람들 동아리는 모두가 즐겁고 화목한 분위기를 지향합니다.
            </div>
          </div>
          <div className="bg-green-700 my-[15px] px-[20px] lg:px-[40px] py-[20px] rounded-2xl">
            <div className="mb-[10px] font-semibold lg:text-[17px]">
              Q. 동아리방은 어디에 있나요?
            </div>
            <div className="lg:text-[16px] text-[14px]">
              A. 학생회관 232호에 있습니다. 두 개의 침대와 깨끗한 침구,
              분위기있는 네온사인과 냉장고, 전자레인지, 고데기, 드라이기 등
              없는게 없는 동방입니다! 항상 상주하고 있는 재미있는 부원들과
              임원진까지!
            </div>
          </div>
        </div>
      </div>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSeSQPqUnG4wOO2GWkyrgCAJ9IiK2y8aSx1WwzpZpK5HGYL-xg/viewform">
        <button className="bg-red-600 text-white px-5 py-3 rounded-3xl mb-[70px]">
          지원하기
        </button>
      </a>
    </div>
  );
}

export default FAQ;
