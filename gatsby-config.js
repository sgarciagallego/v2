module.exports = {
  siteMetadata: {
    title: `v2`,
    siteUrl: `https://sgarciagallego-v2.vercel.app`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-gatsby-cloud`,
      options: {
        headers: {},
        allPageHeaders: [],
        mergeSecurityHeaders: true,
        mergeLinkHeaders: true,
        mergeCachingHeaders: true,
        transformHeaders: (headers, path) => headers,
        generateMatchPathRewrites: true,
      },
    },
    "gatsby-plugin-remove-console",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: 'Sergio Garcia Gallego',
        short_name: 'Sergio',
        description: 'The second iteration of @sgarciagallego personal website, made with React, Gatsby and styled-components',
        start_url: '/',
        lang: 'en',
        background_color: '#000000',
        theme_color: '#000000',
        display: 'standalone',
        icon: './src/images/icon.svg',
        icon_options: {
          purpose: 'any maskable',
        }
      }
    }
  ]
};