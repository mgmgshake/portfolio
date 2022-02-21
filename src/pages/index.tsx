import * as React from "react";
import Head from "../components/Head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/index.scss";

// markup
const IndexPage: React.FC = () => {
  return (
    <>
      <Head title="TOP" />
      <div className="ly_wrapper">
        <Header />
        <main className="ly_mvCont">
          <div className="bl_mv">
            <p className="bl_mv_icon">
              <img
                src="/icon/icon_normal.svg"
                alt="icon"
                width="120"
                height="120"
              />
            </p>
            <h1 className="bl_mv_ttl">
              <span>Hello, I'm</span>
              <img src="/mv/moji.svg" alt="Maki" width="504" height="162" />
            </h1>
            <p className="bl_mv_txt">I'm a front-end developer.</p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default IndexPage;
