import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
import PageBodyScripts from '../components/PageBodyScripts'
import PageHeader from '../components/PageHeader';
import {attributes} from '../content/general/index.md';

export default function Document() {
  return (
    <Html lang="en">
      <Head >
      {attributes.header_scripts ? <head dangerouslySetInnerHTML={{ __html: attributes.header_scripts }} /> : "" }
      <noscript><img height="1" width="1" style={{"display":"none"}} src="[https://www.facebook.com/​tr?id=921464405522577&ev=​PageView&noscript=1](https://www.facebook.com/tr?id=921464405522577&ev=PageView&noscript=1)"/></noscript>

      </Head>
      <body>
        <Main />
        <NextScript />
        <PageBodyScripts attributes={attributes}/>
      </body>
    </Html>
  )
}
