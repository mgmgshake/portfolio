import React from "react"
import { Link } from "gatsby"

const WorkContent = (props) => {
  const { title, description, detail, slug, thumbnail } = props.post;
  return (
      <article className="container bg-white p-6 md:p-16 rounded-2xl shadow-card mx-auto">
        <div>
          <p className="w-full mb-14">
            <img src={thumbnail?.url} alt={title} className="w-full h-auto" />
          </p>
          <h2 className="text-4xl font-bold mb-3">{ title }</h2>
          <p className="text-xs mb-10">{description}</p>
          <div className="text-base leading-relaxed cms-contents" dangerouslySetInnerHTML={{ __html: detail }}></div>
        </div>
      </article>
  )
}

export default WorkContent