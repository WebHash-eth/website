import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden">
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main className="">{children || <Outlet />}</main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
