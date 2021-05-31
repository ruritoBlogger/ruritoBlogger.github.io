import "./_app.sass";

import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>るりとのポートフォリオ</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
