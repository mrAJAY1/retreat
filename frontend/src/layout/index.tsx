import React from 'react';
import Header from 'common/header';
import Footer from 'common/footer';

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {/* <Hero /> */}
      <main className="flex-1 px-6 py-10 md:px-10 2xl:px-20">{children}</main>
      <Footer />
    </div>
  );
}
