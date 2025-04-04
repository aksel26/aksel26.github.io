import React, { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import myVideoSrc from "../../images/bg3.mp4"

const FadingVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      // 비디오 재생 속도를 0.5로 설정 (절반 속도)
      videoRef.current.playbackRate = 0.5
    }
  }, [])
  return (
    <motion.div
      initial={{ opacity: 0.8 }}
      animate={{ opacity: 0.5 }}
      transition={{
        delay: 1.5,
        duration: 1,
      }}
      className="fixed inset-0 flex items-center justify-center"
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      >
        <source src={myVideoSrc} type="video/mp4" />
      </video>
      <div
        className="absolute inset-0 bg-black opacity-50"
        style={{
          mixBlendMode: "multiply",
        }}
      />
    </motion.div>
  )
}

export default FadingVideo
