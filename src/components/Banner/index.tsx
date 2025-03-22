import React from "react"
import { motion } from "framer-motion"
const Banner = ({ siteTitle, currentCategory, selectCategory }: any) => {
  return (
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
        {siteTitle}
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
          className={`${
            currentCategory === 1 ? "text-red-400" : "text-white"
          } `}
          onClick={() => selectCategory(1)}
        >
          Dev
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1.3 }}
          whileHover={{ x: -5 }}
          onClick={() => selectCategory(2)}
          className={`${
            currentCategory === 2 ? "text-red-400" : "text-white"
          } `}
        >
          LifeLog
        </motion.li>
      </ul>
    </div>
  )
}

export default Banner
