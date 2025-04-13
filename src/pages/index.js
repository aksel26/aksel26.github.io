import { graphql } from "gatsby"
import * as React from "react"

import Banner from "../components/Banner"
import MainCardWrapper from "components/MainCardWrapper"
import FadingVideo from "components/FadingVideo"
import Footer from "../components/Footer"
import Seo from "../components/Seo"
import Layout from "../layout"

const Main = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.edges

  if (posts.length === 0) {
    return <p>글이 없습니다ㅏ.</p>
  }

  return (
    <Layout>
      <FadingVideo />
      <MainCardWrapper posts={posts} siteTitle={siteTitle} />
      {/* <Footer /> */}
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
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 160)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY년 MM월 DD일")
            title
            tags
            summary
            mainCategory
            location
            thumbnail {
              publicURL
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  }
`
