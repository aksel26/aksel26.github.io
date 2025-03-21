import React, { useCallback, useEffect, useState } from "react"
// import LifeLogContainer from "../MainCard/daily"
// import DevContainer from "../MainCard/dev"
import LifeLogContainer from "components/MainCard/daily"
import DevContainer from "components/MainCard/dev"
import useIntersectionObserver from "../../hooks/useIntersectionObserver"
import CategoryTabs from "../CategoryTabs"
import MasonryLayout from "components/MasonryLayout"
import { motion } from "framer-motion"
const SCROLL_OFFSET = 150

const MainCardWrapper: React.FC = ({ posts }: any) => {
  console.log("🚀 ~ posts:", posts)
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
    <div>
      {/* <CategoryTabs
        setCategory={setCategory}
        move={scrollToLifeLog}
        category={category}
      /> */}
      <div className="relative text-white mt-48">
        <div className="absolute bottom-0 left-0 right-0 h-[0.5px]">
          <motion.div
            className="h-full bg-gray-100 dark:bg-gray-700"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </div>
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute left-12 -top-8 font-black"
        >
          HM-Blog
        </motion.p>
        <ul className="flex gap-x-24 absolute left-1/2 -top-8 font-black cursor-pointer">
          <motion.li
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
            whileHover={{
              x: -5,
              transition: {
                duration: 0.2,
                delay: 0,
                exit: { duration: 0.4, delay: 0 },
              },
            }}
            onClick={() => setCategory(1)}
          >
            Dev
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1.3 }}
            whileHover={{ x: -5 }}
            onClick={() => setCategory(2)}
          >
            LifeLog
          </motion.li>
        </ul>
      </div>
      {category === 1 ? (
        <DevContainer posts={devPosts} />
      ) : (
        <MasonryLayout ref={lifeLogRef} posts={lifeLogPosts} />
      )}
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
