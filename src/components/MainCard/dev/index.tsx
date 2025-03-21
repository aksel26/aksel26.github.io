import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
const DevContainer = ({ posts }: any) => {
  return (
    <section className="mt-0 max-w-[1024px] mx-auto h-full py-24 ">
      <div
        id="contents"
        className="h-[400px] gap-y-16 gap-x-10 flex flex-col flex-wrap"
      >
        {posts.map(({ node: { frontmatter, fields } }: any, index: number) => (
          <Link to={fields.slug} key={index} className="w-full md:w-[491px] ">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: index * 0.5, duration: 0.3 },
              }}
              viewport={{ once: true }} // 한 번만 애니메이션 실행
              whileHover={{
                x: 5,
                transition: {
                  duration: 0.2,
                  ease: "easeInOut", // 부드러운 호버 효과를 위한 easing 추가
                },
              }}
              className="flex flex-col gap-y-1 cursor-pointer "
            >
              <div className="title font-bold text-white text-base truncate ">
                {frontmatter.title}
              </div>
              <p className="font-normal text-sm md:text-sm truncate text-slate-400 ">
                {frontmatter.summary}
              </p>
              <div className="flex justify-between text-xs md:text-xs text-slate-400 mt-2">
                <p>{frontmatter.date}</p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>

      <div className="flex justify-end mt-4">
        <Link to="/posts" className="text-white text-xs underline py-1 px-4">
          more
        </Link>
      </div>
    </section>
  )
}

export default DevContainer
