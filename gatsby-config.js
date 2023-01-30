module.exports = {
  siteMetadata: {
    title: `Sergio Garcia Gallego`,
    description: `The second iteration of @sgarciagallego's personal website, made with React, Gatsby and styled-components`,
    author: `@sgarciagallego`,
    siteUrl: `https://sergiogarciagallego.com`,
  },
  plugins: [
    "gatsby-plugin-remove-console",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          'G-SSGF7X8DNJ',
        ],
        gtagConfig: {
          optimize_id: 'OPT_CONTAINER_ID',
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: false,
          respectDNT: true,
          exclude: ['/preview/**', '/do-not-track/me/too/'],
        },
      },
    },
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