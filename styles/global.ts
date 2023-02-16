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
    src: url(${NotoSansKR_Black});
  }
  @font-face {
    font-family: "NotoSansKR-Bold";
    font-style: normal;
    src: url(${NotoSansKR_Bold});
  }
  @font-face {
    font-family: "NotoSansKR-Light";
    font-style: normal;
    src: url(${NotoSansKR_Light});
  }
  @font-face {
    font-family: "NotoSansKR-Medium";
    font-style: normal;
    src: url(${NotoSansKR_Medium});
  }
  @font-face {
    font-family: "NotoSansKR-Regular";
    font-style: normal;
    src: url(${NotoSansKR_Regular});
  }
  @font-face {
    font-family: "NotoSansKR-Thin";
    font-style: normal;
    src: url(${NotoSansKR_Thin});
  }
*{
    box-sizing: border-box;
    font-family: "NotoSansKR-Regular";
}ß
  html, body {
    height: 100%;
    padding: 0;
    margin: 0;
  }
  .div, #__next{
    height: 100%;
  }

  * { font-family: 'Spoqa Han Sans', 'Spoqa Han Sans JP', 'Sans-serif';}
  a { cursor: pointer; text-decoration: none; }
  p {margin : 0}
`;
