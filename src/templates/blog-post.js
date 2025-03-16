import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../layout"
// import Layout from "../components/layout"
import Seo from "../components/seo"

export default function BlogPostTemplate({ data }) {
  console.log("data: ", data)
  // const post = data.markdownRemark

  return (
    // <Layout location={"/"} title={"dfsfssd"}>
    //   <div>
    //     <h1>{post.frontmatter.title}</h1>
    //     <div dangerouslySetInnerHTML={{ __html: post.html }} />
    //   </div>
    // </Layout>
    <div>asdf</div>
  )
}

// export const Head = ({ data: { markdownRemark: post } }) => {
//   return (
//     <Seo
//       title={post.frontmatter.title}
//       description={post.frontmatter.description || post.excerpt}
//     />
//   )
// }

// export default BlogPostTemplate

// export const query = graphql`
//   query ($slug: String!) {
//     markdownRemark(frontmatter: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         title
//       }
//     }
//   }
// `
