import React from "react"
import * as S from "../../ContentsCard/styled"
import ContensCardDev from "@/components/ContentsCard/dev"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
const FeaturedCardDev = () => {
  return (
    <div className="mt-4">
      <h4 className="pb-3 font-bold">Most Recent:Dev</h4>
      <ContensCardDev />
    </div>
  )
}

export default FeaturedCardDev
