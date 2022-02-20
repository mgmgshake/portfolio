import * as React from "react";
import Layout from "../components/Layout";
import Head from "../components/Head";
import { graphql, PageProps } from "gatsby";

// markup
const WorksIndex: React.FC<PageProps<GatsbyTypes.WorksIndexQuery>> = ({
  data,
}) => {
  const works = data.allMicrocmsWorks.nodes;
  return (
    <Layout>
      <Head title="TEST" />
      <p>テストのページだよ</p>
      <ul>
        {works.map((work) => {
          return (
            <li key={work.slug}>
              <h2>{work.title}</h2>
              <p>{work.slug}</p>
            </li>
          );
        })}
      </ul>
    </Layout>
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
