import * as React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
import Profile from "../components/Profile"
import About from "../components/top/About"

// markup
const IndexPage = (props) => {
  return (
    <Layout>
      <Helmet>
        <title>shakexxmmm's site</title>
        <meta
          name="description"
          content="shakexxmmmのポートフォリオサイトです。"
        />
        <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0"></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;600&family=Montserrat:wght@700&display=swap" rel="stylesheet" />
      </Helmet>
      <Profile />
      <About />
    </Layout>
  )
}

export const query = graphql`
  query {
    allMicrocmsPost {
      nodes {
        slug
        title
        content
        publishedAt(formatString: "YYYY.MM.DD")
        category {
          slug
          name
        }
        thumbnail {
          url
        }
      }
    }
  }
`

export default IndexPage
