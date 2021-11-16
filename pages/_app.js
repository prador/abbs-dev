import "normalize.css";
import '../assets/styles/sidenav.css'
import { AppProps } from "next/app";
// NOTE: Do not move the styles dir to the src.
// They are used by the Netlify CMS preview feature.
import "../assets/styles/global.css";
import '../assets/styles/homepage.css'


export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
