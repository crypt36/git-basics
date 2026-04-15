import { copyFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const clientDir = join(process.cwd(), "dist", "client");
const assetsDir = join(clientDir, "assets");

const assetFiles = readdirSync(assetsDir);
const cssFile = assetFiles.find((name) => /^styles-.*\.css$/.test(name));

const jsCandidates = assetFiles.filter((name) => /^index-.*\.js$/.test(name));
const jsFile = jsCandidates.find((name) => name.length > 0);

if (!cssFile || !jsFile) {
  throw new Error("Could not find generated CSS/JS entry in dist/client/assets");
}

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="Expires" content="0" />
    <title>Portfolio</title>
    <link rel="stylesheet" href="/assets/${cssFile}" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/assets/${jsFile}"></script>
  </body>
</html>
`;

const indexHtml = join(clientDir, "index.html");
const notFoundHtml = join(clientDir, "404.html");

writeFileSync(indexHtml, html, "utf8");
copyFileSync(indexHtml, notFoundHtml);

console.log(`Generated dist/client/index.html using ${cssFile} and ${jsFile}`);
