import * as React from "react"

const DiaryList = (props) => {
  const {title, slug, content} = props.diary
  return (
    <div>
      <div className="container card p-8 md:p-16 relative">
          <h2 className="text-3xl font-bold mb-5">{title}</h2>
          <div className="text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </div>
  )
}

export default DiaryList