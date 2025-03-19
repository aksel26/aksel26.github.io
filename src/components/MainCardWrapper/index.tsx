import React, { useCallback, useEffect, useState } from "react"
// import LifeLogContainer from "../MainCard/daily"
// import DevContainer from "../MainCard/dev"
import LifeLogContainer from "components/MainCard/daily"
import DevContainer from "components/MainCard/dev"
import useIntersectionObserver from "../../hooks/useIntersectionObserver"
import CategoryTabs from "../CategoryTabs"
import MasonryLayout from "components/MasonryLayout"

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
    <div className="relative bg-white">
      <CategoryTabs
        setCategory={setCategory}
        move={scrollToLifeLog}
        category={category}
      />
      <DevContainer posts={devPosts} />
      <hr className="w-full h-1 mx-auto my-32 bg-gray-100 border-0 rounded-sm md:my-64 dark:bg-gray-700" />
      <MasonryLayout ref={lifeLogRef} />
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-8 md:px-0">
        <div className="bg-white overflow-hidden">
          <div className="h-48 sm:h-auto md:h-50 lg:h-72 max-h-96 w-full">
            <img
              src="https://picsum.photos/400/300"
              alt="Image 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="pt-0">
            <h3 className="text-right text-sm">이미지 제목 1</h3>
          </div>
        </div>

        <div className="bg-white overflow-hidden">
          <div className="h-48 sm:h-64 md:h-72 lg:h-80 max-h-96 w-full">
            <img
              src="https://picsum.photos/400/350"
              alt="Image 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="pt-0">
            <h3 className="text-right text-sm">이미지 제목 1</h3>
          </div>
        </div>

        <div className="bg-white overflow-hidden">
          <div className="h-48 sm:h-64 md:h-72 lg:h-80 max-h-96 w-full">
            <img
              src="https://picsum.photos/400/320"
              alt="Image 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="pt-0">
            <h3 className="text-right text-sm">이미지 제목 1</h3>
          </div>
        </div>

        <div className="bg-white overflow-hidden">
          <div className="h-48 sm:h-64 md:h-72 lg:h-80 max-h-96 w-full">
            <img
              src="https://picsum.photos/400/380"
              alt="Image 4"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="pt-0">
            <h3 className="text-right text-sm">이미지 제목 1</h3>
          </div>
        </div>

        <div className="bg-white overflow-hidden">
          <div className="h-48 sm:h-64 md:h-72 lg:h-80 max-h-96 w-full">
            <img
              src="https://picsum.photos/400/340"
              alt="Image 5"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="pt-0">
            <h3 className="text-right text-sm">이미지 제목 1</h3>
          </div>
        </div>

        <div className="bg-white overflow-hidden">
          <div className="h-48 sm:h-64 md:h-72 lg:h-80 max-h-96 w-full">
            <img
              src="https://picsum.photos/400/360"
              alt="Image 6"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="pt-0">
            <h3 className="text-right text-sm">이미지 제목 1</h3>
          </div>
        </div>

        <div className="bg-white overflow-hidden">
          <div className="h-48 sm:h-64 md:h-72 lg:h-80 max-h-96 w-full">
            <img
              src="https://picsum.photos/400/330"
              alt="Image 7"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="pt-0">
            <h3 className="text-right text-sm">이미지 제목 1</h3>
          </div>
        </div>

        <div className="bg-white overflow-hidden">
          <div className="h-48 sm:h-64 md:h-72 lg:h-80 max-h-96 w-full">
            <img
              src="https://picsum.photos/400/370"
              alt="Image 8"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="pt-0">
            <h3 className="text-right text-sm">이미지 제목 1</h3>
          </div>
        </div>
      </div> */}
      {/* <LifeLogContainer ref={lifeLogRef} /> */}
    </div>
  )
}

export default MainCardWrapper
