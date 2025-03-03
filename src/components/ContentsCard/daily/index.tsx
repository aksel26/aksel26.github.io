import React from "react"
import * as S from "../styled"
import { Button } from "@/components/ui/button"

const ContensCardLifeLog = () => {
  return (
    <S.Wrapper>
      <div className="w-full">
        <ul className="">
          <S.CardWrapper>
            <div className="flex flex-col gap-y-1">
              <div className="font-semibold font-base">
                orem ipsum odor amet, consectetuer adipiscing elit. Gravida
              </div>
              <p className="text-sm text-slate-400 line-clamp-2 ">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Gravida
                class id, bibendum dictum faucibus cursus penatibus. Placerat
                donec rhoncus finibus inceptos ligula; neque laoreet
                sollicitudin felis. Orci ultrices magnis justo feugiat rutrum
                tortor. Nunc duis diam taciti urna vestibulum sapien. Gravida
                facilisis dapibus torquent facilisi adipiscing; et facilisi
                turpis. Tristique aliquam posuere netus habitant non vi
              </p>
              <div className="flex justify-between text-sm text-slate-400">
                <p>2025.02.05</p>
                <p>Dev</p>
              </div>
            </div>
          </S.CardWrapper>
          <S.CardWrapper>
            <div className="flex flex-col gap-y-1">
              <div className="font-semibold font-base">
                orem ipsum odor amet, consectetuer adipiscing elit. Gravida
              </div>
              <p className="text-sm text-slate-400 line-clamp-3 ">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Gravida
                class id, bibendum dictum faucibus cursus penatibus. Placerat
                donec rhoncus finibus inceptos ligula; neque laoreet
                sollicitudin felis. Orci ultrices magnis justo feugiat rutrum
                tortor. Nunc duis diam taciti urna vestibulum sapien. Gravida
                facilisis dapibus torquent facilisi adipiscing; et facilisi
                turpis. Tristique aliquam posuere netus habitant non vi
              </p>
              <div className="flex justify-between text-sm text-slate-400">
                <p>2025.02.05</p>
                <p>Dev</p>
              </div>
            </div>
          </S.CardWrapper>
          <S.CardWrapper>
            <div className="flex flex-col gap-y-1">
              <div className="font-semibold font-base">
                orem ipsum odor amet, consectetuer adipiscing elit. Gravida
              </div>
              <p className="text-sm text-slate-400 line-clamp-3 ">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Gravida
                class id, bibendum dictum faucibus cursus penatibus. Placerat
                donec rhoncus finibus inceptos ligula; neque laoreet
                sollicitudin felis. Orci ultrices magnis justo feugiat rutrum
                tortor. Nunc duis diam taciti urna vestibulum sapien. Gravida
                facilisis dapibus torquent facilisi adipiscing; et facilisi
                turpis. Tristique aliquam posuere netus habitant non vi
              </p>
              <div className="flex justify-between text-sm text-slate-400">
                <p>2025.02.05</p>
                <p>Dev</p>
              </div>
            </div>
          </S.CardWrapper>

          <S.CardWrapper>
            <Button className="w-full rounded-none">More</Button>
          </S.CardWrapper>
        </ul>
      </div>
    </S.Wrapper>
  )
}

export default ContensCardLifeLog
