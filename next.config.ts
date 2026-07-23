import type { NextConfig } from "next";

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
  webpack(config, { dev }) {
    // Avoid corrupted .next/cache/webpack pack files during HMR (MODULE_NOT_FOUND / moduleId errors).
    if (dev) {
      config.cache = { type: "memory" };
    }
    return config;
  },
  async redirects() {
    return [
      { source: "/index.php", destination: "/", permanent: true },
      {
        source: "/kisisel-verilerin-korunmasi",
        destination: "/statik",
        permanent: true,
      },
      {
        source: "/en/kisisel-verilerin-korunmasi",
        destination: "/en/statik",
        permanent: true,
      },
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
