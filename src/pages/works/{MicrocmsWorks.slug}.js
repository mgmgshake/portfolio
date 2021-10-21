import * as React from "react"
import { graphql } from "gatsby"
import Head from "../../components/Head"
import WorkContent from "../../components/works/WorkContent"
import Layout from "../../components/Layout"

const PostPage = (props) => {
  const post = props.data.microcmsWorks
  return (
      <Layout>
    <Head title={post.title} />
      <section className="bg-yellow-300 py-20">
        <h1 className="midashi mb-2">WORKS</h1>
        <p className="text-base mb-10 text-center">制作物</p>
        <WorkContent post={post} />
      </section>
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
