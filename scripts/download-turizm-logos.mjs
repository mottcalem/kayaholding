import fs from "fs";
import path from "path";
import { createHash } from "crypto";

const OUT = path.resolve(import.meta.dirname, "../public/img/turizm");
const MANIFEST = path.join(OUT, "sources.json");

const assets = [
  { file: "palazzo-brand.png", url: "https://kayaholding.com.tr/images/palazzo.png" },
  { file: "hotels-brand.png", url: "https://kayaholding.com.tr/images/hotels.png" },
  { file: "palazzo-01.png", url: "https://kayaholding.com.tr/uploads/4434aa88-c437-4251-9536-d7545bca5937.png" },
  { file: "palazzo-02.png", url: "https://kayaholding.com.tr/uploads/8d0a8cb4-ac2f-4419-aae5-9d6b952cb7f8.png" },
  { file: "palazzo-03.png", url: "https://kayaholding.com.tr/uploads/9c72db2d-007d-4877-84ce-e3eb24a7eec9.png" },
  { file: "palazzo-04.png", url: "https://kayaholding.com.tr/uploads/92337afc-78b1-4266-a1b8-7b316f9f6058.png" },
  { file: "palazzo-05.png", url: "https://kayaholding.com.tr/uploads/b3635fff-9c54-455a-b1cc-02cd9db4bf4b.png" },
  { file: "palazzo-06.png", url: "https://kayaholding.com.tr/uploads/ankara.59y7s.png" },
  { file: "kaya-01.png", url: "https://kayaholding.com.tr/uploads/cc3189cb-9433-430c-a156-a7d7f3f923e3.png" },
  { file: "kaya-02.png", url: "https://kayaholding.com.tr/uploads/8704c177-39ca-4793-955b-bccd8e62f1e0.png" },
  { file: "kaya-03.png", url: "https://kayaholding.com.tr/uploads/e9b9f817-58b3-45f7-9d65-6b528f366024.png" },
  { file: "kaya-04.png", url: "https://kayaholding.com.tr/uploads/57d99163-bc3d-45b4-b832-292e548e6ee7.png" },
  { file: "kaya-05.png", url: "https://kayaholding.com.tr/uploads/acca8c59-4217-489d-8f10-c52797c6f3cb.png" },
  { file: "kaya-06.png", url: "https://kayaholding.com.tr/uploads/2c8b3415-3522-4b16-8108-f3f8460082c0.png" },
  { file: "kaya-07.png", url: "https://kayaholding.com.tr/uploads/3f8f30fa-d1e6-4915-9659-20641982558f.png" },
  { file: "kaya-08.png", url: "https://kayaholding.com.tr/uploads/0ca09cf3-cca7-4030-9aea-ba4067b977ce.png" },
  { file: "gnh-logo.webp", url: "https://kayagnh.dmbyazilim.com/img/basic/logo-sticky.webp" },
];

async function fetchBuffer(url) {
  const res = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (compatible; KayaHoldingAssetSync/1.0)",
      Referer: "https://kayaholding.com.tr/",
    },
    redirect: "follow",
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 200) throw new Error("too small");
  return buf;
}

async function fetchWithFallback(originalUrl) {
  const attempts = [
    originalUrl,
    `https://web.archive.org/web/2025id_/${originalUrl}`,
  ];
  let lastErr;
  for (const url of attempts) {
    try {
      return { buf: await fetchBuffer(url), from: url };
    } catch (e) {
      lastErr = e;
    }
  }
  throw lastErr;
}

if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

const results = {};
for (const { file, url } of assets) {
  const dest = path.join(OUT, file);
  process.stdout.write(`Downloading ${file}... `);
  try {
    const { buf, from } = await fetchWithFallback(url);
    fs.writeFileSync(dest, buf);
    results[file] = { ok: true, bytes: buf.length, from, sha256: createHash("sha256").update(buf).digest("hex").slice(0, 12) };
    console.log(`ok (${buf.length} bytes)`);
  } catch (e) {
    results[file] = { ok: false, error: String(e.message || e), url };
    console.log("FAILED");
  }
}

fs.writeFileSync(MANIFEST, JSON.stringify(results, null, 2));
const failed = Object.values(results).filter((r) => !r.ok).length;
console.log(`\nDone. ${Object.keys(results).length - failed}/${Object.keys(results).length} saved to public/img/turizm/`);
process.exit(failed ? 1 : 0);
