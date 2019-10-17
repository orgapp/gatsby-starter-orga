module.exports = {
  siteMetadata: {
    title: `Gatsby With Orga`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Xiaoxing Hu`,
  },
  plugins: [
    {
      resolve: `gatsby-theme-orga`,
      options: {
        // basePath: `/blog`, // if you want your content to be on a prefix
        contentPath: `content`,
        filter: {
          category: `posts`,
        },
        slug: ['blog', '$export_file_name'],
      },
    },
  ],
}
