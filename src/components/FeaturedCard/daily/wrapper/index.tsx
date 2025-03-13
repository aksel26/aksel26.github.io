import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
interface TCardWrapper {
  category: string
  contents: any[]
  scroll?: any
}

export const VerticalCardWrapper = ({
  category,
  contents,
  scroll,
}: TCardWrapper) => {
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
    (edge: any) => edge.node.relativePath === `${category.toLowerCase()}.jpg`
  )
  const image = imageNode ? getImage(imageNode.node) : null

  return (
    <div className="md:flex gap-x-10 items-start md:mt-0  ">
      <div className="md:w-[22%] bg-slate-100 h-full relative md:sticky md:top-64 sticky top-14 z-10">
        {image ? (
          <GatsbyImage
            image={image}
            alt={category}
            className="opacity-60 h-32 sm:h-32 md:h-96"
          />
        ) : (
          <p>이미지 불러오기 오류</p>
        )}

        <p className="absolute bottom-3 left-8 text-white font-bold  text-4xl md:text-6xl tracking-wider">
          {category}
        </p>
      </div>
      <div className="flex flex-1 flex-col gap-y-12 mx-auto mt-12 md:mt-0 px-8 md:px-0 md:pb-0 pb-8">
        {contents.map((content: any, index: number) => (
          <div className="flex items-center gap-x-5 md:gap-x-8  " key={index}>
            <img
              src="https://picsum.photos/300"
              alt="img"
              className="w-[80px] h-[80px] md:w-[150px] md:h-[150px] grayscale hover:grayscale-0  "
            />

            <div className="flex flex-col gap-y-4 md:gap-y-4 justify-around  ">
              <div className="flex flex-col  gap-y-2 md:gap-y-5 ">
                <p className="font-semibold text-md md:text-xl line-clamp-1">
                  {content.title}
                </p>
                <p className="font-normal text-sm md:text-base line-clamp-2 text-slate-400 ">
                  {content.subscription}
                </p>
              </div>
              <div className="flex flex-col">
                <hr className="w-full h-[0.1rem] mx-auto mb-3 bg-gray-100 border-0 rounded-sm dark:bg-gray-700 hidden md:block" />
                <div className="flex justify-between text-xs md:text-sm text-slate-400 ">
                  <p>{content.date}</p>
                  <p>{content.tag}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
