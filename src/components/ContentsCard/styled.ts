import styled from "styled-components"
import tw from "twin.macro"
// import { contentMaxWidth, MOBILE_MEDIA_QUERY } from "./const"

export const Wrapper = styled.div`
  display: flex;
  ${tw`gap-x-12 mt-20`}
`

export const CardWrapper = styled.li`
  ${tw`py-2 px-4 border-solid rounded-sm`}
`
