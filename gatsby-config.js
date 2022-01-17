module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "KashidaJS",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    'gatsby-plugin-dark-mode',
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-H2P3V8VJ6B",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
