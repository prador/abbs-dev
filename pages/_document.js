import { Html, Head, Main, NextScript } from 'next/document'
import PageBodyScripts from '../components/PageBodyScripts'
import PageHeader from '../components/PageHeader';
import {attributes} from '../content/general/index.md';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      {attributes.header_scripts ? <head dangerouslySetInnerHTML={{ __html: attributes.header_scripts }} /> : "" }
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-136154294-1"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-136154294-1');
        `}
      </Script>

      <body>
        <Main />
        <NextScript />
        <PageBodyScripts attributes={attributes}/>
      </body>
    </Html>
  )
}
