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
