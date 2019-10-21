<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's starter with org-mode support
</h1>

Kick off your project with this default boilerplate. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.

_Have another more specific idea? You may want to check out our vibrant collection of [official and community-created starters](https://www.gatsbyjs.org/docs/gatsby-starters/)._

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying this starter.

    ```shell
    # create a new Gatsby site using the default starter
    gatsby new my-org-website https://github.com/orgapp/gatsby-starter-orga
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-org-website/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-config.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

The items you want to pay attention are:

1. **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

2. **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. You can configure the theme with a set of flexible options.

## 🎓 Customization

### `gatsby-theme-orga` Options
| key                      | default value                        | explanation                                                                                                                                                                                                                 |
|--------------------------|--------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `basePath`               | `/`                                  | the base path of your org-mode content, e.g. `/blog`                                                                                                                                                                        |
| `contentPath`            | `content`                            | source folder of your org files, relative to the root of the project. e.g. `../notes`                                                                                                                                       |
| `filter`                 | `{}`                                 | filter of your posts, key sohuld match metadata property names, e.g. `{ category: 'posts'}`                                                                                                                                 |
| `pagination`             | 10                                   | maximum number of posts per index page.                                                                                                                                                                                     |
| `slug`                   | `['$category', '$export_file_name']` | array of elements for generating slug for each posts, the ones with `$` prefix means to take the value from metadata with matching field name, e.g. `['blog', '$export_file_name']` will give you slugs like `blog/my-post` |
| `buildIndexPage`         | `true`                               | whether or not to build an index page, it's path would be your `basePath`, but can be overwritten by custom pages in your `src/pages` folder.                                                                               |
| `buildCategoryIndexPage` | `true`                               | whether or not to build category index pages.                                                                                                                                                                               |
| `metadata`               | `['title', 'category']`              | define the metadata you need in your custom `post` and `posts` components. e.g. `[ 'title', 'category', 'date', 'author' ]`                                                                                                 |
| `sortBy`                 | `['date']`                           | metadata fields for sorting your posts                                                                                                                                                                                      |
| `order`                  | `DESC`                               | options: `ASC`, `DESC`                                                                                                                                                                                                      |


### To Change How It Looks

- To change how `post` pages look, modify file: [src/gatsby-theme-orga/components/post.js](src/gatsby-theme-orga/components/post.js).
- To change how `posts index` pages look, modify file: [src/gatsby-theme-orga/components/posts.js](src/gatsby-theme-orga/components/posts.js).

### Generate More Pages

See the [CV](src/pages/cv.js) page for an example of how to generate extra pages with your org-mode content.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)
