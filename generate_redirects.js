import { promises as fs } from "fs";

const redirects = ["/* /index.html 200"];

const redirectsFilePath = "dist/_redirects";

const redirectsContent = redirects.join("\n");

fs.writeFile(redirectsFilePath, redirectsContent)
  .then(() => console.log("Generated _redirects file for Netlify."))
  .catch((error) => console.error("Error generating _redirects file:", error));
