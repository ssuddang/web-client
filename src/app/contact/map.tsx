'use client';

import React, { useEffect, useRef } from 'react';

const KakaoMap: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      '//dapi.kakao.com/v2/maps/sdk.js?appkey=4265eccb93442e854bf5cb40696c1b82&autoload=false';
    script.async = true;

    script.onload = () => {
      if (window.kakao && mapContainer.current) {
        window.kakao.maps.load(() => {
          const map = new window.kakao.maps.Map(mapContainer.current, {
            center: new window.kakao.maps.LatLng(37.496837, 126.956071),
            level: 3,
          });

          const markerPosition = new window.kakao.maps.LatLng(
            37.496837,
            126.956071,
          );

          const marker = new window.kakao.maps.Marker({
            position: markerPosition,
          });

          marker.setMap(map);
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
    ></div>
  );
};

export default KakaoMap;
