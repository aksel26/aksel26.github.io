import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../layout"
// import Layout from "../components/layout"
import Seo from "components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Badge } from "components/ui/badge"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "components/ui/card"
export default function BlogPostTemplate({ data, pageContext }) {
  console.log("🚀 ~ BlogPostTemplate ~ data:", data)
  const post = data.markdownRemark
  const tags = data.markdownRemark.frontmatter.tags
  const thumbnail = getImage(post.frontmatter.thumbnail)

  // const post = data.markdownRemark

  return (
    <Layout>
      <header className="pt-44 pb-8 px-8 text-center">
        {/* <div className="w-full h-1/2 flex justify-center mb-12">
          {thumbnail && (
            <GatsbyImage
              image={thumbnail}
              alt={post.frontmatter.title}
              style={{ objectFit: "cover" }}
            />
          )}
        </div> */}
        <div className="flex flex-col gap-y-7">
          <h1 className="text-3xl font-bold ">{post.frontmatter.title}</h1>
          <h3 className="text-base text-gray-500  ">
            {post.frontmatter.location}
          </h3>
          {/* <p className="text-base text-gray-500  ">{post.frontmatter.address}</p> */}
          <div className="flex gap-x-4 py-6 justify-center">
            {tags.map((tag, index) => (
              <Badge key={index} variant="secondary">{`#${tag}`}</Badge>
            ))}
          </div>
          <p className="text-sm text-gray-500">{post.frontmatter.date}</p>
        </div>
      </header>
      <article className="leading-relaxed px-8 mb-24">
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>

      <nav className="blog-post-nav max-w-[450px] mx-auto">
        <ul className="flex justify-center gap-x-6">
          <li className="">
            {/* {previous && ( */}
            <Link to={"#"} rel="prev">
              <Card className="hover:text-sky-500 transition ">
                <div className="flex items-center gap-x-3">
                  <div>←</div>
                  <CardHeader>
                    <CardTitle className="text-center line-clamp-1">
                      Create project
                    </CardTitle>
                    <CardDescription className="line-clamp-1">
                      Deploy your new project in one-click.Deploy your new
                      project in one-click.Deploy your new project in
                      one-click.Deploy your new project in one-click.
                    </CardDescription>
                  </CardHeader>
                </div>
              </Card>
            </Link>
            {/* )} */}
          </li>
          <li>
            {/* {next && ( */}
            <Link to={"#"} rel="next">
              <Card className="hover:text-sky-500 transition ">
                <div className="flex items-center gap-x-3">
                  <CardHeader>
                    <CardTitle className="text-center line-clamp-1">
                      Create projectCreate projectCreate projectCreate
                      projectCreate project
                    </CardTitle>
                    <CardDescription className="line-clamp-1">
                      Deploy your new project in one-click.Deploy your new
                      project in one-click.Deploy your new project in
                      one-click.Deploy your new project in one-click.
                    </CardDescription>
                  </CardHeader>
                  <div>→</div>
                </div>
              </Card>
            </Link>
            {/* )} */}
          </li>
        </ul>
      </nav>
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
        location

        thumbnail {
          childImageSharp {
            gatsbyImageData(
              width: 200
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
