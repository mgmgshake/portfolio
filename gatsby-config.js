module.exports = {
  siteMetadata: {
    title: "shake portfolio",
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-typegen`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-postcss`,
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-microcms",
      options: {
        apiKey: process.env.MICROCMS_API_KEY,
        serviceId: "shakexxmmm",
        apis: [
          {
            endpoint: "post",
          },
          {
            endpoint: "category",
          },
          {
            endpoint: "works",
          },
          {
            endpoint: "diary",
          },
        ],
      },
    },
  ],
};
