module.exports = {
  pathPrefix: `gatsby-starter-orga`,
  siteMetadata: {
    title: `Gatsby With Orga`,
    description: `This barebones starter ships with org-mode support.`,
    author: `Xiaoxing Hu <xiaoxing@huxx.org>`,
  },
  plugins: [
    {
      resolve: `gatsby-theme-orga`,
      options: {
        // basePath: `/blog`, // if you want your content to be on a prefix, default is `/`
        // contentPath: `blog`, // source of your org files, default to `content`
        // filter: { // filter of your posts, key should match metadata propperty names, default is {}
        //   category: `posts`,
        // },
        pagination: 5, // default to 10
        // slug: ['blog', '$export_file_name'], // how to generate slug for posts, default ['$category', '$export_file_name']
        // buildIndexPage: true, // default true
        // buildCategoryIndexPage: true, // default true
        metadata: ['title', 'category', 'date', 'tags'], // pick the metadata you need in your custom `post` and `posts` components
        // sortBy: [`date`], // sort posts
        // order: `DESC`, // order for sorting
      },
    },
  ],
}
