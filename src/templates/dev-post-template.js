import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../layout"
// import Layout from "../components/layout"
import Seo from "components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Badge } from "components/ui/badge"
import { Card, CardHeader, CardTitle } from "components/ui/card"
import { ReactComponent as IconArrowRight } from "../images/chevron-right.svg"
import { ReactComponent as IconArrowLeft } from "../images/chevron-left.svg"
import Footer from "../components/Footer"
export default function BlogPostTemplate({ data, pageContext }) {
  const post = data.markdownRemark
  const tags = data.markdownRemark.frontmatter.tags
  const thumbnail = getImage(post.frontmatter.thumbnail)
  const { previous, next } = pageContext

  // const post = data.markdownRemark

  return (
    <Layout category={"Dev"}>
      <div className="mx-auto w-full md:w-max ">
        <header className="pt-24 pb-8 px-8">
          <div className="w-full h-1/2 flex justify-center mb-12">
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
        <article className="leading-relaxed px-4 md:px-8 mb-24">
          <section
            className="prose"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>

        <nav className="blog-post-nav mt-12 w-full ">
          <ul className="flex justify-center gap-6">
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  <Card className="hover:text-sky-500 transition bg-transparent border-none p-0">
                    <div className="flex items-center gap-x-3">
                      <CardHeader>
                        <CardTitle className=" line-clamp-1 text-center">
                          <div className="flex items-center gap-x-2">
                            <IconArrowLeft />
                            {previous.frontmatter.title}
                          </div>
                        </CardTitle>
                      </CardHeader>
                    </div>
                  </Card>
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  <Card className="hover:text-sky-500 transition bg-transparent border-none p-0">
                    <div className="flex items-center gap-x-3 justify-end">
                      <CardHeader>
                        <CardTitle className=" line-clamp-1 ">
                          <div className="flex items-center gap-x-2">
                            {next.frontmatter.title}
                            <IconArrowRight />
                          </div>
                        </CardTitle>
                      </CardHeader>
                    </div>
                  </Card>
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>

      <Footer />
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
              width: 500
              height: 250
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
