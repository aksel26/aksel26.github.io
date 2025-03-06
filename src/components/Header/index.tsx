import { GitHubLogoIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons"
import React from "react"
import CommandMenu from "./CommandMenu"
import * as S from "./styled"
import { Link } from "gatsby"

const Header = () => {
  return (
    <S.Wrapper>
      <S.Header>
        <div>
          <Link to="/">LOGO</Link>
        </div>
        <div style={{ display: "flex", columnGap: 15, alignItems: "center" }}>
          <Link to="/posts">Posts</Link>
          <Link to="/about">About</Link>
          <Link to="https://github.com/aksel26" target="_blank">
            <GitHubLogoIcon />
          </Link>
          <CommandMenu />
          <div className="flex items-center gap-x-1">
            <MagnifyingGlassIcon />
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
              <span className="text-xs">⌘</span>K
            </kbd>
          </div>
          {/* <Button variant="outline" size="icon">
          </Button> */}
        </div>
      </S.Header>
    </S.Wrapper>
  )
}

export default Header
