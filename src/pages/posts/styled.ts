import styled from "styled-components"
import tw from "twin.macro"
// import { contentMaxWidth, MOBILE_MEDIA_QUERY } from "./const"

const CardWrapper = styled.div`
  display: flex;
  width: 100%;
  column-gap: 20px;
  height: calc(100vh - 9.5rem);
  overflow: auto;
  scroll-snap-type: y mandatory;

  ${tw`px-8`}
`

export default CardWrapper
