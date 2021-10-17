import * as React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"

// markup
const WorksPage = (props) => {
  const posts = props.data.allMicrocmsWorks.nodes
  return (
    <Layout>
      <Helmet>
        <title>works | mmm's site</title>
        <meta
          name="description"
          content="shakexxmmmのポートフォリオです。"
        />
        <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0"></meta>
      </Helmet>
      <main className="bg-yellow-300 h-screen">
        <p>準備中です！</p>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMicrocmsWorks {
      nodes {
        title
        description
        detail
        thumbnail {
          url
        }
        slug
      }
    }
  }
`

export default WorksPage
