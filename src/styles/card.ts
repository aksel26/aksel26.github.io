import styled from "styled-components"
import tw from "twin.macro"
// import { contentMaxWidth, MOBILE_MEDIA_QUERY } from "./const"

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  column-gap: 20px;
`

export const CardWrapper = styled.li`
  ${tw`py-2 border-solid rounded-sm`}
`
