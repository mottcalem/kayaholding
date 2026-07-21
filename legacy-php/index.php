<?php 
$page_title = "Ana Sayfa"; 
$page_id = "index";
$parent_page_id = "";
include 'header.php'; 
?>

    <div class="container hero-wrapper">
        <section class="hero-frame">
            <!-- Arkaplan Poster Görseli (Video yüklenene kadar gösterilir) -->
            <img src="img/hero-poster.webp" class="hero-poster" alt="Kaya Holding HQ">
            
            <!-- Arkaplan Videosu -->
            <video class="hero-video" autoplay loop muted playsinline preload="auto">
                <source src="img/video.mp4" type="video/mp4">
            </video>

            <div class="hero-content">
                <h1 class="clash">Yarım Asrı Aşan Deneyimle Geleceğe Değer Katıyoruz</h1>
                <p>Kaya Holding; turizm, gayrimenkul, havacılık, su, enerji ve hizmet sektörlerindeki yatırımlarıyla Türkiye’den dünyaya uzanan güçlü bir marka ekosistemi oluşturur.</p>
                <a href="#sektorler" class="btn-primary">Faaliyet Alanlarımızı Keşfedin &rarr;</a>
            </div>
        </section>
    </div>

    <section id="kurumsal" class="bento-section">
        <div class="container">
            <div class="bento-grid">
                <div class="bento-item item-ceo">
                    <h3 class="clash" style="font-size: 34px;">“Güven, kalite ve sürdürülebilir büyüme anlayışıyla geleceğe yatırım yapıyoruz.”</h3>
                </div>
                <div class="bento-item item-stats">
                    <span class="clash" style="font-size: 14px;">İstihdam Gücü</span>
                    <div>
                        <div class="stat-num">3500+</div>
                        <p style="font-weight: 600;">Global Profesyonel</p>
                    </div>
                </div>
                <div class="bento-item" style="background: #fff;">
                    <span class="clash" style="color: var(--primary);">Deneyim</span>
                    <h4 class="clash" style="font-size: 42px;">50+ Yıl</h4>
                    <p style="color: #666; font-size: 14px;">1974'ten bu yana süregelen güven.</p>
                </div>
                <div class="bento-item" style="grid-column: span 2; background: #fafafa;">
                    <h4 class="clash" style="font-size: 28px;">Sürdürülebilirlik</h4>
                    <p style="color: #666; margin-top: 10px;">Gelecek nesillere daha yaşanabilir bir dünya bırakmak için karbon ayak izimizi her geçen gün azaltıyoruz.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="sektorler" class="sectors-section">
        <div class="container">
            <h2 class="clash" style="font-size: 42px; margin-bottom: 40px;">Faaliyet Alanlarımız</h2>
            <div class="sectors-grid">
                <div class="sector-card">
                    <img src="img/turizm.webp" alt="Turizm">
                    <div class="sector-overlay"><h3>Turizm</h3><p>Kaya Hotels & Resorts ile turizmde öncülük.</p></div>
                </div>
                <div class="sector-card">
                    <img src="img/insaat.webp" alt="İnşaat">
                    <div class="sector-overlay"><h3>İnşaat</h3><p>Modern mimari ve ileri mühendislik.</p></div>
                </div>
                <div class="sector-card">
                    <img src="img/perakende.webp" alt="Perakende">
                    <div class="sector-overlay"><h3>Perakende</h3><p>Global markalarla perakende dünyası.</p></div>
                </div>
                <div class="sector-card">
                    <img src="img/hizmet.webp" alt="Hizmet">
                    <div class="sector-overlay"><h3>Hizmet</h3><p>Havacılıktan lojistiğe kurumsal çözümler.</p></div>
                </div>
                <div class="sector-card">
                    <img src="img/enerji.webp" alt="Enerji">
                    <div class="sector-overlay"><h3>Enerji</h3><p>Temiz enerji ve sürdürülebilir üretim.</p></div>
                </div>
                <div class="sector-card">
                    <img src="img/tarim.webp" alt="Tarım">
                    <div class="sector-overlay"><h3>Tarım</h3><p>Modern tarım ve gıda güvenliği.</p></div>
                </div>
            </div>
        </div>
    </section>

    <section id="haberler" class="news-section">
        <div class="container">
            <div class="news-career-grid">
                <!-- Sol %60: Haberler -->
                <div class="news-wrapper">
                    <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 40px;">
                        <h2 class="clash" style="font-size: 42px;">Haberler & Medya</h2>
                        <a href="#" style="font-weight: 600; color: var(--primary);">Tüm Haberler &rarr;</a>
                    </div>
                    <div class="news-list">
                        <a href="#" class="news-item">
                            <div class="news-date">24 EKİ 2026</div>
                            <h3 class="clash news-title">Kaya Holding'den Yeni Sürdürülebilirlik Adımı</h3>
                            <div class="news-arrow">&rarr;</div>
                        </a>
                        <a href="#" class="news-item">
                            <div class="news-date">15 EYL 2026</div>
                            <h3 class="clash news-title">Turizm Sektöründe Yılın En İyi İşvereni Ödülü</h3>
                            <div class="news-arrow">&rarr;</div>
                        </a>
                        <a href="#" class="news-item">
                            <div class="news-date">03 AĞU 2026</div>
                            <h3 class="clash news-title">Avrupa'nın En Büyük Enerji Tesisini Açıyoruz</h3>
                            <div class="news-arrow">&rarr;</div>
                        </a>
                    </div>
                </div>
                
                <!-- Sağ %40: Kariyer (İK) -->
                <div class="career-wrapper">
                    <div class="career-box">
                        <div class="career-bg"></div>
                        <div class="career-content">
                            <h3 class="clash" style="font-size: 32px; margin-bottom: 15px;">Kariyer</h3>
                            <p style="font-size: 16px; opacity: 0.9; line-height: 1.6; margin-bottom: 30px;">Küresel vizyonumuzu paylaşan, yenilikçi ve dinamik ekibimizin bir parçası olun. Yeteneğinizi sınırların ötesine taşıyın.</p>
                            <a href="#" class="btn-primary" style="background: #fff; color: var(--dark); padding: 14px 28px; font-size: 15px;">Açık Pozisyonlar &rarr;</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

<?php include 'footer.php'; ?>