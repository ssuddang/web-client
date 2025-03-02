"use client";

import React, { useEffect, useRef } from "react";

const KakaoMap: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null); // 지도를 표시할 div 참조

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=4265eccb93442e854bf5cb40696c1b82&autoload=false";
    script.async = true;

    script.onload = () => {
      if (window.kakao && mapContainer.current) {
        window.kakao.maps.load(() => {
          // 지도 생성
          const map = new window.kakao.maps.Map(mapContainer.current, {
            center: new window.kakao.maps.LatLng(37.496837, 126.956071), // 지도의 중심좌표
            level: 3, // 확대 레벨
          });

          // 마커가 표시될 위치
          const markerPosition = new window.kakao.maps.LatLng(
            37.496837, 
            126.956071
          );

          // 마커 생성
          const marker = new window.kakao.maps.Marker({
            position: markerPosition,
          });

          // 마커 지도 위에 표시
          marker.setMap(map);

          // 아래는 마커를 제거하는 코드 (필요 시 사용)
          // marker.setMap(null);
        });
      }
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div
      ref={mapContainer}
      className="w-full h-[400px] border border-gray-300"
    >
      {/* Kakao Map이 렌더링될 영역 */}
    </div>
  );
};

export default KakaoMap;
