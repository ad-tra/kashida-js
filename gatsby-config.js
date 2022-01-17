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
        trackingId: "G-67KH5G61VV",
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
