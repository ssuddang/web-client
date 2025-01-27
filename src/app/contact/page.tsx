function ContactPage() {
  return (
    <div>
      <div className="bg-green-300 h-[200px] flex flex-col items-center justify-center">
        <div className="text-4xl font-bold mb-2">Contact</div>
        <div className="mt-2">찾아오시는 길.</div>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center">
          <div className="text-2xl font-semibold mt-10">지도</div>
        </div>
        <div className="mt-8">
          <div>
            <div className="text-2xl font-semibold">주소</div>
            <div>
              [06978] <br />
              서울특별시 동작구 상도로 369, <br />
              숭실대학교 학생회관 232호, 땅의사람들
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactPage;
