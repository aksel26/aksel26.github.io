import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { Link } from "gatsby"
import { Search } from "lucide-react"
import React, { useState } from "react"
import * as S from "./styled"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "components/ui/dialog"
import { motion } from "framer-motion"
import { ReactComponent as IconArrowRight } from "../../images/chevron-right.svg"
import { ReactComponent as IconArrowLeft } from "../../images/chevron-left.svg"

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <S.Wrapper>
      {/* Hamburger Button */}
      <div className="fixed top-4 right-4">
        <motion.div
          className="bg-[#161616] opacity-75 text-white flex items-center overflow-hidden justify-around"
          initial={{ width: "40px", height: "40px" }}
          animate={{
            width: isExpanded ? "250px" : "40px",
            height: "40px",
          }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 20,
            duration: 1.2,
            // ease: "easeInOut",
          }}
        >
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-[40px] h-[40px] flex items-center justify-center shrink-0"
          >
            {isExpanded ? <IconArrowRight /> : <IconArrowLeft />}
          </button>

          {/* 메뉴 항목들 */}
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center space-x-4 pl-2 pr-4 gap-x-3"
            >
              <Link className="text-xs " to="/">
                Home
              </Link>
              <Link className="text-xs " to="/posts">
                Posts
              </Link>
              <Link className="text-xs" to="/about">
                About
              </Link>

              <Dialog>
                <DialogTrigger>
                  <MagnifyingGlassIcon />
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogDescription>
                      <div className="flex w-full max-w-sm items-center space-x-2">
                        <div className="relative flex items-center w-full w-full md:flex-1">
                          <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                            <Search size={15} />
                          </div>
                          <input
                            type="text"
                            className="pl-7 w-full p-1.5  text-gray-900 text-sm focus:outline-none focus:ring-0"
                            placeholder="검색할 내용을 입력해 주세요."
                          />
                        </div>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </motion.div>
          )}
        </motion.div>
      </div>
    </S.Wrapper>
  )
}

export default Header
