import CardComponent from "../../components/CardComponent"
import Layout from "../../layout"
// import {CardWrapper} from "./styled"
import React, { useState } from "react"
import CardWrapper from "./styled"
import { ScrollArea } from "@/components/ui/scroll-area"

const Posts = () => {
  const [activeTab, setActiveTab] = useState(0)
  console.log("🚀 ~ Posts ~ activeTab:", activeTab)

  const tabs = [
    { id: 0, label: "All", content: "첫 번째 탭의 내용입니다." },
    { id: 1, label: "Dev", content: "두 번째 탭의 내용입니다." },
    { id: 2, label: "Life", content: "세 번째 탭의 내용입니다." },
  ]
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-5 mt-5 tracking-wider">
        Posts.{tabs[activeTab].label}
      </h1>
      <div className="flex  transition-all duration-200 my-4">
        <div className="flex gap-x-4 justify-start">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-1 px-2 font-sm text-sm transition-all duration-200 w-14 ${
                activeTab === tab.id
                  ? " bg-black text-white"
                  : " text-gray-500 hover:text-gray-700 hover:bg-gray-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      {/* <ScrollArea className="h-[calc(100vh-250px)] w-full"> */}
      <CardWrapper>
        <ul className="flex flex-col gap-y-4">
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </ul>
      </CardWrapper>
      {/* </ScrollArea> */}
    </Layout>
  )
}

export default Posts
