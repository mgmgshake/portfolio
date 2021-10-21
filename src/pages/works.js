import * as React from "react"
import { graphql } from "gatsby"
import Head from "../components/Head"
import Layout from "../components/Layout"

// markup
const WorksPage = (props) => {
  const posts = props.data.allMicrocmsWorks.nodes
  return (
    <Layout>
      <Head title="WORKS" />
      <div className="bg-yellow-300 h-screen">
        <p>準備中です！</p>
      </div>
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
