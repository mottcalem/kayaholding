import type { NextConfig } from "next";
import path from "path";

const contentDir = path.join(process.cwd(), "content");

const phpRoutes = [
  "hakkimizda",
  "misyon-vizyon",
  "yonetim-kurulu",
  "politikalar",
  "sosyal-sorumluluk",
  "turizm",
  "insaat-gayrimenkul",
  "perakende",
  "hizmet",
  "enerji",
  "tarim",
  "haberler",
  "haber-detay",
  "kariyer",
  "iletisim",
  "statik",
];

const nextConfig: NextConfig = {
  devIndicators: false,
  webpack(config, { dev, isServer }) {
    if (dev && isServer) {
      config.plugins.push({
        apply(compiler) {
          compiler.hooks.afterCompile.tap("WatchContentHtml", (compilation) => {
            compilation.contextDependencies.add(contentDir);
          });
        },
      });
    }
    return config;
  },
    async redirects() {
    return [
      { source: "/index.php", destination: "/", permanent: true },
      { source: "/basinda-biz", destination: "/haberler", permanent: true },
      ...phpRoutes.map((route) => ({
        source: `/${route}.php`,
        destination: `/${route}`,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
