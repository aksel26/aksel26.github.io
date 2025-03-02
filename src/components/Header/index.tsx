import React from "react"
import * as S from "./styled"
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { Button } from "../ui/button"
import CommandMenu from "./CommandMenu"

const Header = () => {
  return (
    <S.Wrapper>
      <S.Header>
        <div>LOGO</div>
        <div style={{ display: "flex", columnGap: 15, alignItems: "center" }}>
          <div>Posts</div>
          <div>About</div>
          <div>icons</div>
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
