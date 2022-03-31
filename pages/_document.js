import { Html, Head, Main, NextScript } from 'next/document'
import PageBodyScripts from '../components/PageBodyScripts'
import PageHeader from '../components/PageHeader';
import {attributes} from '../content/general/index.md';

export default function Document() {
  return (
    <Html>
      <Head />
      {attributes.header_scripts ? <head dangerouslySetInnerHTML={{ __html: attributes.header_scripts }} /> : "" }
      <body>
        <Main />
        <NextScript />
        <PageBodyScripts attributes={attributes}/>
      </body>
    </Html>
  )
}
