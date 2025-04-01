import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { Dialog, DialogContent, DialogTrigger } from "components/ui/dialog"
import { AnimatePresence, motion } from "framer-motion"
import { graphql, Link, useStaticQuery } from "gatsby"
import { Search } from "lucide-react"
import React, { useMemo, useState } from "react"
import { useGatsbyPluginFusejs } from "react-use-fusejs"

const SearchComponent = () => {
  const [query, setQuery] = useState("")

  // Gatsby에서 Fuse.js 데이터를 가져오기
  const data = useStaticQuery(graphql`
    {
      fusejs {
        index
        data
      }
    }
  `)

  // react-use-fusejs 훅을 사용하여 검색 결과 가져오기
  const results = useGatsbyPluginFusejs(query, data.fusejs)

  const listVariants = {
    hidden: { opacity: 0, y: 5 }, // 이동 거리 줄임
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05, // 지연 시간 0.2초 -> 0.05초로 단축
        duration: 0.2, // 지속 시간 0.5초 -> 0.2초로 단축
      },
    }),
    exit: { opacity: 0, y: -5, transition: { duration: 0.3 } },
  }
  console.log("🚀 ~ SearchComponent ~ results:", results)
  return (
    <Dialog>
      <DialogTrigger>
        <MagnifyingGlassIcon />
      </DialogTrigger>
      <DialogContent>
        {/* <DialogHeader> */}
        {/* <DialogDescription> */}
        <div className="flex w-full max-w-sm items-center space-x-2">
          <div className="relative flex items-center w-full w-full md:flex-1">
            <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
              <Search size={15} />
            </div>
            <input
              type="text"
              className="pl-7 w-full p-1.5  text-gray-900 text-sm focus:outline-none focus:ring-0"
              placeholder="검색할 내용을 입력해 주세요."
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
          </div>
        </div>
        <ul
          className={`text-sm gap-y-4 flex flex-col ${
            results.length === 0 ? "mt-0" : "mt-4"
          }`}
        >
          <AnimatePresence>
            {results.map((result: any, index: number) => (
              <motion.li
                key={result.item.id}
                custom={index}
                variants={listVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Link to={result.item.slug}>{result.item.title}</Link>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
        {/* </DialogDescription> */}
        {/* </DialogHeader> */}
      </DialogContent>
    </Dialog>
  )
}
export default SearchComponent
