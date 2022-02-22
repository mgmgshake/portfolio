import * as React from "react";
import Head from "../components/Head";
import Layout from "../components/Layout";

const NotFoundPage: React.FC = () => {
  return (
    <>
      <Head title="404" />
      <Layout>
        <div className="ly_cont">
          <div className="bl_404">
            <p className="bl_404_image">
              <img
                src="/icon/icon_sad.svg"
                alt="icon"
                width="240"
                height="240"
              />
            </p>
            <h1>404</h1>
            <p>お探しのページはないみたいです。すみません。</p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default NotFoundPage;
