import Image from 'next/image';

function Content() {
  return (
    <div className="flex flex-col items-center">
      <div className="text-[30px] font-bold mt-[50px]">인사말</div>
      <div className="text-[30px] font-bold mt-[35px] mb-[50px]">
        Serve, Share, Support!
      </div>
      <div className="w-[930px] flex flex-col justify-center text-[17px] gap-[30px] leading-loose">
        <div>
          숭실대학교 중앙 농촌 활동 동아리 땅의사람들은 농촌에서 어르신들을
          도와드리고, 농촌 사회에 젊음과 활력을 불어넣는 교내 유일의 농촌 활동
          동아리입니다.
        </div>
        <div>
          땅의사람들은 매년 농촌으로 떠나, 농번기에 일손을 보태고 지역 사회와
          교류하며 따뜻한 나눔을 실천하고 있습니다. <br /> 또한, 농활뿐만 아니라
          플로깅 활동, 다양한 봉사활동을 통해 환경 보호와 지역 사회 공헌에도
          앞장서고 있습니다.
        </div>
        <div>
          이와 더불어, 동아리방에서는 부원들 간의 다양한 소모임과 교류 활동이
          이루어지며, 함께하는 순간순간이 특별한 추억이 됩니다. 땅의 사람들은
          농촌의 가치를 배우고, 서로의 경험을 나누며, 더불어 성장하는
          공간입니다.
        </div>
        <div>
          따뜻한 마음과 함께할 준비가 되었다면, 땅의 사람들에서 특별한 대학
          생활을 만들어 보세요! 🌱
        </div>
      </div>
      <Image
        src="/about-image/개강총회.jpg"
        alt="땅의사람들 개강총회"
        className="mt-[60px]"
        width={600}
        height={400}
      />
      <div className="text-[17px] mt-[15px] mb-[60px] font-semibold">
        - 땅의사람들 개강총회 -
      </div>
      <div className="w-[930px] h-[330px] bg-gray-200 rounded-lg mb-[80px]">
        <div className="mt-[20px] mb-[15px] ml-[20px] font-bold text-[20px]">
          둘러보기
        </div>
        <div className="flex justify-center gap-[22px]">
          <div className="flex flex-col items-center font-semibold">
            <Image
              src="/about-image/학생회관.jpg"
              alt="학생회관"
              className="w-[280px] h-[200px] mb-[20px] rounded-lg"
              width={280}
              height={200}
            />
            - 학생회관 -
          </div>
          <div className="flex flex-col items-center font-semibold">
            <Image
              src="/about-image/동아리방외.jpg"
              alt="동아리방외"
              className="w-[280px] h-[200px] mb-[20px] rounded-lg"
              width={280}
              height={200}
            />
            - 동아리방 232호 -
          </div>
          <div className="flex flex-col items-center font-semibold">
            <Image
              src="/about-image/동아리방내.jpg"
              alt="동아리방내"
              className="w-[280px] h-[200px] mb-[20px] rounded-lg"
              width={280}
              height={200}
            />
            - 동아리방 내부 -
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
