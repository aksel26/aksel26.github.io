import styled from "styled-components"
import { contentMaxWidth, MOBILE_MEDIA_QUERY } from "./const"

export const Wrapper = styled.div`
  overflow-y: scroll;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding-bottom: 61px;

  @media ${MOBILE_MEDIA_QUERY} {
    padding-bottom: 0;
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  word-break: keep-all;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-top: 60px;
  background-color: ${({ theme }) => theme.color.white100};
  box-shadow: 0 0 30px rgb(0 0 0 / 0.1);

  // @media ${MOBILE_MEDIA_QUERY} {
  //   margin-bottom: 39px;
  //   padding-bottom: 30px;
  // }
`

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 50px;
  max-width: ${contentMaxWidth};
`
