import React from "react"
import { Link } from "gatsby"

import * as styles from "../PostCell.module.scss"

const PostCell = (props) => {
  const { title, description, thumbnail, slug } = props.post;
  return (
    <Link to={`/works/${slug}`} className={styles.card}>
      <div className={styles.card__image} style={{backgroundImage: 'url(' + thumbnail?.url + ')'}}>
      </div>
      <div className={styles.card__content}>
        <h3 className={styles.card__content__title}>{title}</h3>
        <p className={styles.card__content__description}>{description}</p>
      </div>
    </Link>
  )
}

export default PostCell