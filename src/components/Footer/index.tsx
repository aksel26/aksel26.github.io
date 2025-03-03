import React from "react"
import * as S from "./styled"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <S.Wrapper>
      <S.Footer>
        <S.Link href="https://github.com/aksel26">aksel26</S.Link> — ©
        {currentYear} All rights reserved.
      </S.Footer>
    </S.Wrapper>
  )
}

export default Footer
