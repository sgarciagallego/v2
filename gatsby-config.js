module.exports = {
  siteMetadata: {
    title: `Sergio Garcia Gallego`,
    description: `The second iteration of @sgarciagallego's personal website, made with React, Gatsby and styled-components`,
    author: `@sgarciagallego`,
    siteUrl: `https://iamsergio.dev`,
  },
  plugins: [
    "gatsby-plugin-remove-console",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        start_url: '/',
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