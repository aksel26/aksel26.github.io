// styles/globalStyles.js
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  
  body {


    font-family: 'Gowun Batang', -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
    margin: 0;
    padding: 0;

  }
  
  ::-webkit-scrollbar {
    display: none;
  }
    
  * {
    box-sizing: border-box;
  }
`

export default GlobalStyle
