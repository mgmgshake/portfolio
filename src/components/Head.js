import * as React from "react"
import { Helmet } from "react-helmet"
import '../css/index.css'

const Head = (props) => {
    const {title} = props
    return (
        <Helmet>
            <title>{title} | Maki Goto</title>
            <meta
                name="description"
                content="Maki Gotoのポートフォリオサイトです。"
            />
            <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0"></meta>
            {/* OGP ここから */}
            <head prefix="og: http://ogp.me/ns#" />
            <meta property="og:url" content="https://maki-mm.com/" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="TOP" />
            <meta property="og:description" content="Maki Gotoのポートフォリオサイトです。" />
            <meta property="og:site_name" content="Maki Goto" />
            <meta property="og:image" content="https://maki-mm.com/ogp/ogp.png" />
            {/* OGP ここまで */}
            {/* favicon ここから */}
            <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
            <link rel="manifest" href="favicon/site.webmanifest" />
            <link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#5bbad5" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff"></meta>
            {/* favicon ここまで */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;600&family=Montserrat:wght@700&display=swap" rel="stylesheet" />
        </Helmet>
    )
}

export default Head