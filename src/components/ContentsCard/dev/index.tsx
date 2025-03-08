import React from "react"
import { CardWrapper } from "../../../styles/card"
import * as S from "../styled"

const ContensCardDev = () => {
  return (
    <S.Wrapper>
      <div className="w-[55%]">
        <CardWrapper>
          <div className="flex flex-col gap-y-3">
            <img
              src="https://picsum.photos/384/250"
              alt="thumbnailImg"
              className="w-auto h-64 rounded-sm"
            />
            <div className="font-bold text-2xl line-clamp-1">
              모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적 방법으로
              근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,
            </div>
            <div className="flex justify-between text-sm text-slate-400 ">
              <p>2025.02.05</p>
              <p>Dev</p>
            </div>
          </div>
        </CardWrapper>
      </div>
      <div className="flex-1">
        <CardWrapper>
          <div className="flex flex-col gap-y-3">
            <img
              src="https://picsum.photos/384/250"
              alt="thumbnailImg"
              className="w-auto h-64 rounded-sm"
            />
            <div className="font-bold text-2xl line-clamp-1">
              모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적 방법으로
              근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,
            </div>
            <div className="flex justify-between text-sm text-slate-400 ">
              <p>2025.02.05</p>
              <p>Dev</p>
            </div>
          </div>
        </CardWrapper>
      </div>
    </S.Wrapper>
  )
}

export default ContensCardDev
