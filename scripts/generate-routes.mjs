import fs from "fs";
import path from "path";

const ROOT = path.resolve(import.meta.dirname, "..");
const APP = path.join(ROOT, "app");
const manifest = JSON.parse(
  fs.readFileSync(path.join(ROOT, "content/manifest.json"), "utf8")
);

function pageTemplate(slug, meta) {
  const importPath =
    slug === "index" ? "@/lib/page-content" : "@/lib/page-content";
  const contentKey = slug;

  if (slug === "index") {
    return `import type { Metadata } from "next";
import { PageContent } from "${importPath}";

export const metadata: Metadata = {
  title: "${meta.title}",
};

export default function HomePage() {
  return <PageContent slug="${contentKey}" />;
}
`;
  }

  if (slug === "404") {
    return null;
  }

  const dir = path.join(APP, slug);
  fs.mkdirSync(dir, { recursive: true });

  return `import type { Metadata } from "next";
import { PageContent } from "${importPath}";

export const metadata: Metadata = {
  title: "${meta.title}",
};

export default function Page() {
  return <PageContent slug="${contentKey}" />;
}
`;
}

for (const [slug, meta] of Object.entries(manifest)) {
  if (slug === "index") {
    fs.writeFileSync(path.join(APP, "page.tsx"), pageTemplate(slug, meta));
    continue;
  }
  if (slug === "404") continue;
  const filePath = path.join(APP, slug, "page.tsx");
  fs.writeFileSync(filePath, pageTemplate(slug, meta));
}

console.log("Generated app routes");
