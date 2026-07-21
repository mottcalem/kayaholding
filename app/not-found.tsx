import Link from "next/link";

export default function NotFound() {
  return (
    <section className="error-404-section">
      <div className="error-404-code">404</div>
      <div className="container error-404-content">
        <h1>Sayfa Bulunamadı</h1>
        <p>
          Aradığınız sayfa yayından kaldırılmış, adı değiştirilmiş veya geçici
          olarak kullanılamıyor olabilir. Lütfen bağlantıyı kontrol edin veya
          ana sayfaya dönün.
        </p>
        <Link href="/" className="btn-primary">
          Ana Sayfaya Dön &rarr;
        </Link>
      </div>
    </section>
  );
}
