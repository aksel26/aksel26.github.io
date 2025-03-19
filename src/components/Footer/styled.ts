import { contentMaxWidth, MOBILE_MEDIA_QUERY } from "../../layout/const"
import styled from "styled-components"

export const Wrapper = styled.div`
  max-width: ${contentMaxWidth};
  height: 200px;
  width: 100%;
  margin-top: auto;
  position: fixed;
  bottom: 0;
  z-index: -1;
  text-align: center;
  background-color: #161616;

  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 13px;
    height: 40px;
  }
`

export const Footer = styled.p`
  text-align: center;
  position: absolute;
  bottom: 20px;
  width: 100%;
  color: white;
  max-width: ${contentMaxWidth};
`

export const Link = styled.a`
  border-bottom: 1px solid ${({ theme }) => theme.color.black100};
`
