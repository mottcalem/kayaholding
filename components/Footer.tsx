import Link from "next/link";

export function Footer() {
  return (
    <>
      <div className="brand-section">
        <div className="brand-track">
          <span>KAYA HOTELS</span>
          <span>KAYA İNŞAAT</span>
          <span>KAYA AIR</span>
          <span>KAYA ENERJİ</span>
          <span>KAYA SU</span>
          <span>KAYA RESIDENCE</span>
          <span>KAYA HOTELS</span>
          <span>KAYA İNŞAAT</span>
          <span>KAYA AIR</span>
          <span>KAYA ENERJİ</span>
          <span>KAYA SU</span>
          <span>KAYA RESIDENCE</span>
        </div>
      </div>

      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-logo">
              <img src="/logo.jpg" alt="Kaya Holding Logo" />
              <p
                style={{
                  color: "#666",
                  fontSize: "15px",
                  lineHeight: 1.6,
                  paddingRight: "20px",
                }}
              >
                Türkiye&apos;nin geleceğine yatırım yapan kurumsal ve vizyoner
                güç. Yarım asırlık köklü geçmişimizle sürdürülebilir büyüme
                adımları atıyoruz.
              </p>
            </div>
            <div className="footer-col">
              <h4>Kurumsal</h4>
              <ul className="footer-links two-cols">
                <li>
                  <Link href="/hakkimizda">Hakkımızda</Link>
                </li>
                <li>
                  <Link href="/misyon-vizyon">Misyon & Vizyon</Link>
                </li>
                <li>
                  <Link href="/yonetim-kurulu">Yönetim Kurulu</Link>
                </li>
                <li>
                  <Link href="/politikalar">Politikalar</Link>
                </li>
                <li>
                  <Link href="/sosyal-sorumluluk">Sosyal Sorumluluk</Link>
                </li>
                <li>
                  <Link href="/haberler">Haber & Medya</Link>
                </li>
                <li>
                  <Link href="/kariyer">Kariyer</Link>
                </li>
                <li>
                  <Link href="/iletisim">İletişim</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Sektörler</h4>
              <ul className="footer-links two-cols">
                <li>
                  <Link href="/turizm">Turizm</Link>
                </li>
                <li>
                  <Link href="/insaat-gayrimenkul">İnşaat & Gayrimenkul</Link>
                </li>
                <li>
                  <Link href="/perakende">Perakende</Link>
                </li>
                <li>
                  <Link href="/hizmet">Hizmet</Link>
                </li>
                <li>
                  <Link href="/enerji">Enerji</Link>
                </li>
                <li>
                  <Link href="/tarim">Tarım</Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            style={{
              marginTop: "60px",
              borderTop: "1px solid var(--border)",
              paddingTop: "25px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color: "#999",
              fontSize: "11px",
            }}
          >
            <div style={{ display: "flex", gap: "15px" }}>
              <p>&copy; 2026 Kaya Holding. Tüm Hakları Saklıdır.</p>
              <Link
                href="/statik"
                style={{ color: "#999", textDecoration: "underline" }}
              >
                Gizlilik Politikası
              </Link>
            </div>
            <div className="footer-social">
              <a href="#" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 1.77-6.98 6.234-.058 1.281-.072 1.688-.072 4.947s.014 3.666.072 4.947c.2 4.456 2.618 6.026 6.98 6.233 1.281.058 1.687.072 4.947.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-1.771 6.979-6.233.059-1.281.073-1.687.073-4.947s-.014-3.666-.072-4.947c-.196-4.463-2.617-6.033-6.979-6.234-1.28-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
