import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
import DiaryList from "../components/diary/DiaryList"

const DiaryPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>diary | Maki Goto</title>
        <meta
          name="description"
          content="Maki Gotoのポートフォリオサイトです。"
        />
        <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0"></meta>
      </Helmet>
      <section className="bg-yellow-300 py-20">
        <h1 className="midashi mb-2">DIARY</h1>
        <p className="text-base mb-10 text-center">日々の感想など</p>
        <DiaryList />
      </section>
    </Layout>
  )
}

export default DiaryPage
