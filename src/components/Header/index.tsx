import { GitHubLogoIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons"
import React from "react"
import CommandMenu from "./CommandMenu"
import * as S from "./styled"
import { Link } from "gatsby"
import { Search } from "lucide-react"
import { StaticImage } from "gatsby-plugin-image"
const Header = () => {
  return (
    <S.Wrapper>
      <S.Header>
        <div className="md:mr-5 mr-3">
          <Link to="/">
            <StaticImage
              src="../../images/gatsby-icon.png"
              alt="logo"
              className="h-[34px] w-[34px]"
            />
          </Link>
        </div>
        <div className="flex gap-x-8 items-center flex-1">
          <div className="relative flex items-center w-full w-[230px] md:flex-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search size={15} />
            </div>
            <input
              type="text"
              className="pl-10 w-full p-1.5 bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500"
              placeholder="검색할 내용을 입력해 주세요."
            />
          </div>
          <Link className="text-sm" to="/posts">
            Posts
          </Link>
          <Link className="text-sm" to="/about">
            About
          </Link>

          {/* <Button variant="outline" size="icon">
          </Button> */}
        </div>
      </S.Header>
    </S.Wrapper>
  )
}

export default Header
