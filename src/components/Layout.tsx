import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../css/index.css";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <div className="ly_wrapper">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
