import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { MobileBottomBar } from "./MobileBottomBar";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-1 bg-white">
        <Outlet />
      </main>
      <Footer />
      <MobileBottomBar />
    </div>
  );
}
