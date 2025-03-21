import React from "react"

const Banner = ({ siteTitle }: any) => {
  return (
    <div className="w-full pt-24 pb-12 px-8 text-white">
      <h1 className="text-xl font-extrabold mb-3">{siteTitle}</h1>

      {/* <div className="flex flex-col gap-y-3">
        <p className="text-gray-400">
          코드처럼 깔끔하고 오류 없는 일상을 '디버깅'하듯, 취미와 개발을
          조화롭게 균형을 잡아가는 삶을 기록합니다.
        </p>
      </div> */}
    </div>
  )
}

export default Banner
