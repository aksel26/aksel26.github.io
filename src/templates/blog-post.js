import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../layout"
// import Layout from "../components/layout"
import Seo from "components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Badge } from "components/ui/badge"

export default function BlogPostTemplate({ data }) {
  const post = data.markdownRemark
  const tags = data.markdownRemark.frontmatter.tags
  const thumbnail = getImage(post.frontmatter.thumbnail)

  // const post = data.markdownRemark

  return (
    <Layout>
      <header className="pt-24 pb-8 px-8">
        <div className="w-full h-1/2 flex justify-center">
          {thumbnail && (
            <GatsbyImage
              image={thumbnail}
              alt={post.frontmatter.title}
              style={{ objectFit: "cover" }}
            />
          )}
        </div>
        <h1 className="text-3xl font-bold ">{post.frontmatter.title}</h1>
        <div className="flex gap-x-4 py-6">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary">{`#${tag}`}</Badge>
          ))}
        </div>
        <p className="text-sm text-gray-500">{post.frontmatter.date}</p>
      </header>
      <article className="leading-relaxed px-8">
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </Layout>
  )
}

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.summary || post.excerpt}
    />
  )
}

// export default BlogPostTemplate

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "YYYY년 MM월 DD일")
        tags
        thumbnail {
          childImageSharp {
            gatsbyImageData(
              width: 300
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
      }
      timeToRead
    }
  }
`
