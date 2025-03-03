import ContensCardLifeLog from "@/components/ContentsCard/daily"
import React from "react"
const FeaturedCardLifeLog = () => {
  return (
    <div className="mt-4">
      <h4 className="pb-3 font-bold">Most Recent:LifeLog</h4>
      <div className="flex gap-x-2 ">
        <ContensCardLifeLog />
        <img
          src="https://picsum.photos/150/350"
          alt="temp"
          className="max-h-[350px]"
        />
      </div>
    </div>
  )
}

export default FeaturedCardLifeLog
