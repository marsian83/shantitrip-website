import fs from "fs";
import path from "path";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

export default defineEventHandler(async () => {
  const files = fs.readdirSync(
    path.join(__dirname, "..", "..", "public", "images", "gallery")
  );
  const response = files.map((file) => "/images/gallery/" + file);
  return response;
});
