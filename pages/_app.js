import Head from 'next/head'
import Script from 'next/script'
import "normalize.css";
import "animate.css";
import { AppProps } from "next/app";
// NOTE: Do not move the styles dir to the src.
// They are used by the Netlify CMS preview feature.
import "../assets/styles/global.css";
import '../assets/styles/homepage.css'
import '../assets/styles/search.module.css'
import '../assets/styles/sidenav.css'
import '../assets/styles/slider.css'
import '../assets/styles/breadcrumbs.css'
import '../assets/styles/pagecontent.css'
import '../assets/styles/table.css'
import '../assets/styles/footer.css'
import '../assets/styles/news-events.css'
import '../assets/styles/abbs.css'
import SimpleReactLightbox from 'simple-react-lightbox'

export default function App({ Component, pageProps }) {
  return (
  <>
    <Head>
      <link href="/static/img/favicon.ico" rel="shortcut icon" type="image/x-icon"/>
      <link rel="apple-touch-icon" sizes="180x180" href="/static/img/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/static/img/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/static/img/favicon-16x16.png"/>
      <link rel="mask-icon" href="/static/img/safari-pinned-tab.svg" color="#5bbad5"/>
      <meta name="robots" content="index, follow" />
      <meta charSet="utf-8" />
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          !function(f,b,e,v,n,t,s){ if(f.fbq)return;n=f.fbq=​function(){n.callMethod?
            n.callMethod.apply(n,​arguments):n.queue.push(​arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;​n.loaded=!0;n.version='2.0';
            n.queue=\[];t=b.createElement(​e);t.async=!0;
            t.src=v;s=b.​getElementsByTagName(e)\[0];
            s.parentNode.insertBefore(t,s)​}(window, document,'script',
            '[https://connect.facebook.net/​en_US/fbevents.js'](https://connect.facebook.net/en_US/fbevents.js'));
            fbq('init', '921464405522577');
            fbq('track', 'PageView');
          `,
        }}
      />
  </Head>
  <SimpleReactLightbox>
    <Component {...pageProps} />
  </SimpleReactLightbox>
  </>
  );
}
