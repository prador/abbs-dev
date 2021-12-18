// import fs from "fs";
// import path from "path";

// const GetPathsFromBuildFolder = (dir, urlList, host, basePath) => {
//     const files = fs.readdirSync(dir);
//     urlList = urlList || [];
  
//     files.forEach((file) => {
//       if (fs.statSync(dir + file).isDirectory()) {
//         urlList = GetPathsFromBuildFolder(dir + file + '/', urlList, host, basePath);
//       } else {
//         if (path.extname(file) == '.json') {
//           let route = path.join(dir + file.substring(0, file.length - 5));
//           route = route.replace(basePath, '/');
//           urlList.push({ host: host, route: route });
//         }
//       }
//     });
  
//     return urlList;
//   };

//   export default GetPathsFromBuildFolder