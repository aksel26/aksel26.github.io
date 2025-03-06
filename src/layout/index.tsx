import React from "react"
import * as S from "./styled"
import { ThemeProvider } from "styled-components"
// import { theme } from "../styles/theme"
import Header from "../components/Header"
import GlobalStyle from "../styles/GlobalStyle"
import { theme } from "../styles/theme"
import ScrollToTopButton from "@/components/ScrollToTop"
// import { theme } from "@/styles/theme"

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ location, title, children }: any) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* <S.Wrapper> */}
      <S.ContentWrapper>
        <ScrollToTopButton />
        <Header />
        <S.Content>{children}</S.Content>
      </S.ContentWrapper>
      {/* </S.Wrapper> */}
    </ThemeProvider>
  )
}

export default Layout
