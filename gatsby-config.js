module.exports = {
  siteMetadata: {
    title: `v2`,
    siteUrl: `https://sgarciagallego-v2.vercel.app`
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: 0,
        duration: 1000
      }
    }
  ]
};