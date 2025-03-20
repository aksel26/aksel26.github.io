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

  // result.data.allMarkdownRemark.edges.forEach(({ node }) => {
  //   const slug =
  //     node.frontmatter.slug ||
  //     createFilePath({ node, getNode, basePath: `content` })
  //   createPage({
  //     path: `/${slug}`,
  //     component: blogPost,
  //     relativeDirectory: node.parent.relativeDirectory,
  //   })
  // })

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    let template
    if (node.frontmatter.mainCategory === "Dev") {
      template = path.resolve(`./src/templates/dev-post-template.js`)
    } else if (node.frontmatter.mainCategory === "LifeLog") {
      template = path.resolve(`./src/templates/lifeLog-post-template.js`)
    }
    createPage({
      path: node.fields.slug,
      component: template,
      context: {
        slug: node.fields.slug,
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
