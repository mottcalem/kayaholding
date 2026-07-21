<?php 
$page_title = "İletişim"; 
$page_id = "iletisim";
$parent_page_id = "";
include 'header.php'; 
?>

    <div class="page-hero">
        <div class="container">
            <h1 class="clash">İletişim</h1>
            <p>Görüş, öneri ve bilgi talepleriniz için form doldurabilir veya direkt olarak ofis ve tesislerimizle iletişime geçebilirsiniz.</p>
        </div>
    </div>

    <!-- Form & Map Section -->
    <section class="contact-main-section">
        <div class="container">
            <div class="contact-layout-grid">
                
                <!-- Contact Form (Kariyer sayfasındaki uyumlu kutu) -->
                <div class="app-form-box" style="border: 1px solid var(--border); padding: 40px; border-radius: 24px; box-shadow: 0 15px 35px rgba(0,0,0,0.03);">
                    <h3>İletişim Formu</h3>
                    <p>Size daha hızlı yardımcı olabilmemiz için lütfen formu eksiksiz doldurunuz.</p>
                    
                    <form action="#" method="POST">
                        <div class="form-grid">
                            <div class="form-group full-width">
                                <label for="name">Ad Soyad / Kurum Ünvanı</label>
                                <input type="text" id="name" name="name" required placeholder="Adınız, Soyadınız veya Kurumunuz">
                            </div>
                            <div class="form-group">
                                <label for="email">E-Posta Adresi</label>
                                <input type="email" id="email" name="email" required placeholder="ornek@mail.com">
                            </div>
                            <div class="form-group">
                                <label for="phone">Telefon Numarası</label>
                                <input type="tel" id="phone" name="phone" required placeholder="05XX XXX XX XX">
                            </div>
                            <div class="form-group full-width">
                                <label for="subject">Konu</label>
                                <input type="text" id="subject" name="subject" required placeholder="Hangi konuda iletişime geçiyorsunuz?">
                            </div>
                            <div class="form-group full-width">
                                <label for="message">Mesajınız</label>
                                <textarea id="message" name="message" rows="4" placeholder="Mesajınızı detaylı şekilde yazabilirsiniz..."></textarea>
                            </div>
                        </div>

                        <button type="submit" class="btn-primary" style="border: none; cursor: pointer; width: 100%; justify-content: center; padding: 20px; font-size: 16px;">Mesajı Gönder &rarr;</button>
                    </form>
                </div>

                <!-- Google Map -->
                <div class="contact-map-wrapper">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.8878564883477!2d29.0435133!3d41.1370211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab5b64c01d46b%3A0xc3fce7e0de969f65!2zS2lyZcOnYnVybHUsIEhheWRhciBBbGl5ZXYgQ2QuIE5vOjQ2LCAzNDQ1NyBTYXLEsXllci_EsHN0YW5idWw!5e0!3m2!1str!2str!4v1714470000000!5m2!1str!2str" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </div>
        </div>
    </section>

    <!-- All Locations Grid Section -->
    <section class="locations-section">
        <div class="container">
            <h2 class="section-title">Ofislerimiz ve Tesislerimiz</h2>
            
            <div class="locations-grid">
                <!-- Dinamik Kart Verileri -->
                <script>
                    const locations = [
                        { title: "KAYA HOLDİNG GENEL YÖNETİM MERKEZİ", address: "Kireçburnu Mh. Haydar Aliyev Cd. No:46 Sarıyer İstanbul / Türkiye", phone: "+90 (212) 872 55 91", fax: "+90 (212) 872 57 65" },
                        { title: "KAYA HOTELS & RESORTS YÖNETİM MERKEZİ", address: "Kireçburnu Mh. Haydar Aliyev Cd. No:46 Sarıyer İstanbul / Türkiye", phone: "+90 (212) 872 55 91 - 872 56 29", fax: "+90 (212) 872 57 65" },
                        { title: "KAYA MERKEZ SATIŞ OFİSİ - CCK TRAVEL", address: "Kireçburnu Mh. Haydar Aliyev Cd. No:46 Sarıyer İstanbul / Türkiye", phone: "+90 (212) 315 62 00 / 444 52 92", fax: "+90 (212) 241 61 20" },
                        { title: "KAYA MILLENIUM İŞ MERKEZİ", address: "Cumhuriyet Mahallesi, İstanbul Caddesi Şimşek Sokak, No: 167, Kat: 14 Büyükçekmece – İstanbul / Türkiye", phone: "+90 (212) 872 26 36", fax: "+90 (212) 872 12 20" },
                        { title: "B.KAYA ELEKTRİK ÜRETİM", address: "Tunalı Hilmi Caddesi, No: 89, Kat: 2 Kavaklıdere 06700 Ankara / Türkiye", phone: "+90 (312) 467 32 15 - 16", fax: "+90 (312) 468 15 85" },
                        { title: "ABANT SU BOLU FABRİKASI", address: "Abant yolu 15.km Dereceörenköyü Abant - Bolu / Türkiye", phone: "+90 (374) 237 11 61", fax: "+90 (374) 237 11 65" },
                        { title: "ABANT SU GÖLCÜK FABRİKASI", address: "Siretiye Mahallesi, Siretiye Merkez Mevkii, 82 / 2 Gölcük - Kocaeli / Türkiye", phone: "+90 (262) 439 63 41", fax: "+90 (262) 439 63 46" },
                        { title: "ABANT SU BURDUR FABRİKASI", address: "Isparta Yolu Bulvarı Sakarca Mahallesi Karanenik Mevkii No:127 Ağlasun - BURDUR / TÜRKİYE", phone: null, fax: null },
                        { title: "DORUKKAYA PETROL", address: "Ankara - Bolu TEM Otoyolu 110. km Bolu / Türkiye", phone: "+90 (374) 325 10 61", fax: "+90 (374) 325 10 69" },
                        { title: "KAYA AIR", address: "İstanbul Atatürk Havalimanı Özel Hangarlar Bölgesi Genel Havacılık Terminali 17 No’lu Hangar, Sefaköy 34295 İstanbul / Türkiye", phone: null, fax: null }
                    ];

                    // SVG Icons
                    const mapIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`;
                    const phoneIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`;
                    const faxIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>`;

                    const locationsGrid = document.querySelector('.locations-grid');
                    if (locationsGrid) {
                        locations.forEach(loc => {
                            let cardHTML = `<div class="loc-card">
                                <h4>${loc.title}</h4>
                                <div class="loc-row">${mapIcon} <span>${loc.address}</span></div>`;
                            
                            if(loc.phone) {
                                cardHTML += `<div class="loc-row">${phoneIcon} <a href="tel:${loc.phone.replace(/[^0-9+]/g, '')}">${loc.phone}</a></div>`;
                            }
                            
                            if(loc.fax) {
                                cardHTML += `<div class="loc-row">${faxIcon} <span>${loc.fax}</span></div>`;
                            }

                            cardHTML += `</div>`;
                            locationsGrid.innerHTML += cardHTML;
                        });
                    }
                </script>
            </div>
        </div>
    </section>

<?php include 'footer.php'; ?>