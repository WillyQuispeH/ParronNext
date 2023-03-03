import { UiProvider } from "@/context/ui";
import type { AppProps } from "next/app";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UiProvider>
      <Component {...pageProps} />
    </UiProvider>
  );
}
