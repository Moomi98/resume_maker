import { GlobalStyle } from "@/styles/global";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "@/stores/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
  );
}
