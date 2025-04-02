import CardComponent from "../../components/CardComponent"
import Layout from "../../layout"
// import {CardWrapper} from "./styled"
import React, { useEffect, useState } from "react"
import CardWrapper from "./styled"
import { graphql, Link } from "gatsby"
import { AnimatePresence, motion } from "framer-motion"
const Posts = ({ data }: any) => {
  const [activeTab, setActiveTab] = useState(0)
  const posts = data?.allMarkdownRemark.edges

  const [result, setResult] = useState([])
  const tabs = [
    { id: 0, label: "All", content: "첫 번째 탭의 내용입니다." },
    { id: 1, label: "Dev", content: "두 번째 탭의 내용입니다." },
    { id: 2, label: "LifeLog", content: "세 번째 탭의 내용입니다." },
  ]

  useEffect(() => {
    // posts가 undefined일 경우 빈 배열로 처리
    const postsData = posts || []

    const filteredPosts =
      activeTab === 0
        ? postsData
        : postsData.filter((post: any) => {
            const category = tabs.find(tab => tab.id === activeTab)?.label
            return post.node.frontmatter.mainCategory === category
          })

    setResult(filteredPosts)
  }, [activeTab, posts]) // 의존성 배열에 activeTab과 posts 추

  return (
    <Layout>
      <div className="pt-20 text-white">
        <div className="flex gap-x-2 text-xl font-semibold py-5 tracking-wider px-8">
          <motion.div className="flex items-baseline gap-2">
            <AnimatePresence mode="wait">
              <motion.h1
                key={result.length} // key를 변경하여 값이 바뀔 때마다 새 요소로 인식
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.7 }}
                className="min-w-6"
              >
                {result.length}
              </motion.h1>
            </AnimatePresence>

            <div className="flex">
              <h1>Posts.</h1>
              <AnimatePresence mode="wait">
                <motion.h1
                  key={tabs[activeTab].label} // activeTab이 변경될 때마다 새 요소로 인식
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4 }}
                >
                  {tabs[activeTab].label}
                </motion.h1>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        <div className="flex  transition-all duration-200 py-4 px-8">
          <div className="flex gap-x-4 justify-start">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-1 px-2 font-sm text-sm transition-all duration-200 min-w-20 ${
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
        <div className="flex px-8 w-full gap-x-3 h-[calc(100vh-9.5rem)] overflow-auto snap-y snap-mandatory mobile-scroll-snap-container">
          <ul className="flex gap-10 md:gap-4 flex-wrap">
            {result.map(
              ({
                node: {
                  fields: { slug },
                  frontmatter,
                },
              }: any) => (
                <Link to={slug} key={slug} className="mobile-scroll-snap-item">
                  <CardComponent details={frontmatter} />
                </Link>
              )
            )}
          </ul>
        </div>
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
              publicURL
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
