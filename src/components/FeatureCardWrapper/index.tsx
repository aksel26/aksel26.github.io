import React, { useCallback, useEffect, useRef, useState } from "react"
import LifeLogContainer from "../../components/FeaturedCard/daily"
import DevContainer from "../../components/FeaturedCard/dev"
import CategoryTabs from "../CategoryTabs"
import useIntersectionObserver from "../../hooks/useIntersectionObserver"

const SCROLL_OFFSET = 150

const FeatureCardWrapper: React.FC = () => {
  const [category, setCategory] = useState(1)

  const lifeLogRef = useIntersectionObserver({
    threshold: 0.1,
    debounceDelay: 100,
    onVisibilityChange: isVisible => setCategory(isVisible ? 2 : 1),
  })

  const scrollToLifeLog = useCallback(() => {
    const currentRef = lifeLogRef.current
    if (currentRef) {
      const elementPosition =
        currentRef.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: elementPosition - SCROLL_OFFSET,
        behavior: "smooth",
      })
    }
  }, [lifeLogRef])

  return (
    <div className="relative">
      <CategoryTabs
        setCategory={setCategory}
        move={scrollToLifeLog}
        category={category}
      />
      <DevContainer />
      <hr className="w-full h-1 mx-auto my-32 bg-gray-100 border-0 rounded-sm md:my-28 dark:bg-gray-700" />
      <LifeLogContainer ref={lifeLogRef} />
    </div>
  )
}

export default FeatureCardWrapper
