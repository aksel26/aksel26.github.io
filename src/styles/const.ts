import { css } from "styled-components"
import { MOBILE_MEDIA_QUERY } from "../layout/const"

export const hoverUnderline = theme => css`
  display: inline-block;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 1px;
    bottom: -1px;
    left: 0;
    background-color: ${theme.color.black100};
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
    @media ${MOBILE_MEDIA_QUERY} {
      transform: scaleX(0);
    }
  }
`
