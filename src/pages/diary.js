import * as React from "react"
import Head from "../components/Head"
import Layout from "../components/Layout"
import DiaryList from "../components/diary/DiaryList"

const DiaryPage = () => {
  return (
    <Layout>
      <Head title="DIARY" />
      <section className="bg-yellow-300 py-20">
        <h1 className="midashi mb-2">DIARY</h1>
        <p className="text-base mb-10 text-center">日々の感想など</p>
        <DiaryList />
      </section>
    </Layout>
  )
}

export default DiaryPage
