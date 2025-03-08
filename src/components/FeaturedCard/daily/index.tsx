// import ContensCardLifeLog from "@/components/ContentsCard/daily"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const FeaturedCardLifeLog = () => {
  return (
    <div className="pt-10">
      <div className="relative">
        <StaticImage
          src="../../../images/maskingTape.png" // 컴포넌트 파일 위치 기준 상대 경로
          alt="설명"
          width={300}
          placeholder="blurred"
        />

        <p className="absolute left-5 top-3 font-bold text-3xl text-[#4CCD99] tracking-wider">
          Recent:LifeLog
        </p>
      </div>

      <div>
        <div className="flex gap-x-10 w-1/2 mx-auto mt-20 justify-center">
          <div className="relative ">
            <img
              src="https://picsum.photos/700"
              alt="lifelog"
              className="w-full h-32 "
            />
            <p className="absolute bottom-0 font-bold text-white text-2xl p-4">
              여행
            </p>
          </div>
          <div className="relative ">
            <img
              src="https://picsum.photos/700"
              alt="lifelog"
              className="w-full h-32 "
            />
            <p className="absolute bottom-0 font-bold text-white text-2xl p-4">
              음식
            </p>
          </div>

          <div className="relative ">
            <img
              src="https://picsum.photos/700"
              alt="lifelog"
              className="w-full h-32 "
            />
            <p className="absolute bottom-0 font-bold text-white text-2xl p-4">
              기타
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-y-5 w-[60%] mx-auto mt-20">
          <div className="flex items-center gap-x-8  ">
            <img
              src="https://picsum.photos/300"
              alt="img"
              className="w-[350px] h-[350px] h-72 "
            />

            <div className="flex flex-col gap-y-4 justify-around h-[350px]">
              <div className="flex flex-col gap-y-5">
                <p className="font-semibold text-xl line-clamp-1">
                  모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적
                  방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                  하며,
                </p>
                <p className="font-normal text-base line-clamp-4 text-slate-400 ">
                  모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적
                  방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                  하며,모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적
                  방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                  하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                  하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                  하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                  하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                  하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,
                </p>
              </div>
              <div className="flex flex-col">
                <hr className="w-full h-[0.1rem] mx-auto mb-3 bg-gray-100 border-0 rounded-sm dark:bg-gray-700" />
                <div className="flex justify-between text-sm text-slate-400 ">
                  <p>2025.02.05</p>
                  <p>여행</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-x-8  ">
            <img
              src="https://picsum.photos/300"
              alt="img"
              className="w-[350px] h-[350px] h-72 "
            />

            <div className="flex flex-col gap-y-4 justify-around h-[350px]">
              <div className="flex flex-col gap-y-5">
                <p className="font-semibold text-xl line-clamp-1">
                  모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적
                  방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                  하며,
                </p>
                <p className="font-normal text-base line-clamp-4 text-slate-400 ">
                  모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적
                  방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                  하며,모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적
                  방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                  하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                  하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                  하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                  하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                  하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,
                </p>
              </div>
              <div className="flex flex-col">
                <hr className="w-full h-[0.1rem] mx-auto mb-3 bg-gray-100 border-0 rounded-sm dark:bg-gray-700" />
                <div className="flex justify-between text-sm text-slate-400 ">
                  <p>2025.02.05</p>
                  <p>여행</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-x-8  ">
            <img
              src="https://picsum.photos/300"
              alt="img"
              className="w-[350px] h-[350px] h-72 "
            />

            <div className="flex flex-col gap-y-4 justify-around h-[350px]">
              <div className="flex flex-col gap-y-5">
                <p className="font-semibold text-xl line-clamp-1">
                  모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적
                  방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                  하며,
                </p>
                <p className="font-normal text-base line-clamp-4 text-slate-400 ">
                  모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적
                  방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                  하며,모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적
                  방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                  하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                  하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                  하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                  하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                  하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,
                </p>
              </div>
              <div className="flex flex-col">
                <hr className="w-full h-[0.1rem] mx-auto mb-3 bg-gray-100 border-0 rounded-sm dark:bg-gray-700" />
                <div className="flex justify-between text-sm text-slate-400 ">
                  <p>2025.02.05</p>
                  <p>여행</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedCardLifeLog
