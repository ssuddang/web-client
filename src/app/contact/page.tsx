'use client';

import React from 'react';
import KakaoMap from '../contact/map';
import Title from '@/components/ContactPage/Title';
function ContactPage() {
  return (
    <div>
      <Title />
      <div className="mx-[20px] lg:max-w-4xl lg:mx-auto">
        <div className="flex justify-center">
          <div className="text-2xl font-semibold mt-10">지도</div>
        </div>
        <div className="mt-8">
          <KakaoMap />
        </div>
        <div>
          <div className="mt-8">
            <div>
              <div className="lg:text-2xl font-semibold mb-[5px] text-[20px]">
                주소
              </div>
              <div className="flex flex-col lg:text-[16px] text-[14px]">
                <div>[06978]</div>
                <div>서울특별시 동작구 상도로 369,</div>
                <div>숭실대학교 학생회관 232호, 땅의사람들</div>
              </div>
            </div>

            <div className="mt-[40px] mb-[40px]">
              <div className="lg:text-2xl font-semibold mb-[5px] text-[20px]">
                문의하기
              </div>
              <div className="flex flex-col lg:text-[16px] text-[14px]">
                <div>
                  땅의사람들에 문의하실 내용이 있으신 경우, 회장단에게
                  연락하시기 바랍니다.
                </div>
                <div>
                  인스타 DM을 이용한다면 더욱 빠르게 답변을 받으실 수 있습니다.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
