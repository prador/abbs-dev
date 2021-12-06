import fs from "fs";
import path from "path";

const ReadManifestFile = (basePath) => {
    const routes_manifest_path = path.join(basePath + '/.next/serverless/pages-manifest.json');
  
    // Read from the file
    if (fs.existsSync(routes_manifest_path)) {
      const raw_json = fs.readFileSync(routes_manifest_path);
      return JSON.parse(raw_json.toString());
    } else return null;
  };

  export default ReadManifestFile