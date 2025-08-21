import Image from 'next/image';

function Poster() {
  return (
    <div>
      {/* <div className="flex w-full items-center lg:px-[130px] px-[20px]"> */}
      {/* <hr className="w-full border-t border-black" />
        <div className="flex justify-center lg:w-[300px] w-[400px] font-semibold">
          이전 모집 공고
        </div> */}
      {/* <hr className="w-full border-t border-black" /> */}
      {/* </div> */}
      <div className="flex flex-col justify-center items-center">
        <Image
          src="/join-image/recruit2025-2.jpg"
          className="lg:w-[500px] lg:h-[500px] mt-[30px] mb-[10px] px-[20px]"
          alt="지원 포스터"
          width={500}
          height={500}
        />
        <div>- 땅의사람들 2025년 2학기 지원 포스터 -</div>
      </div>
    </div>
  );
}

export default Poster;
