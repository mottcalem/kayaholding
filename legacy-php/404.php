<?php 
$page_title = "Sayfa Bulunamadı"; 
$page_id = "404";
include 'header.php'; 
?>

    <section class="error-404-section">
        <div class="error-404-code">404</div>
        <div class="container error-404-content">
            <h1>Sayfa Bulunamadı</h1>
            <p>Aradığınız sayfa yayından kaldırılmış, adı değiştirilmiş veya geçici olarak kullanılamıyor olabilir. Lütfen bağlantıyı kontrol edin veya ana sayfaya dönün.</p>
            <!-- Yönlendirme linkini de php olarak güncelledik -->
            <a href="index.php" class="btn-primary">Ana Sayfaya Dön &rarr;</a>
        </div>
    </section>

<?php include 'footer.php'; ?>