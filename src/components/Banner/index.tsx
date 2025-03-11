import React from "react"

const Banner = () => {
  return (
    <div className="w-full pt-24 bg-slate-100 pb-12 px-8">
      <h1 className="text-4xl font-bold mb-3">HM-Blog</h1>

      <div className="flex flex-col gap-y-3">
        <p className="text-base  text-gray-400">
          코드와 커피 향 사이를 거닐며 순간을 기록하는{" "}
          <span className="text-gray-800">프론트엔드 개발자</span>입니다.
        </p>

        <p className="text-gray-400">
          코드처럼 깔끔하고 오류 없는 일상을 '디버깅'하듯, 취미와 개발을
          조화롭게 균형을 잡아가는 삶을 기록합니다.
        </p>
      </div>
    </div>
  )
}

export default Banner
