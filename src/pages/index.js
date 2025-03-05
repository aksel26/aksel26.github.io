import * as React from "react"
import { Link, graphql } from "gatsby"

// import Bio from "../components/bio"
// import Layout from "../components/layout"
import Seo from "../components/seo"
import Layout from "../layout"
import Header from "../components/Header"
import FeatureCardWrapper from "../components/FeatureCardWrapper"
import DevContents from "../components/FeaturedCard/dev"
import LifeLogContents from "../components/FeaturedCard/daily"
import FeaturedCardDaily from "../components/FeaturedCard/daily"
import Banner from "../components/Banner"
import Footer from "../components/Footer"
// import FeaturedCard from "@/components/FeaturedCard"

const Main = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        {/* <Bio /> */}
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
      <FeatureCardWrapper>
        <DevContents />
        <hr className="w-full h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700" />
        <LifeLogContents />
      </FeatureCardWrapper>
      <Footer />

      {/* <Layout location={location} title={siteTitle}> */}
      {/* <Bio /> */}
      {/* <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol> */}
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
          description
        }
      }
    }
  }
`
