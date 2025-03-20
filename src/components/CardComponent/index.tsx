import React from "react"
import * as S from "../../styles/card"
import { Badge } from "components/ui/badge"
const CardComponent = ({ details }: any) => {
  return (
    <S.CardWrapper>
      <div className="flex flex-col gap-y-2">
        <p className="font-semibold font-base line-clamp-1">{details.title}</p>
        <p className="text-sm text-slate-400 line-clamp-2 ">
          {details.summary}
        </p>
        <div className="flex justify-between text-sm text-slate-400">
          <p>{details.date}</p>
          <div className="flex gap-x-4">
            <Badge variant="secondary">{`#${details.mainCategory}`}</Badge>
            {details.tags.map((tag: string) => (
              <Badge variant="secondary">{`#${tag}`}</Badge>
            ))}
          </div>
        </div>
      </div>
    </S.CardWrapper>
  )
}

export default CardComponent
