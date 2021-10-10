import * as React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import PostContent from "../../components/works/PostContent"
import Layout from "../../components/Layout"
import "../common.scss"

// markup
const PostPage = (props) => {
  const post = props.data.microcmsWorks
  return (
    <Layout>
      <Helmet>
        <title>{ post.title }</title>
        <meta name="description" content={`${post.title}`} />
      </Helmet>
      <PostContent post={post} />
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
