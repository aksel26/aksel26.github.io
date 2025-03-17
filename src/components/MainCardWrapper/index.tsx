import React, { useCallback, useEffect, useState } from "react"
// import LifeLogContainer from "../MainCard/daily"
// import DevContainer from "../MainCard/dev"
import LifeLogContainer from "components/MainCard/daily"
import DevContainer from "components/MainCard/dev"
import useIntersectionObserver from "../../hooks/useIntersectionObserver"
import CategoryTabs from "../CategoryTabs"

const SCROLL_OFFSET = 150

const MainCardWrapper: React.FC = ({ posts }: any) => {
  const [category, setCategory] = useState(1)

  const lifeLogRef = useIntersectionObserver({
    threshold: 0.1,
    debounceDelay: 100,
    onVisibilityChange: isVisible => setCategory(isVisible ? 2 : 1),
  })

  const scrollToLifeLog = useCallback(() => {
    const currentRef = lifeLogRef.current
    if (currentRef) {
      const elementPosition =
        currentRef.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: elementPosition - SCROLL_OFFSET,
        behavior: "smooth",
      })
    }
  }, [lifeLogRef])

  const [devPosts, setDevPosts] = useState([])
  const [lifeLogPosts, setLifeLogPosts] = useState([])

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
    <div className="relative">
      <CategoryTabs
        setCategory={setCategory}
        move={scrollToLifeLog}
        category={category}
      />
      <DevContainer posts={devPosts} />
      <hr className="w-full h-1 mx-auto my-32 bg-gray-100 border-0 rounded-sm md:my-28 dark:bg-gray-700" />
      <LifeLogContainer ref={lifeLogRef} />
    </div>
  )
}

export default MainCardWrapper
