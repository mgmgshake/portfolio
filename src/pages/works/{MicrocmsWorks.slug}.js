import * as React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import WorkContent from "../../components/works/WorkContent"
import Layout from "../../components/Layout"

const PostPage = (props) => {
  const post = props.data.microcmsWorks
  return (
    <Layout>
      <Helmet>
        <title>{ post.title }</title>
        <meta name="description" content={`${post.title}`} />
      </Helmet>
      <main className="bg-yellow-300 py-20">
        <h1 className="text-6xl mb-2 text-center font-title">WORKS</h1>
        <p className="text-base mb-10 text-center">制作物</p>
        <WorkContent post={post} />
      </main>
    </Layout>
  )
}

export const query = graphql`
 query($id: String!) {
  microcmsWorks(id: {eq: $id}) {
    thumbnail {
      url
    }
    title
    slug
    detail
    description
  }
 }
`

export default PostPage
