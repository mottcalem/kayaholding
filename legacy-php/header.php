<?php
// Her sayfada bu değişkenleri tanımlayarak başlığı ve aktif menüyü belirleyeceğiz.
// Örnek: $page_title = "Hakkımızda"; $page_id = "hakkimizda"; $parent_page_id = "kurumsal";
if (!isset($page_id)) {
    $page_id = '';
}
if (!isset($parent_page_id)) {
    $parent_page_id = '';
}
?>
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title><?php echo isset($page_title) ? $page_title . ' | Kaya Holding' : 'Kaya Holding'; ?></title>
    <link href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <link rel="icon" href="favicon.jpg" type="image/jpeg">
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header>
        <div class="container">
            <div class="header-inner">
                <a href="index.php" class="logo">
                    <img src="logo.jpg" alt="Kaya Holding Logo">
                </a>
                
                <div class="header-right">
                    <nav class="nav-desktop">
                        <a href="index.php" <?php if ($page_id === 'index') echo 'style="color: var(--primary); opacity: 1;"'; ?>>Ana Sayfa</a>
                        <div class="dropdown">
                            <a href="#" class="dropdown-toggle" <?php if ($parent_page_id === 'kurumsal') echo 'style="color: var(--primary); opacity: 1;"'; ?>>Kurumsal <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-top: 2px;"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
                            <div class="dropdown-menu">
                                <a href="hakkimizda.php" <?php if ($page_id === 'hakkimizda') echo 'style="color: var(--primary);"'; ?>>Hakkımızda</a>
                                <a href="misyon-vizyon.php" <?php if ($page_id === 'misyon-vizyon') echo 'style="color: var(--primary);"'; ?>>Misyon ve Vizyon</a>
                                <a href="yonetim-kurulu.php" <?php if ($page_id === 'yonetim-kurulu') echo 'style="color: var(--primary);"'; ?>>Yönetim Kurulu</a>
                                <a href="politikalar.php" <?php if ($page_id === 'politikalar') echo 'style="color: var(--primary);"'; ?>>Politikalar</a>
                                <a href="sosyal-sorumluluk.php" <?php if ($page_id === 'sosyal-sorumluluk') echo 'style="color: var(--primary);"'; ?>>Sosyal Sorumluluk</a>
                            </div>
                        </div>
                        <div class="dropdown">
                            <a href="#" class="dropdown-toggle" <?php if ($parent_page_id === 'faaliyetler') echo 'style="color: var(--primary); opacity: 1;"'; ?>>Faaliyetler <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-top: 2px;"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
                            <div class="dropdown-menu">
                                <a href="turizm.php" <?php if ($page_id === 'turizm') echo 'style="color: var(--primary);"'; ?>>Turizm</a>
                                <a href="insaat-gayrimenkul.php" <?php if ($page_id === 'insaat-gayrimenkul') echo 'style="color: var(--primary);"'; ?>>İnşaat & Gayrimenkul</a>
                                <a href="perakende.php" <?php if ($page_id === 'perakende') echo 'style="color: var(--primary);"'; ?>>Perakende</a>
                                <a href="hizmet.php" <?php if ($page_id === 'hizmet') echo 'style="color: var(--primary);"'; ?>>Hizmet</a>
                                <a href="enerji.php" <?php if ($page_id === 'enerji') echo 'style="color: var(--primary);"'; ?>>Enerji</a>
                                <a href="tarim.php" <?php if ($page_id === 'tarim') echo 'style="color: var(--primary);"'; ?>>Tarım</a>
                            </div>
                        </div>
                        <a href="haberler.php" <?php if ($page_id === 'haberler' || $page_id === 'haber-detay') echo 'style="color: var(--primary); opacity: 1;"'; ?>>Bizden Haberler</a>
                        <a href="kariyer.php" <?php if ($page_id === 'kariyer') echo 'style="color: var(--primary); opacity: 1;"'; ?>>Kariyer</a>
                        <a href="iletisim.php" <?php if ($page_id === 'iletisim') echo 'style="color: var(--primary); opacity: 1;"'; ?>>İletişim</a>
                    </nav>

                    <div class="header-tools nav-desktop">
                        <div class="lang-switcher">
                            <img src="https://flagcdn.com/w40/gb.png" class="lang-flag" alt="English">
                            <span>EN</span>
                        </div>
                    </div>

                    <div class="hamburger" id="nav-toggle">
                        <span></span><span></span><span></span>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <div class="mobile-menu" id="mobile-menu">
        <button class="close-menu" id="close-menu">&times;</button>
        <img src="favicon.jpg" alt="Kaya Holding Favicon" class="mobile-menu-logo">
        <ul>
            <li><a href="index.php">Ana Sayfa</a></li>
            <li class="mobile-dropdown">
                <a href="#" class="mobile-dropdown-toggle">Kurumsal <span class="arrow"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></span></a>
                <ul class="mobile-submenu">
                    <li><a href="hakkimizda.php">Hakkımızda</a></li>
                    <li><a href="misyon-vizyon.php">Misyon ve Vizyon</a></li>
                    <li><a href="yonetim-kurulu.php">Yönetim Kurulu</a></li>
                    <li><a href="politikalar.php">Politikalar</a></li>
                    <li><a href="sosyal-sorumluluk.php">Sosyal Sorumluluk</a></li>
                </ul>
            </li>
            <li class="mobile-dropdown">
                <a href="#" class="mobile-dropdown-toggle">Faaliyetler <span class="arrow"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></span></a>
                <ul class="mobile-submenu">
                    <li><a href="turizm.php">Turizm</a></li>
                    <li><a href="insaat-gayrimenkul.php">İnşaat & Gayrimenkul</a></li>
                    <li><a href="perakende.php">Perakende</a></li>
                    <li><a href="hizmet.php">Hizmet</a></li>
                    <li><a href="enerji.php">Enerji</a></li>
                    <li><a href="tarim.php">Tarım</a></li>
                </ul>
            </li>
            <li><a href="haberler.php">Bizden Haberler</a></li>
            <li><a href="kariyer.php">Kariyer</a></li>
            <li><a href="iletisim.php">İletişim</a></li>
        </ul>
        
        <div class="mobile-tools">
            <div class="lang-switcher">
                <img src="https://flagcdn.com/w40/gb.png" class="lang-flag" alt="English">
                <span>EN</span>
            </div>
        </div>
    </div>