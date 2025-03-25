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
  const post = data.markdownRemark
  const tags = data.markdownRemark.frontmatter.tags
  const images = data.markdownRemark.frontmatter.images
  const thumbnail = getImage(post.frontmatter.thumbnail)

  // const post = data.markdownRemark

  return (
    <Layout>
      <header className="pt-[60px] pb-8 px-8 text-center">
        <p className="md:text-9xl text-7xl  text-white font-semibold">
          LifeLog
        </p>
      </header>

      <article className="leading-relaxed px-8 mb-24 relative">
        <div className="flex flex-col md:flex-row relative gap-8">
          <div
            id="infoBox"
            className="flex flex-col gap-y-4 sticky top-20 h-fit max-h-screen text-white w-1/3"
          >
            <h1 className="text-3xl font-bold">{post.frontmatter.title}</h1>
            <h3 className="text-sm md:text-base text-gray-100">
              {post.frontmatter.location}
            </h3>
            <div className="flex gap-x-4 py-6 justify-center w-max">
              {tags.map((tag, index) => (
                <Badge key={index} variant="secondary">{`#${tag}`}</Badge>
              ))}
            </div>

            <div
              className="text-sm md:text-base"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            <p className="text-sm text-gray-100 mt-8">
              {post.frontmatter.date}
            </p>

            <nav className="blog-post-nav mt-12">
              <ul className="flex gap-x-6">
                <li className="">
                  {/* {previous && ( */}
                  <Link to={"#"} rel="prev">
                    <Card className="hover:text-sky-500 transition bg-transparent border-none w-32 p-0">
                      <div className="flex items-center gap-x-3 text-white">
                        <CardHeader>
                          <CardTitle className=" line-clamp-1">
                            Create projectCreate project
                          </CardTitle>
                        </CardHeader>
                      </div>
                    </Card>
                  </Link>
                  {/* )} */}
                </li>
                <li>
                  {/* {next && ( */}
                  <Link to={"#"} rel="next">
                    <Card className="hover:text-sky-500 transition bg-transparent border-none w-32 p-0">
                      <div className="flex items-center gap-x-3 text-white">
                        <CardHeader>
                          <CardTitle className=" line-clamp-1">
                            Create projectCreate projectCreate projectCreate
                            projectCreate project
                          </CardTitle>
                        </CardHeader>
                      </div>
                    </Card>
                  </Link>
                  {/* )} */}
                </li>
              </ul>
            </nav>
          </div>
          <section className="flex-1 flex md:flex-row flex-wrap flex-col gap-4">
            {images.map((image, index) => {
              console.log(image)
              return !image.childImageSharp ? (
                <video
                  autoPlay
                  muted
                  playsInline
                  loop
                  className="max-h-[600px] object-cover w-full"
                >
                  <source src={image.publicURL} type="video/mp4" />
                  브라우저가 비디오를 지원하지 않습니다.
                </video>
              ) : (
                <GatsbyImage
                  image={image.childImageSharp.gatsbyImageData}
                  alt={"image"}
                  key={index}
                  objectFit="contain"
                  class="md:max-w-[30%]"
                />
              )
            })}
          </section>
        </div>
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
        location
        images {
          publicURL
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: BLURRED
              aspectRatio: 0.75 # 모바일 세로 3:4 비율
              formats: [AUTO, WEBP]
            )
          }
        }
        thumbnail {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
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
