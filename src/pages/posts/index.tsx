import CardComponent from "../../components/CardComponent"
import Layout from "../../layout"
// import {CardWrapper} from "./styled"
import React, { useState } from "react"
import CardWrapper from "./styled"

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
      <h1 className="text-4xl font-bold my-10 tracking-wider">
        Posts.{tabs[activeTab].label}
      </h1>
      <div className="flex  transition-all duration-200">
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
      <CardWrapper>
        <ul className="">
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
    </Layout>
  )
}

export default Posts
