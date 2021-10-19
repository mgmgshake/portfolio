import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import DiaryCard from "./DiaryCard"

const DiaryList = () => {
  const data = useStaticQuery(
    graphql`
        query {
          allMicrocmsDiary {
            nodes {
              title
              slug
              content
            }
          }
        }
    `
  )
  return (
    <div className="container mx-auto">
      <ul>
        {data.allMicrocmsDiary.nodes.map(diary => {
          return <li className="mb-20"><DiaryCard diary={diary} /></li>
        })}
      </ul>
    </div>
  )
}

export default DiaryList