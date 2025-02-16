'use client';

import React from 'react';
import KakaoMap from '../contact/map'; // KakaoMap 컴포넌트 경로를 정확히 지정하세요.

function ContactPage() {
  return (
    <div>
      <div className="bg-green-300 h-[250px] flex flex-col items-center justify-center">
        <div className="text-4xl font-bold mb-2">Contact</div>
        <div className="mt-2">찾아오시는 길.</div>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center">
          <div className="text-2xl font-semibold mt-10">지도</div>
        </div>
        {/* KakaoMap 추가 */}
        <div className="mt-8">
          <KakaoMap /> {/* 카카오 맵이 렌더링될 위치 */}
        </div>
        <div>
          <div className="mt-8">
            <div>
              <div className="text-2xl font-semibold">주소</div>
              <div>
                [06978] <br />
                서울특별시 동작구 상도로 369, <br />
                숭실대학교 학생회관 232호, 땅의사람들
              </div>
            </div>

            <div className="mt-6">
              <div className="text-2xl font-semibold padding top-[300px] ">
                문의하기
              </div>
              <div>
                땅의사람들에 문의하실 내용이 있으신 경우, 회장단에게 연락하시기
                바랍니다.
                <br />
                인스타 DM을 이용한다면 더욱 빠르게 답변을 받으실 수 있습니다.
                <div className="mt-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
