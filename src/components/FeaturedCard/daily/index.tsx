// import ContensCardLifeLog from "@/components/ContentsCard/daily"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"
const FeaturedCardLifeLog = () => {
  return (
    <div className="pt-10">
      {/* <ScrollTitle /> */}
      <div className="bg-lime-200 w-max px-8 py-2 pl-14">
        <p className=" font-bold text-3xl text-lime-600 tracking-wider">
          Recent:LifeLog
        </p>
      </div>
      <div className="">
        <div className="flex gap-x-10 mx-auto mt-20 justify-center">
          <p className=" font-bold  text-2xl p-4">여행</p>
          <p className=" font-bold  text-2xl p-4">음식</p>

          <p className=" font-bold  text-2xl p-4">기타</p>
        </div>

        <div className="md:flex gap-x-10 items-start mt-20  ">
          <div className="md:w-[35%] bg-slate-100 h-full relative">
            <StaticImage
              src="../../../images/travel.jpg"
              alt="travel"
              className="opacity-75 h-32 sm:h-32  md:h-96"
            />
            <p className="absolute bottom-3 left-3 text-white font-bold text-8xl">
              Travel
            </p>
          </div>
          <div className="flex flex-1 flex-col gap-y-12 mx-auto mt-12 md:mt-0">
            <div className="flex items-center gap-x-8  ">
              <img
                src="https://picsum.photos/300"
                alt="img"
                className="w-[150px] h-[150px] grayscale hover:grayscale-0  "
              />

              <div className="flex flex-col gap-y-4 justify-around h-[150px] ">
                <div className="flex flex-col gap-y-5 ">
                  <p className="font-semibold text-xl line-clamp-1">
                    모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적
                    방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,
                  </p>
                  <p className="font-normal text-base line-clamp-2 text-slate-400 ">
                    모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적
                    방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적
                    방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,
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
                className="w-[150px] h-[150px]  "
              />

              <div className="flex flex-col gap-y-4 justify-around h-[150px] ">
                <div className="flex flex-col gap-y-5 ">
                  <p className="font-semibold text-xl line-clamp-1">
                    모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적
                    방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,
                  </p>
                  <p className="font-normal text-base line-clamp-2 text-slate-400 ">
                    모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적
                    방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적
                    방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,
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
                className="w-[150px] h-[150px]  "
              />

              <div className="flex flex-col gap-y-4 justify-around h-[150px] ">
                <div className="flex flex-col gap-y-5 ">
                  <p className="font-semibold text-xl line-clamp-1">
                    모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적
                    방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,
                  </p>
                  <p className="font-normal text-base line-clamp-2 text-slate-400 ">
                    모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적
                    방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적
                    방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,
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
                className="w-[150px] h-[150px]  "
              />

              <div className="flex flex-col gap-y-4 justify-around h-[150px] ">
                <div className="flex flex-col gap-y-5 ">
                  <p className="font-semibold text-xl line-clamp-1">
                    모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적
                    방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,
                  </p>
                  <p className="font-normal text-base line-clamp-2 text-slate-400 ">
                    모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적
                    방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적
                    방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,
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
                className="w-[150px] h-[150px]  "
              />

              <div className="flex flex-col gap-y-4 justify-around h-[150px] ">
                <div className="flex flex-col gap-y-5 ">
                  <p className="font-semibold text-xl line-clamp-1">
                    모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적
                    방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,
                  </p>
                  <p className="font-normal text-base line-clamp-2 text-slate-400 ">
                    모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적
                    방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적
                    방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,
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
        <div className="md:flex gap-x-10 items-start mt-20  ">
          <div className="md:w-[35%] bg-slate-100 h-full relative">
            <StaticImage
              src="../../../images/cafe.jpg"
              alt="travel"
              className="opacity-75 h-32 sm:h-32  md:h-96"
            />
            <p className="absolute bottom-3 left-3 text-white font-bold text-8xl">
              Food
            </p>
          </div>
          <div className="flex flex-1 flex-col gap-y-12 mx-auto mt-12 md:mt-0">
            <div className="flex items-center gap-x-8  ">
              <img
                src="https://picsum.photos/300"
                alt="img"
                className="w-[150px] h-[150px]  "
              />

              <div className="flex flex-col gap-y-4 justify-around h-[150px] ">
                <div className="flex flex-col gap-y-5 ">
                  <p className="font-semibold text-xl line-clamp-1">
                    모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적
                    방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,
                  </p>
                  <p className="font-normal text-base line-clamp-2 text-slate-400 ">
                    모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적
                    방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적
                    방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,
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
                className="w-[150px] h-[150px]  "
              />

              <div className="flex flex-col gap-y-4 justify-around h-[150px] ">
                <div className="flex flex-col gap-y-5 ">
                  <p className="font-semibold text-xl line-clamp-1">
                    모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적
                    방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,
                  </p>
                  <p className="font-normal text-base line-clamp-2 text-slate-400 ">
                    모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적
                    방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적
                    방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,
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
                className="w-[150px] h-[150px]  "
              />

              <div className="flex flex-col gap-y-4 justify-around h-[150px] ">
                <div className="flex flex-col gap-y-5 ">
                  <p className="font-semibold text-xl line-clamp-1">
                    모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적
                    방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,
                  </p>
                  <p className="font-normal text-base line-clamp-2 text-slate-400 ">
                    모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적
                    방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적
                    방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,
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
                className="w-[150px] h-[150px]  "
              />

              <div className="flex flex-col gap-y-4 justify-around h-[150px] ">
                <div className="flex flex-col gap-y-5 ">
                  <p className="font-semibold text-xl line-clamp-1">
                    모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적
                    방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,
                  </p>
                  <p className="font-normal text-base line-clamp-2 text-slate-400 ">
                    모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적
                    방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적
                    방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,
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
        <div className="md:flex gap-x-10 items-start mt-20  ">
          <div className="md:w-[35%] bg-slate-100 h-full relative">
            <StaticImage
              src="../../../images/etc.jpg"
              alt="etc"
              className="opacity-75 h-32 sm:h-32  md:h-96"
            />
            <p className="absolute bottom-3 left-3 text-white font-bold text-8xl">
              etc.
            </p>
          </div>
          <div className="flex flex-1 flex-col gap-y-12 mx-auto mt-12 md:mt-0">
            <div className="flex items-center gap-x-8  ">
              <img
                src="https://picsum.photos/300"
                alt="img"
                className="w-[150px] h-[150px]  "
              />

              <div className="flex flex-col gap-y-4 justify-around h-[150px] ">
                <div className="flex flex-col gap-y-5 ">
                  <p className="font-semibold text-xl line-clamp-1">
                    모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적
                    방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,
                  </p>
                  <p className="font-normal text-base line-clamp-2 text-slate-400 ">
                    모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적
                    방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적
                    방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,
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
                className="w-[150px] h-[150px]  "
              />

              <div className="flex flex-col gap-y-4 justify-around h-[150px] ">
                <div className="flex flex-col gap-y-5 ">
                  <p className="font-semibold text-xl line-clamp-1">
                    모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적
                    방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,
                  </p>
                  <p className="font-normal text-base line-clamp-2 text-slate-400 ">
                    모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적
                    방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적
                    방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,
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
                className="w-[150px] h-[150px]  "
              />

              <div className="flex flex-col gap-y-4 justify-around h-[150px] ">
                <div className="flex flex-col gap-y-5 ">
                  <p className="font-semibold text-xl line-clamp-1">
                    모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적
                    방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,
                  </p>
                  <p className="font-normal text-base line-clamp-2 text-slate-400 ">
                    모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적
                    방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적
                    방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,
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
                className="w-[150px] h-[150px]  "
              />

              <div className="flex flex-col gap-y-4 justify-around h-[150px] ">
                <div className="flex flex-col gap-y-5 ">
                  <p className="font-semibold text-xl line-clamp-1">
                    모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적
                    방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,
                  </p>
                  <p className="font-normal text-base line-clamp-2 text-slate-400 ">
                    모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적
                    방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적
                    방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,근로자의 고용의 증진과 적정임금의 보장에 노력하여야
                    하며,
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
    </div>
  )
}

export default FeaturedCardLifeLog
