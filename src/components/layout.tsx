import { Outlet } from 'react-router-dom';
import { Navbar } from './sections/navbar';
import { FooterOptimized } from './sections/footer-optimized';
import { BackToTop } from './back-to-top';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <FooterOptimized />
      <BackToTop />
    </div>
  );
}