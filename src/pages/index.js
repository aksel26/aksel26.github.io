import { graphql } from "gatsby"
import * as React from "react"

// import Layout from "../components/layout"
import Banner from "../components/Banner"
import FeatureCardWrapper from "../components/FeatureCardWrapper"
import Footer from "../components/Footer"
import Seo from "../components/seo"
import Layout from "../layout"
// import FeaturedCard from "@/components/FeaturedCard"

const Main = ({ data, location }) => {
  console.log("data: ", data)
  const siteTitle = data.site.siteMetadata?.title || `Title`
  console.log("siteTitle: ", siteTitle)
  const posts = data.allMarkdownRemark.nodes
  console.log("posts: ", posts)

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout>
      <Banner />
      <FeatureCardWrapper />
      <Footer />
    </Layout>
  )
}

export default Main

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
        }
      }
    }
  }
`
