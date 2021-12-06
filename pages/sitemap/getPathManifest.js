const GetPathsFromManifest = (manifest, basePath, host) => {
    let routes= [];
  
    for (let [route, file] of Object.entries(manifest)) {
      if (!isNextInternalUrl(route)) {
        // Add static paths
        routes = routes.concat(route);
      } 
    }
  
    let sitemapUrls = [];
    routes.forEach((route) => {
      sitemapUrls.push({ host: host, route: route });
    });
  
    return sitemapUrls;
  };

  export default GetPathsFromManifest