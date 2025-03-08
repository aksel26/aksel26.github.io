import React, { useEffect, useState } from "react"
import { motion, useScroll } from "framer-motion"

const ScrollBackground = ({ children }: any) => {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff")
  const { scrollY } = useScroll()

  useEffect(() => {
    return scrollY.onChange(latest => {
      console.log("latest: ", latest)
      // 배경색 변경을 위한 스크롤 위치 설정
      if (latest < 600) {
        setBackgroundColor("#ffffff") // 시작 배경색 (흰색)
      } else if (latest < 3243) {
        setBackgroundColor("#ffffff") // 첫 번째 색상 변경 (연한 분홍색)
      }
    })
  }, [scrollY])
  return (
    <motion.div
      style={{
        backgroundColor,
        width: "100%",
        // minHeight: "3000px", // 충분한 스크롤 영역 확보
        transition: "background-color 0.5s ease",
      }}
    >
      {children}
    </motion.div>
  )
}

export default ScrollBackground
