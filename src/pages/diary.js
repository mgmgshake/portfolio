import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
import DiaryList from "../components/diary/DiaryList"

const DiaryPage = () => {
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
      <main className="bg-yellow-300 py-20">
        <h1 className="text-6xl mb-2 text-center font-title">DIARY</h1>
        <p className="text-base mb-10 text-center">日々の感想など</p>
        <DiaryList />
      </main>
    </Layout>
  )
}

export default DiaryPage
