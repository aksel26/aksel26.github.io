import React, { useState, useEffect, forwardRef } from "react"
import { motion } from "framer-motion"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
interface MasonryLayoutProps {
  posts: any[] // 실제 posts 타입에 맞게 변경하세요 (any 대신)
}
const MasonryLayout = forwardRef<HTMLDivElement, MasonryLayoutProps>(
  (props, ref) => {
    const [columnCount, setColumnCount] = useState(4)
    const { posts } = props
    console.log("🚀 ~ 😵‍💫posts:", posts)
    // 이미지 데이터 배열 (다양한 높이를 가진 이미지)
    const images = [
      {
        id: 1,
        src: "https://picsum.photos/400/300",
        title: "로로로",
        height: 300,
      },
      {
        id: 2,
        src: "https://picsum.photos/400/420",
        title: "이미지 제목 2",
        height: 420,
      },
      {
        id: 3,
        src: "https://picsum.photos/400/250",
        title: "이미지 제목 3",
        height: 250,
      },
      {
        id: 4,
        src: "https://picsum.photos/400/380",
        title: "이미지 제목 4",
        height: 380,
      },
      {
        id: 5,
        src: "https://picsum.photos/400/280",
        title: "이미지 제목 5",
        height: 280,
      },
      {
        id: 6,
        src: "https://picsum.photos/400/340",
        title: "이미지 제목 6",
        height: 340,
      },
      {
        id: 7,
        src: "https://picsum.photos/400/220",
        title: "이미지 제목 7",
        height: 220,
      },
      {
        id: 8,
        src: "https://picsum.photos/400/320",
        title: "이미지 제목 8",
        height: 320,
      },
      {
        id: 9,
        src: "https://picsum.photos/400/270",
        title: "이미지 제목 9",
        height: 270,
      },
      {
        id: 10,
        src: "https://picsum.photos/400/350",
        title: "이미지 제목 10",
        height: 350,
      },
      {
        id: 11,
        src: "https://picsum.photos/400/230",
        title: "이미지 제목 11",
        height: 230,
      },
      {
        id: 12,
        src: "https://picsum.photos/400/400",
        title: "이미지 제목 12",
        height: 400,
      },
      {
        id: 13,
        src: "https://picsum.photos/400/400",
        title: "이미지 제목 12",
        height: 400,
      },
      {
        id: 14,
        src: "https://picsum.photos/400/400",
        title: "이미지 제목 12",
        height: 400,
      },
      {
        id: 15,
        src: "https://picsum.photos/400/400",
        title: "이미지 제목 12",
        height: 400,
      },
    ]

    // 윈도우 크기에 따라 열 수 결정
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth >= 1024) {
          setColumnCount(4) // 대형 화면
        } else if (window.innerWidth >= 768) {
          setColumnCount(3) // 중형 화면
        } else if (window.innerWidth >= 640) {
          setColumnCount(2) // 소형 화면
        } else {
          setColumnCount(1) // 모바일
        }
      }

      // 초기 설정
      handleResize()

      // 윈도우 크기 변경 이벤트 리스너
      window.addEventListener("resize", handleResize)

      // 컴포넌트 언마운트 시 이벤트 리스너 제거
      return () => {
        window.removeEventListener("resize", handleResize)
      }
    }, [])

    // 이미지를 열별로 분배
    const getColumnImages = () => {
      // 각 열의 현재 높이를 추적
      const columnHeights = Array(columnCount).fill(0)
      // 각 열에 들어갈 이미지들
      const columns: any = Array.from({ length: columnCount }, () => [])

      // 각 이미지를 현재 가장 높이가 낮은 열에 추가
      posts.forEach(post => {
        // 현재 가장 높이가 낮은 열의 인덱스 찾기
        const minHeightIndex = columnHeights.indexOf(Math.min(...columnHeights))

        // 해당 열에 이미지 추가
        columns[minHeightIndex].push(post)

        // 해당 열의 높이 업데이트
        columnHeights[minHeightIndex] += post.height || 300
      })

      return columns
    }

    return (
      <section
        ref={ref}
        className="container max-w-[1024px] mx-auto md:px-0 px-8 pt-12"
      >
        {/* <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-4xl font-black mb-6 tracking-wider"
        >
          LifeLog
        </motion.h1> */}

        <div className="flex flex-col sm:flex-row">
          {getColumnImages().map((column: any, columnIndex: number) => (
            <div
              key={`column-${columnIndex}`}
              className="sm:px-2"
              style={{
                width: columnCount === 1 ? "100%" : `${100 / columnCount}%`,
              }}
            >
              {column.map((image: any, imageIndex: number) => (
                <Link to={image.node.fields.slug} key={imageIndex}>
                  <MasonryItem
                    key={imageIndex}
                    image={image}
                    columnIndex={columnIndex}
                    imageIndex={imageIndex}
                  />
                </Link>
              ))}
            </div>
          ))}
        </div>
      </section>
    )
  }
)

// 개별 Masonry 아이템 컴포넌트
const MasonryItem = ({ image, columnIndex, imageIndex }: any) => {
  console.log("🚀 ~ MasonryItem ~ image:", image)
  const [isVisible, setIsVisible] = useState(false)
  const [ref, setRef] = useState<any>(null)

  // 이미지가 뷰포트에 들어오면 감지
  useEffect(() => {
    if (!ref) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 } // 10% 이상 보이면 감지
    )

    observer.observe(ref)

    return () => {
      if (ref) observer.unobserve(ref)
    }
  }, [ref])

  // 애니메이션 변형
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.1 * imageIndex, // 각 아이템마다 약간의 지연 시간
      },
    },
  }

  return (
    <motion.div
      ref={setRef}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={itemVariants}
      className="rounded-sm overflow-hidden mb-8 group cursor-pointer"
    >
      <div
        className="w-full rounded-sm"
        style={{
          maxHeight: "400px",
          overflow: "hidden",
          height: `${
            image?.height || Math.floor(Math.random() * (400 - 300 + 1)) + 330
          }px`, // 각 이미지의 원래 높이 사용
        }}
      >
        {!image.node.frontmatter.thumbnail.childImageSharp ? (
          <video
            width="100%"
            autoPlay
            muted
            loop
            className="w-full h-full object-cover rounded-sm transition-all duration-300 ease-in-out group-hover:scale-110"
          >
            <source
              src={image.node.frontmatter.thumbnail.publicURL}
              type="video/mp4"
            />
            브라우저가 비디오를 지원하지 않습니다.
          </video>
        ) : (
          <GatsbyImage
            image={
              image.node.frontmatter.thumbnail.childImageSharp.gatsbyImageData
            }
            alt={image.node.frontmatter.title}
            className="w-full h-full object-cover rounded-sm transition-all duration-300 ease-in-out group-hover:scale-110"
          />
        )}
      </div>
      <div className="text-white">
        <h3 className="md:text-sm text-base text-right">
          {image.node.frontmatter.title}
        </h3>
        <h3 className="md:text-xs text-sm text-gray-400 text-right">
          {image.node.frontmatter.location}
        </h3>
      </div>
    </motion.div>
  )
}

export default MasonryLayout
