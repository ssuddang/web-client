export {};

declare global {
  interface Window {
    kakao: typeof kakao; // Kakao Maps API 타입을 정확히 연결
  }
}