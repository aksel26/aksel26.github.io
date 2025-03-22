import React, { useState } from "react"
import * as S from "../../styles/card"
import { Badge } from "components/ui/badge"
import { GatsbyImage } from "gatsby-plugin-image"
const CardComponent = ({ details }: any) => {
  console.log("details: ", details)

  // const thumbnail = details.thumbnail.childImageSharp.gatsbyImageData

  return (
    <S.CardWrapper>
      <div className="flex flex-col gap-y-2 md:max-w-[300px] w-full">
        {details.thumbnail.childImageSharp ? (
          <GatsbyImage
            image={details.thumbnail.childImageSharp.gatsbyImageData}
            alt={details.title}
            className="w-full rounded-sm transition-all duration-300 ease-in-out group-hover:scale-110"
          />
        ) : null}
        <div className="flex flex-col gap-y-2">
          <p className="font-semibold text-sm line-clamp-1">{details.title}</p>
          <p className="text-xs text-gray-400 line-clamp-2 ">
            {details.summary}
          </p>
          <div className="flex justify-between text-xs text-gray-400">
            <p>{details.date}</p>
            {/* <div className="flex gap-x-4">
              <Badge variant="secondary">{`#${details.mainCategory}`}</Badge>
              {details.tags.map((tag: string) => (
                <Badge variant="secondary">{`#${tag}`}</Badge>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </S.CardWrapper>
  )
}

export default CardComponent
