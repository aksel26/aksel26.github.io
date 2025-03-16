// import ContensCardLifeLog from "@/components/ContentsCard/daily"
import React, { forwardRef } from "react"
import { VerticalCardWrapper } from "./wrapper"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
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
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              gatsbyImageData(width: 600)
            }
          }
        }
      }
    }
  `)

  const imageNode = data.allFile.edges.find(
    (edge: any) => edge.node.relativePath === `${"Food".toLowerCase()}.jpg`
  )
  const image = imageNode ? getImage(imageNode.node) : null

  return (
    <section ref={ref} className="md:flex md:gap-y-8 gap-x-5">
      <div className="md:w-full bg-slate-100 h-full relative md:sticky md:top-40 sticky top-14 z-10">
        {image ? (
          <GatsbyImage
            image={image}
            alt={"Food"}
            className="opacity-60 h-32 sm:h-32 md:h-96"
          />
        ) : (
          <p>이미지 불러오기 오류</p>
        )}

        <p className="absolute bottom-3 left-8 text-white font-bold  text-4xl md:text-6xl tracking-wider">
          Food
        </p>
      </div>
      <div className="flex flex-col md:gap-y-24">
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
