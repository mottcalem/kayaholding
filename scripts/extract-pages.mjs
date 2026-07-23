import fs from "fs";
import path from "path";

const ROOT = path.resolve(import.meta.dirname, "..");
const PHP_DIR = path.join(ROOT, "legacy-php");
const CONTENT_DIR = path.join(ROOT, "content", "tr");

const PAGE_FILES = fs
  .readdirSync(PHP_DIR)
  .filter(
    (f) =>
      f.endsWith(".php") && f !== "header.php" && f !== "footer.php"
  );

function parseMeta(source) {
  const titleMatch = source.match(/\$page_title\s*=\s*"([^"]+)"/);
  const idMatch = source.match(/\$page_id\s*=\s*"([^"]+)"/);
  const parentMatch = source.match(/\$parent_page_id\s*=\s*"([^"]+)"/);
  return {
    title: titleMatch?.[1] ?? "Kaya Holding",
    pageId: idMatch?.[1] ?? "",
    parentPageId: parentMatch?.[1] ?? "",
  };
}

function extractBody(source) {
  const start = source.indexOf("include 'header.php'");
  const end = source.indexOf("include 'footer.php'");
  if (start === -1 || end === -1) return "";
  let body = source.slice(start + "include 'header.php';".length, end).trim();
  body = body.replace(/^\?\>\s*/, "");
  return body;
}

function transformHtml(html) {
  return html
    .replace(/src="img\//g, 'src="/img/')
    .replace(/href="index\.php"/g, 'href="/"')
    .replace(/href="([^"#?]+\.php)"/g, (_, file) => {
      const slug = file.replace(/\.php$/, "");
      return `href="/${slug}"`;
    });
}

function splitScripts(html) {
  const scripts = [];
  const withoutScripts = html.replace(
    /<script[\s\S]*?<\/script>/gi,
    (match) => {
      const inner = match.replace(/<\/?script[^>]*>/gi, "").trim();
      if (inner) scripts.push(inner);
      return "";
    }
  );
  return { html: withoutScripts.trim(), scripts };
}

function slugFromFile(file) {
  return file.replace(/\.php$/, "");
}

function routeFromSlug(slug) {
  if (slug === "index") return "/";
  return `/${slug}`;
}

if (!fs.existsSync(CONTENT_DIR)) {
  fs.mkdirSync(CONTENT_DIR, { recursive: true });
}

const manifest = {};

for (const file of PAGE_FILES) {
  const source = fs.readFileSync(path.join(PHP_DIR, file), "utf8");
  const meta = parseMeta(source);
  const slug = slugFromFile(file);
  let body = extractBody(source);
  body = transformHtml(body);
  let { html, scripts } = splitScripts(body);
  html = html.replace(/^\?\>\s*/, "").replace(/<\?php\s*$/i, "").trim();

  fs.writeFileSync(path.join(CONTENT_DIR, `${slug}.html`), html);
  if (scripts.length) {
    fs.writeFileSync(
      path.join(CONTENT_DIR, `${slug}.scripts.json`),
      JSON.stringify(scripts, null, 2)
    );
  }

  manifest[slug] = {
    ...meta,
    route: routeFromSlug(slug),
    hasScripts: scripts.length > 0,
  };
}

fs.writeFileSync(
  path.join(CONTENT_DIR, "manifest.json"),
  JSON.stringify(manifest, null, 2)
);

console.log(`Extracted ${PAGE_FILES.length} pages to content/tr/`);
