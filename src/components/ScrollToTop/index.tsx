import { ArrowUp } from "lucide-react"
import React, { useState, useEffect } from "react"
import { Button } from "../ui/button"

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  // 스크롤 위치에 따라 버튼 표시 여부 결정
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // 최상단으로 스크롤 함수
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 rounded-none transition-all duration-300 ease-in-out bg-black group ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <ArrowUp className="text-white group-hover:text-black" />
    </Button>
  )
}

export default ScrollToTopButton
