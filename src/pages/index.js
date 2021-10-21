import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Head from "../components/Head"
import About from "../components/top/About"
import Works from "../components/top/Works"
import MainVisual from "../components/top/MainVisual"

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Head title="TOP" />
      <MainVisual />
      <About />
      <Works />
    </Layout>
  )
}

export default IndexPage
