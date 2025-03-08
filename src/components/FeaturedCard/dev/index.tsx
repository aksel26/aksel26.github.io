import React from "react"
import * as S from "../../ContentsCard/styled"
import ContensCardDev from "@/components/ContentsCard/dev"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
const FeaturedCardDev = () => {
  return (
    <div className="mt-4">
      <div className="bg-black w-max mb-4 px-8 py-2 pl-14">
        <p className=" font-bold text-3xl text-white tracking-wider">
          Recent:Dev
        </p>
      </div>
      <ContensCardDev />
      <div className="md:flex gap-x-12 mt-12 justify-between">
        <div className="flex flex-col gap-y-4 ">
          <img
            src="https://picsum.photos/150"
            alt="card"
            className="rounded-sm h-56"
          />
          <div className="font-bold text-xl line-clamp-1">
            모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적 방법으로
            근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,
          </div>
          <div className="flex justify-between text-sm text-slate-400 ">
            <p>2025.02.05</p>
            <p>Dev</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 ">
          <img
            src="https://picsum.photos/150"
            alt="card"
            className="rounded-sm h-56"
          />
          <div className="font-bold text-xl line-clamp-1">
            모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적 방법으로
            근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,
          </div>
          <div className="flex justify-between text-sm text-slate-400 ">
            <p>2025.02.05</p>
            <p>Dev</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 ">
          <img
            src="https://picsum.photos/150"
            alt="card"
            className="rounded-sm h-56"
          />
          <div className="font-bold text-xl line-clamp-1">
            모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적 방법으로
            근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,
          </div>
          <div className="flex justify-between text-sm text-slate-400 ">
            <p>2025.02.05</p>
            <p>Dev</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 ">
          <img
            src="https://picsum.photos/150"
            alt="card"
            className="rounded-sm h-56"
          />
          <div className="font-bold text-xl line-clamp-1">
            모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적 방법으로
            근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,
          </div>
          <div className="flex justify-between text-sm text-slate-400 ">
            <p>2025.02.05</p>
            <p>Dev</p>
          </div>
        </div>
        {/* <div className="flex flex-col gap-y-2">
          <img src="https://picsum.photos/200" alt="card" />
          <div className="font-bold text-xl line-clamp-1">
            모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적 방법으로
            근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,
          </div>
          <div className="flex justify-between text-sm text-slate-400 ">
            <p>2025.02.05</p>
            <p>Dev</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <img src="https://picsum.photos/200" alt="card" />
          <div className="font-bold text-xl line-clamp-1">
            모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적 방법으로
            근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,
          </div>
          <div className="flex justify-between text-sm text-slate-400 ">
            <p>2025.02.05</p>
            <p>Dev</p>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default FeaturedCardDev
