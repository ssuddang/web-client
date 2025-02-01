import '@/app/globals.css';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="pt-[90px]">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
