import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-neutral-100 antialiased dark:bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
