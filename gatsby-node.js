/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// Define the template for blog post
// const blogPost = path.resolve(`./src/templates/dev-post-template.js`)

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              mainCategory
            }
          }
        }
      }
    }
  `)

  if (result.errors || !result.data) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allMarkdownRemark.edges
  posts.forEach((post, index) => {
    // 현재 포스트의 카테고리
    const currentCategory = post.node.frontmatter.mainCategory

    // 같은 카테고리의 포스트만 필터링
    const categoryPosts = posts.filter(
      p => p.node.frontmatter.mainCategory === currentCategory
    )

    // 현재 카테고리 포스트 내에서의 인덱스 찾기
    const categoryIndex = categoryPosts.findIndex(
      p => p.node.fields.slug === post.node.fields.slug
    )

    // 같은 카테고리 내 이전/다음 포스트 찾기
    const previous =
      categoryIndex === 0 ? null : categoryPosts[categoryIndex - 1].node
    const next =
      categoryIndex === categoryPosts.length - 1
        ? null
        : categoryPosts[categoryIndex + 1].node

    let template
    if (currentCategory === "Dev") {
      template = path.resolve(`./src/templates/dev-post-template.tsx`)
    } else if (currentCategory === "LifeLog") {
      template = path.resolve(`./src/templates/lifeLog-post-template.js`)
    }

    createPage({
      path: post.node.fields.slug,
      component: template,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
}

/**
 * @type {import('gatsby').GatsbyNode['onCreateNode']}
 */
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `content` })
    createNodeField({
      node,
      name: `slug`,
      value: slug.replace(/\/$/, ""),
    })
  }
}

/**
 * @type {import('gatsby').GatsbyNode['createSchemaCustomization']}
 */
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  const typeDefs = `
  type MarkdownRemark implements Node {
      frontmatter: Frontmatter!
    }
    type Frontmatter {
      title: String!
      date: Date @dateformat
      slug: String
      tags: [String!]
      thumbnail: File @fileByRelativePath
      summary: String
    }

    
`

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(typeDefs)
}

exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  const output = getConfig().output || {}

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        components: path.resolve(__dirname, "src/components"),
        utils: path.resolve(__dirname, "src/utils"),
        hooks: path.resolve(__dirname, "src/hooks"),
        lib: path.resolve(__dirname, "src/lib"),
        styles: path.resolve(__dirname, "src/styles"),
      },
    },
  })
}
