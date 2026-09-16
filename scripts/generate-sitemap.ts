import { writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { generateSitemapXml } from "../lib/generate-sitemap-xml";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const out = path.join(root, "public", "sitemap.xml");

writeFileSync(out, generateSitemapXml(), "utf8");
console.log(`Wrote ${out}`);
