module.exports = {
  siteMetadata: {
    title: `v2`,
    siteUrl: `https://sgarciagallego-v2.vercel.app`
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: 'Sergio Garcia Gallego',
        short_name: 'Sergio',
        description: 'The second iteration of @sgarciagallego personal website, made with React and Gatsby',
        start_url: 'https://sgarciagallego-v2.vercel.app',
        lang: 'en',
        background_color: '#000000',
        theme_color: '#000000',
        display: 'standalone',
        icon: './src/images/icon.svg',
        icon_options: {
          purpose: 'any maskable'
        },
        localize: [
          {
            start_url: 'https://sgarciagallego-v2.vercel.app',
            lang: 'en',
            name: 'Sergio Garcia Gallego',
            short_name: 'Sergio',
            description: 'The second iteration of @sgarciagallego personal website, made with React and Gatsby'
          }
        ]
      }
    }
  ]
};