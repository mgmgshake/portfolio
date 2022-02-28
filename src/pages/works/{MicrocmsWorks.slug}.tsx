import * as React from "react";
import { graphql, PageProps } from "gatsby";
import Head from "../../components/Head";
import Layout from "../../components/Layout";

const WorkDetailPage: React.FC<PageProps<GatsbyTypes.WorkDetailPageQuery>> = (
  props
) => {
  const post = props.data.microcmsWorks;
  console.log(post!.role);
  return (
    <Layout>
      <Head title={post!.title as string} />
      <div className="ly_cont">
        {post && (
          <div className="ly_cont_inner">
            <div className="bl_workTtl">
              <h1 className="el_mainTtl">{post.title}</h1>
              <a href={post.url}>{post.url}</a>
            </div>
            <section className="ly_work bl_workDetail">
              <p className="bl_workImage">
                <img src={post.thumbnail?.url} alt={post.title} />
              </p>
              <section
                className="bl_workDetail_txt"
                dangerouslySetInnerHTML={{ __html: post.detail as string }}
              ></section>
              <dl className="bl_workDetailInfo">
                {post.role && (
                  <>
                    <dt>ROLE</dt>
                    <dd>
                      <ul className="bl_workDetailInfo_labels">
                        {(post.role as string[]).map((item) => {
                          return (
                            <li className="el_label" key={item}>
                              {item}
                            </li>
                          );
                        })}
                      </ul>
                    </dd>
                  </>
                )}
                {post.tools && (
                  <>
                    <dt>TOOLS</dt>
                    <dd>
                      <ul className="bl_workDetailInfo_labels">
                        {(post.tools as string[]).map((tool) => {
                          return (
                            <li className="el_label" key={tool}>
                              {tool}
                            </li>
                          );
                        })}
                      </ul>
                    </dd>
                  </>
                )}
                {post.period && (
                  <>
                    <dt>PERIOD</dt>
                    <dd>{post.period}</dd>
                  </>
                )}
              </dl>
            </section>
          </div>
        )}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query WorkDetailPage($id: String!) {
    microcmsWorks(id: { eq: $id }) {
      thumbnail {
        url
      }
      title
      url
      slug
      detail
      role
      tools
      period
    }
  }
`;

export default WorkDetailPage;
