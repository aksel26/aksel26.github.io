import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Search } from "lucide-react"
import React from "react"
import * as S from "./styled"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "components/ui/dialog"
const Header = () => {
  return (
    <S.Wrapper>
      <S.Header>
        {/* <div className="md:mr-5 mr-3">
          <Link to="/">
            <StaticImage
              src="../../images/gatsby-icon.png"
              alt="logo"
              className="h-[34px] w-[34px]"
            />
          </Link>
        </div> */}
        <div className="flex gap-x-8 items-center">
          <Link className="text-sm" to="/posts">
            Posts
          </Link>
          <Link className="text-sm" to="/about">
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
        </div>
      </S.Header>
    </S.Wrapper>
  )
}

export default Header
