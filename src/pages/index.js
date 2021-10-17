import * as React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
import About from "../components/top/About"
import Works from "../components/top/Works"
import MainVisual from "../components/top/MainVisual"

// markup
const IndexPage = () => {
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
      <MainVisual />
      <About />
      <Works />
    </Layout>
  )
}

export default IndexPage
