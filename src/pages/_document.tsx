import type { FC } from "react";

import { Head, Html, Main, NextScript } from "next/document";

const Favicon: FC = () => (
  <>
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" href="/favicon.ico" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link
      rel="apple-touch-startup-image"
      media="screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
      href="/logo.png"
    />
  </>
);

const Fonts: FC = () => (
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href={`/static/fonts/SpoqaHanSansNeo.css`} />
  </>
);

const Vendors: FC = () => (
  <>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
    />
  </>
);

const Metadatas: FC = () => (
  <>
    <link rel="manifest" href="/manifest.json" />
    <meta name="theme-color" content="#ffffff" />

    <meta
      name="viewport"
      content="initial-scale=1, width=device-width, user-scalable=no"
    />
    <meta name="apple-mobile-web-app-capable" content="yes" />

    <meta name="color-scheme" content="light" />
  </>
);

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <title>PWA</title>
        <Favicon />
        <Fonts />
        <Vendors />
        <Metadatas />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
