import { useState, useRef, useEffect, useCallback } from "react"

const useIntersectionObserver = <T extends HTMLElement = HTMLDivElement>({
  threshold = 0.1,
  debounceDelay = 100,
  onVisibilityChange,
}: {
  threshold?: number
  debounceDelay?: number
  onVisibilityChange: (isVisible: boolean) => void
}) => {
  const ref = useRef<T>(null)

  useEffect(() => {
    const currentRef = ref.current
    if (!currentRef) return

    let timeoutId: NodeJS.Timeout
    const observer = new IntersectionObserver(
      ([entry]) => {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
          onVisibilityChange(entry.isIntersecting)
        }, debounceDelay)
      },
      { threshold }
    )

    observer.observe(currentRef)
    return () => {
      observer.disconnect()
      clearTimeout(timeoutId)
    }
  }, [threshold, debounceDelay, onVisibilityChange])

  return ref
}

export default useIntersectionObserver
