import React from "react";
import fs from "fs";
import path from "path";
import ReadManifestFile from "./sitemap/readPathFromManifest";
import GetPathsFromBuildFolder from "./sitemap/getPathFromFolder";
import GetPathsFromManifest from "./sitemap/getPathManifest";

const Sitemap = () => {};

export const getServerSideProps = ({ res }) => {
  // const baseUrl = {
  //   development: "http://localhost:3000",
  //   // production: "https://abbs.edu.in",
  // }[process.env.NODE_ENV];

  const baseUrl = process.cwd();
  const routes_manifest = ReadManifestFile(baseUrl);
  const host = "http://localhost:3000"
  const excludedRoutes= [
          "_app.js",
          "_document.js",
          "_error.js",
          "editor.js",
          "api",
        ];
  let routes = GetPathsFromManifest(routes_manifest, host);
  const pagesPath = path.join(baseUrl + '/.next/serverless/pages/');
  routes = routes.concat(GetPathsFromBuildFolder(pagesPath, [], host, pagesPath));

  routes = routes.filter((el) => !excludedRoutes.includes(el.route));

  // const staticPages = fs
  //   .readdirSync("pages")
  //   .filter((staticPage) => {
  //     return ![
  //       "_app.js",
  //       "_document.js",
  //       "_error.js",
  //       "editor.js",
  //       "api",
  //       "sitemap.xml.js",
  //     ].includes(staticPage);
  //   })
  //   .map((staticPagePath) => {
  //     return `${baseUrl}/${staticPagePath}`;
  //   });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${routes
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;