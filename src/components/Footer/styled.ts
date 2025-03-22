import {
  contentMaxWidth,
  FOOTER_HEIGHT,
  MOBILE_MEDIA_QUERY,
} from "../../layout/const"
import styled from "styled-components"

export const Wrapper = styled.footer`
  height: ${FOOTER_HEIGHT}px;
  color: white;
  font-size: 10px;
  width: 100%;
  margin-top: auto;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  text-align: center;
  background-color: #161616;
  z-index: -1;
  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 13px;
    height: 40px;
  }
`

export const Footer = styled.p`
  width: 100%;
  color: white;
`

export const Link = styled.a`
  border-bottom: 1px solid ${({ theme }) => theme.color.black100};
`
