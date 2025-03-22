import React, { useCallback, useEffect, useState } from "react"
import DevContainer from "components/MainCard/dev"
import MasonryLayout from "components/MainCard/lifeLog"
import Banner from "components/Banner"

const MainCardWrapper: React.FC = ({ posts, siteTitle }: any) => {
  const [devPosts, setDevPosts] = useState([])
  const [lifeLogPosts, setLifeLogPosts] = useState([])

  const [currentCategory, setCurrentCategory] = useState(
    Number(sessionStorage.getItem("current")) || 1
  )
  console.log("currentCategory: ", currentCategory)

  const selectCategory = (value: number) => {
    setCurrentCategory(value)

    sessionStorage.setItem("current", value.toString())
  }

  useEffect(() => {
    setDevPosts(
      posts.filter((post: any) => post.node.frontmatter.mainCategory === "Dev")
    )
    setLifeLogPosts(
      posts.filter(
        (post: any) => post.node.frontmatter.mainCategory === "LifeLog"
      )
    )
  }, [posts])

  return (
    <div>
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
    </div>
  )
}

export default MainCardWrapper
