import * as React from "react"

const DiaryList = (props) => {
  const {title, slug, content} = props.diary
  return (
    <div>
      <div className="container p-16 rounded-2xl bg-white relative shadow-card">
          <h2 className="text-3xl font-bold mb-5">{title}</h2>
          <div class="text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </div>
  )
}

export default DiaryList