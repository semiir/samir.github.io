import Head from 'next/head';
import type { AppProps } from 'next/app';
import { Geist, Geist_Mono } from "next/font/google";
import '../globals.css';
    
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }: AppProps) {
  const componentName = Component.displayName || Component.name || "Home";
  const pageTitle = `${componentName} - Samir Ibrahim`;
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {/* Add other favicon sizes if needed */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <title>{pageTitle}</title>
        <meta name="description" content="Portfolio of Samir Ibrahim, web designer, web developer, seo, frontend developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;