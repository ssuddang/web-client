function Title() {
  return (
    <div className="relative text-black h-[300px] flex flex-col items-center justify-end">
      <img
        src="/title-image/community-title.jpg"
        className="w-full h-full object-cover filter blur-sm"
        alt="지원하기 배경 이미지"
      />

      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="absolute flex flex-col items-center justify-center h-[200px] text-white">
        <div className="text-4xl font-bold mb-2">공지사항</div>
        <div className="mt-2">땅의사람들 관련 공지사항들을 확인해보세요!</div>
      </div>
    </div>
  );
}

export default Title;
