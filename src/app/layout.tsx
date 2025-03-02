import '@/app/globals.css';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

export const metadata = {
  title: '땅의사람들',
  icons: {
    icon: '/favicon.ico',
  },
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-w-[1024px]">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
