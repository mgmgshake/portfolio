import * as React from "react";
import Head from "../components/Head";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import { graphql, PageProps } from "gatsby";

const WorksIndex: React.FC<PageProps<GatsbyTypes.WorksIndexQuery>> = ({
  data,
}) => {
  const works = data.allMicrocmsWorks.nodes;
  return (
    <>
      <Head title="Works" />
      <Layout>
        <div className="ly_cont">
          <h1 className="el_mainTtl">WORKS</h1>
          <div className="ly_cont_inner">
            <ul className="ly_works">
              {works.map((work) => {
                return (
                  <li className="bl_work" key={work.slug}>
                    <Link to={work.slug as string}>
                      <p>
                        <img src={work.thumbnail?.url} alt={work.title} />
                      </p>
                      <h2>{work.title}</h2>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default WorksIndex;

export const query = graphql`
  query WorksIndex {
    allMicrocmsWorks {
      nodes {
        title
        thumbnail {
          url
        }
        slug
      }
    }
  }
`;
