import { createGlobalStyle } from "styled-components";
import NotoSansKR_Black from "@/public/fonts/Noto_Sans_KR/NotoSansKR-Black.otf";
import NotoSansKR_Bold from "@/public/fonts/Noto_Sans_KR/NotoSansKR-Bold.otf";
import NotoSansKR_Light from "@/public/fonts/Noto_Sans_KR/NotoSansKR-Light.otf";
import NotoSansKR_Medium from "@/public/fonts/Noto_Sans_KR/NotoSansKR-Medium.otf";
import NotoSansKR_Regular from "@/public/fonts/Noto_Sans_KR/NotoSansKR-Regular.otf";
import NotoSansKR_Thin from "@/public/fonts/Noto_Sans_KR/NotoSansKR-Thin.otf";

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: "NotoSansKR-Black";
    font-style: normal;
    src: url("/fonts/Noto_Sans_KR/NotoSansKR-Black.otf");
  }
  @font-face {
    font-family: "NotoSansKR-Bold";
    font-style: normal;
    src: url("/fonts/Noto_Sans_KR/NotoSansKR-Bold.otf");
  }
  @font-face {
    font-family: "NotoSansKR-Light";
    font-style: normal;
    src: url("/fonts/Noto_Sans_KR/NotoSansKR-Light.otf");
  }
  @font-face {
    font-family: "NotoSansKR-Medium";
    font-style: normal;
    src: url("/fonts/Noto_Sans_KR/NotoSansKR-Medium.otf");
  }
  @font-face {
    font-family: "NotoSansKR-Regular";
    font-style: normal;
    src: url("/fonts/Noto_Sans_KR/NotoSansKR-Regular.otf");
  }
  @font-face {
    font-family: "NotoSansKR-Thin";
    font-style: normal;
    src: url("/fonts/Noto_Sans_KR/NotoSansKR-Thin.otf");
  }
*{
    box-sizing: border-box;
    font-family: "NotoSansKR-Regular";
}
  html, body {
    height: 100%;
    padding: 0;
    margin: 0;
  }
  .div, #__next{
    height: 100%;
  }

  a { cursor: pointer; text-decoration: none; }
  p {margin : 0}
`;
