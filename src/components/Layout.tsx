import * as React from "react";
import Footer from "./Footer";
import "../css/index.css";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <div className="font-body">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
