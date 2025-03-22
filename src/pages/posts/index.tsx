import CardComponent from "../../components/CardComponent"
import Layout from "../../layout"
// import {CardWrapper} from "./styled"
import React, { useState } from "react"
import CardWrapper from "./styled"
import { graphql, Link } from "gatsby"

const Posts = ({ data }: any) => {
  const [activeTab, setActiveTab] = useState(0)
  console.log("🚀 ~ Posts ~ activeTab:", activeTab)
  const posts = data?.allMarkdownRemark.edges

  const tabs = [
    { id: 0, label: "All", content: "첫 번째 탭의 내용입니다." },
    { id: 1, label: "Dev", content: "두 번째 탭의 내용입니다." },
    { id: 2, label: "Life", content: "세 번째 탭의 내용입니다." },
  ]
  return (
    <Layout>
      <div className="pt-20 text-white">
        <h1 className="text-xl font-semibold py-5 tracking-wider px-8">
          Posts.{tabs[activeTab].label}
        </h1>
        <div className="flex  transition-all duration-200 py-4 px-8">
          <div className="flex gap-x-4 justify-start">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-1 px-2 font-sm text-sm transition-all duration-200 w-14 ${
                  activeTab === tab.id
                    ? " bg-black text-white"
                    : " text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        <CardWrapper>
          <ul className="flex gap-10 md:gap-4 flex-wrap">
            {posts.map(
              ({
                node: {
                  fields: { slug },
                  frontmatter,
                },
              }: any) => (
                <Link to={slug} key={slug}>
                  <CardComponent details={frontmatter} />
                </Link>
              )
            )}
          </ul>
        </CardWrapper>
      </div>
    </Layout>
  )
}

export default Posts

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
            thumbnail {
              childImageSharp {
                gatsbyImageData(aspectRatio: 1.5, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  }
`
