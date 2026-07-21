# Kaya Holding — Next.js

Kurumsal site **Next.js (App Router)** ile çalışır. Eski PHP dosyaları `legacy-php/` altında referans olarak durur.

## Geliştirme

```bash
npm install
npm run dev
```

Tarayıcı: [http://localhost:3000](http://localhost:3000)

## PHP içeriğini güncelleme

Sayfa gövdeleri `content/*.html` dosyalarına `legacy-php/` kaynaklarından çıkarılır:

```bash
npm run extract-pages
node scripts/generate-routes.mjs
```

## Eski URL’ler

`/hakkimizda.php` gibi adresler kalıcı yönlendirme ile `/hakkimizda` adresine gider (`next.config.ts`).

## Statik dosyalar

- `public/img/` — görseller ve video
- `public/logo.jpg`, `public/favicon.jpg`
- `app/globals.css` — orijinal `style.css` (tasarım aynı)
