// import ContensCardLifeLog from "@/components/ContentsCard/daily"
import React, { forwardRef, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { StaticImage } from "gatsby-plugin-image"
import { VerticalCardWrapper } from "./wrapper"
const contents = [
  {
    title:
      "모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적 방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,",
    image: "https://picsum.photos/300",
    subscription:
      "모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적 방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적 방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,",
    date: "2025-02-12",
    tag: "여행",
  },
  {
    title:
      "모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적 방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,",
    image: "https://picsum.photos/300",
    subscription:
      "모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적 방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적 방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,",
    date: "2025-02-12",
    tag: "여행",
  },
  {
    title:
      "모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적 방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,",
    image: "https://picsum.photos/300",
    subscription:
      "모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적 방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적 방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,",
    date: "2025-02-12",
    tag: "여행",
  },
  {
    title:
      "모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적 방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,",
    image: "https://picsum.photos/300",
    subscription:
      "모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적 방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적 방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,",
    date: "2025-02-12",
    tag: "여행",
  },
  {
    title:
      "모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적 방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,",
    image: "https://picsum.photos/300",
    subscription:
      "모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적 방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적 방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,",
    date: "2025-02-12",
    tag: "여행",
  },
  {
    title:
      "모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적 방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,",
    image: "https://picsum.photos/300",
    subscription:
      "모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적 방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적 방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,",
    date: "2025-02-12",
    tag: "여행",
  },
]

const LifeLogContainer = forwardRef<HTMLDivElement>((props, ref) => {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })
  const y1 = useTransform(scrollYProgress, [0, 0.33], ["0%", "0%"]) // 첫 번째 이미지 고정
  const y2 = useTransform(scrollYProgress, [0.344, 0.438], ["100%", "0%"]) // 두 번째 이미지
  const y3 = useTransform(scrollYProgress, [0.618, 0.708], ["100%", "0%"]) // 세 번째 이미지
  return (
    <section ref={ref} className="md:flex md:gap-y-8 gap-x-5">
      <div
        className="sticky top-44 relative w-full h-20 md:h-96 overflow-hidden z-20 top-[112px] md:top-40"
        ref={containerRef}
      >
        {/* 첫 번째 이미지 (기본 고정) */}
        <div>
          <StaticImage
            src="../../../images/travel.jpg"
            alt="Image 1"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
          <p className="absolute left-4 bottom-4 text-white text-5xl font-extrabold">
            Travel
          </p>
        </div>
        {/* 두 번째 이미지 */}
        <motion.div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            y: y2,
          }}
        >
          <StaticImage
            src="../../../images/food.jpg"
            alt="Image 2"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <p className="absolute left-4 bottom-4 text-white text-5xl font-extrabold">
            Food
          </p>
        </motion.div>

        {/* 세 번째 이미지 */}
        <motion.div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            y: y3,
          }}
        >
          <StaticImage
            src="../../../images/etc.jpg"
            alt="Image 3"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <p className="absolute left-4 bottom-4 text-white text-5xl font-extrabold">
            Etc
          </p>
        </motion.div>
      </div>
      <div className="flex flex-col md:gap-y-24" ref={containerRef}>
        <VerticalCardWrapper category={"Travel"} contents={contents} />
        <VerticalCardWrapper category={"Food"} contents={contents} />
        <VerticalCardWrapper category={"Etc"} contents={contents} />
      </div>
      {/* <VerticalCardWrapper category={"Food"} contents={contents} />
      <VerticalCardWrapper category={"etc"} contents={contents} /> */}
    </section>
  )
})

export default LifeLogContainer
