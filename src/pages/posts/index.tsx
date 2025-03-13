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
      <div className="pt-20 ">
        <h1 className="text-4xl font-bold py-5 tracking-wider px-8">
          Posts.{tabs[activeTab].label}
        </h1>
        <div className="flex  transition-all duration-200 py-4 px-8">
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
        {/* <div className="flex gap-4  flex-wrap mb-4 justify-center md:justify-start">
        <p className=" text-sm md:text-md py-1 px-4 border border-slate-200 text-slate-600 w-32 text-center">
          All
        </p>
        <p className=" text-sm md:text-md py-1 px-4 border border-slate-200 text-slate-600 w-32 text-center">
          웹 개발
        </p>
        <p className=" text-sm md:text-md py-1 px-4 border border-slate-200 text-slate-600 w-32 text-center">
          코딩 팁과 트릭
        </p>
        <p className=" text-sm md:text-md py-1 px-4 border border-slate-200 text-slate-600 w-32 text-center">
          프로젝트 회고
        </p>
        <p className=" text-sm md:text-md py-1 px-4 border border-slate-200 text-slate-600 w-32 text-center">
          CS
        </p>
        <p className=" text-sm md:text-md py-1 px-4 border border-slate-200 text-slate-600 w-32 text-center">
          기술 소개
        </p>
        <p className=" text-sm md:text-md py-1 px-4 border border-slate-200 text-slate-600 w-32 text-center">
          프로그래밍 언어
        </p>
      </div> */}
        {/* <ScrollArea className="h-[calc(100vh-250px)] w-full"> */}
        <CardWrapper>
          <ul className="flex flex-col gap-y-8">
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
      </div>
    </Layout>
  )
}

export default Posts
