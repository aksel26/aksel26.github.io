import React, { useState } from "react"

const CategoryTabs = ({ setCategory, category, move }: any) => {
  const selectCategory = (value: number) => {
    setCategory(value)
    if (value === 2) {
      move()
    } else if (value === 1) {
      window.scrollTo({
        top: 0, // 이동할 위치 (px)
        behavior: "smooth", // 부드러운 스크롤
      })
    }
  }

  return (
    <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 px-8 flex-nowrap py-2 md:py-6 sticky top-12 z-20 bg-white ">
      <li
        className={`inline-block px-4 py-3 rounded-sm w-full cursor-pointer transition ease-in-out ${
          category === 1
            ? "text-gray-800 font-black"
            : "hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white text-gray-300"
        }`}
        onClick={() => selectCategory(1)}
        aria-current={category === 1 ? "page" : undefined}
      >
        <div className="md:text-2xl text-xl tracking-wider">Dev</div>
      </li>
      <li
        onClick={() => selectCategory(2)}
        className={`inline-block px-4 py-3 rounded-sm w-full cursor-pointer transition ease-in-out ${
          category === 2
            ? "text-gray-800 font-black"
            : "hover:text-gray-900  dark:hover:bg-gray-800 dark:hover:text-white text-gray-300"
        }`}
      >
        <div className="md:text-2xl text-xl tracking-wider">LifeLog</div>
      </li>
    </ul>
  )
}

export default CategoryTabs
