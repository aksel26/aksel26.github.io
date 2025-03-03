import React from "react"
import * as S from "../../ContentsCard/styled"
import ContensCardDev from "@/components/ContentsCard/dev"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
const FeaturedCardDev = () => {
  return (
    <div className="mt-4">
      <h4 className="pb-3 font-bold">Most Recent:Dev</h4>
      <div className="flex gap-x-2 ">
        <img
          src="https://picsum.photos/150/350"
          alt="temp"
          className="max-h-[350px]"
        />
        <ContensCardDev />
      </div>
    </div>
  )
}

export default FeaturedCardDev
