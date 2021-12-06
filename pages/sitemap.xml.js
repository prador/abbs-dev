import React from "react";
import fs from "fs";
import path from "path";
const Sitemap = () => {};



const GetPathsFromBuildFolder = (dir, urlList, host, basePath) => {
  const files = fs.readdirSync(dir);
  urlList = urlList || [];

  files.forEach((file) => {
    if (fs.statSync(dir + file).isDirectory()) {
      urlList = GetPathsFromBuildFolder(dir + file + '/', urlList, host, basePath);
    } else {
      if (path.extname(file) == '.json') {
        let route = path.join(dir + file.substring(0, file.length - 5));
        route = route.replace(basePath, '/');
        urlList.push({ host: host, route: route });
      }
    }
  });
  console.log(urlList);
  return urlList;
};


export const getServerSideProps = ({ res }) => {
  const baseUrl = {
    development: "http://localhost:3000",
    // production: "https://abbs.edu.in",
  }[process.env.NODE_ENV];
  GetPathsFromBuildFolder("pages/");

  const staticPages = fs
    .readdirSync("pages")
    .filter((staticPage) => {
      return ![
        "_app.js",
        "_document.js",
        "_error.js",
        "editor.js",
        "api",
        "sitemap.xml.js",
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${baseUrl}/${staticPagePath}`;
    });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
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