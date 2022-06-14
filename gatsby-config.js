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
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: 'Sergio Garcia Gallego',
        short_name: 'Sergio',
        start_url: '/',
        background_color: '#000000',
        theme_color: '#000000',
        display: 'standalone',
        icon: './src/images/icon.svg',
      }
    }
  ]
};