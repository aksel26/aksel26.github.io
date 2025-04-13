import React, { useEffect, useState } from "react"
import * as S from "./styled"
import { ThemeProvider } from "styled-components"
// import { theme } from "../styles/theme"
import Header from "../components/Header"
import GlobalStyle from "../styles/GlobalStyle"
import { theme } from "../styles/theme"
import ScrollToTopButton from "components/ScrollToTop"
// import { theme } from "@/styles/theme"
import { motion, useScroll, useTransform } from "framer-motion"

type LayoutProps = {
  children: React.ReactNode
  category?: string
}

const Layout: React.FC<LayoutProps> = ({ children, category }: any) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <S.ContentWrapper>
        <ScrollToTopButton />
        <Header />
        <S.Content category={category}>{children}</S.Content>
      </S.ContentWrapper>
    </ThemeProvider>
  )
}

export default Layout
