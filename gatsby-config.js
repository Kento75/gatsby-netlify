/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const baseUrl = process.env.BASE_URL || `codingsrc.com`;

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Gatsby-Bootstrap',
    description: 'This is the description of our website',
    keywords: 'gatsby, gatsbyjs project, gatsby bootstrap',
    image: './static/gatsby.jpg',
    url: 'https://www.gatsbyjs.org/',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: baseUrl,
        excludedRoutes: [
          '/wp/v2/users/me',
          '/acf/v2/options',
          '/wp/v2/settings',
        ],
        protocol: `http`,
        hostingWPCOM: false,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'GatsbyJS Bootstrap',
        short_name: 'GatsbyJS',
        start_url: '/',
        background_color: '#f8f9fa',
        theme_color: '#FFFFFF',
        display: 'standalone',
      },
    },
    `gatsby-plugin-offline`,
  ],
};

/*
      < Helmet >
        <
        title > Gatsby - Bootstrap Wordpress Sourced < /title> <
        meta
      name = "description"
      content = "This is the description of our website" /
        >
        <
        meta
      name = "keywords"
      content = "gatsby, gatsbyjs project, gatsby bootstrap" /
        >
        <
        meta name = "robots"
      content = "index,follow" / >
        <
        /Helmet>
 */
