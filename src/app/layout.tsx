import '@/app/globals.css';

import Footer from '@/components/MainPage/Footer';
import Header from '@/components/Header/Header';

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="pt-[100px]">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
