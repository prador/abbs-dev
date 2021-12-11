import dynamic from "next/dynamic";
import Head from "next/head";

import config from "../cms/config";
import ImgCaption from "../components/cms/ImgCaption";
import TextSection from "../components/cms/TextSection";
import {RegisterFile } from '../components/cms/RegisterFile';

const CMS = dynamic(
  () =>
    import("netlify-cms-app").then((cms) => {
      cms.init({ config });
      // cms.registerEditorComponent(ImgCaption);
      // cms.registerWidget('parent', parentWidget.control, parentWidget.preview);
      cms.registerEditorComponent(TextSection);
      cms.registerEditorComponent(RegisterFile);
    }),
  {
    ssr: false,
    loading: () => <h1>Loading</h1>,
  }
);

const AdminPage = () => {
  return (
    <>
      <Head>
          <title>Content Editor | ABBS</title>
          <meta content="Content Editor | ABBS" key="title" property="og:title" />
          <meta content="Content Editor | ABBS" property="twitter:title" />
          <meta content="Content Editor | ABBS" property="og:title" />
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link href="../assets/img/favicon.ico" rel="shortcut icon" type="image/x-icon"/>
          <link rel="apple-touch-icon" sizes="180x180" href="../assets/img/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="../assets/img/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="../assets/img/favicon-16x16.png"/>
          <link rel="mask-icon" href="../assets/img/safari-pinned-tab.svg" color="#5bbad5"/>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <CMS />
    </>
  );
};

export default AdminPage;