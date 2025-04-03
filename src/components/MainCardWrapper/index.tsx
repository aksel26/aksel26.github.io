import Banner from "components/Banner"
import Footer from "components/Footer"
import DevContainer from "components/MainCard/dev"
import MasonryLayout from "components/MainCard/lifeLog"
import React, { useEffect, useState } from "react"

const MainCardWrapper: React.FC = ({ posts, siteTitle }: any) => {
  const [devPosts, setDevPosts] = useState([])
  const [lifeLogPosts, setLifeLogPosts] = useState([])
  const [currentCategory, setCurrentCategory] = useState(1)

  const selectCategory = (value: number) => setCurrentCategory(value)

  useEffect(() => {
    setDevPosts(
      posts
        .filter((post: any) => post.node.frontmatter.mainCategory === "Dev")
        .slice(0, 6)
    )
    setLifeLogPosts(
      posts.filter(
        (post: any) => post.node.frontmatter.mainCategory === "LifeLog"
      )
    )
  }, [posts])

  return (
    <div className="relative">
      <Banner
        selectCategory={selectCategory}
        currentCategory={currentCategory}
        siteTitle={siteTitle}
      />
      {currentCategory === 1 ? (
        <DevContainer posts={devPosts} />
      ) : (
        <MasonryLayout posts={lifeLogPosts} />
      )}

      <Footer />
    </div>
  )
}

export default MainCardWrapper
