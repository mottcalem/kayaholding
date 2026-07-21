export type ContactLocation = {
  title: string;
  address: string;
  phone: string | null;
  fax: string | null;
};

export const officeLocations: ContactLocation[] = [
  {
    title: "KAYA HOLDİNG GENEL YÖNETİM MERKEZİ",
    address: "Kireçburnu Mh. Haydar Aliyev Cd. No:46 Sarıyer İstanbul / Türkiye",
    phone: "+90 (212) 872 55 91",
    fax: "+90 (212) 872 57 65",
  },
  {
    title: "KAYA HOTELS & RESORTS YÖNETİM MERKEZİ",
    address: "Kireçburnu Mh. Haydar Aliyev Cd. No:46 Sarıyer İstanbul / Türkiye",
    phone: "+90 (212) 872 55 91 - 872 56 29",
    fax: "+90 (212) 872 57 65",
  },
  {
    title: "KAYA MERKEZ SATIŞ OFİSİ - CCK TRAVEL",
    address: "Kireçburnu Mh. Haydar Aliyev Cd. No:46 Sarıyer İstanbul / Türkiye",
    phone: "+90 (212) 315 62 00 / 444 52 92",
    fax: "+90 (212) 241 61 20",
  },
  {
    title: "KAYA MILLENIUM İŞ MERKEZİ",
    address:
      "Cumhuriyet Mahallesi, İstanbul Caddesi Şimşek Sokak, No: 167, Kat: 14 Büyükçekmece – İstanbul / Türkiye",
    phone: "+90 (212) 872 26 36",
    fax: "+90 (212) 872 12 20",
  },
  {
    title: "B.KAYA ELEKTRİK ÜRETİM",
    address: "Tunalı Hilmi Caddesi, No: 89, Kat: 2 Kavaklıdere 06700 Ankara / Türkiye",
    phone: "+90 (312) 467 32 15 - 16",
    fax: "+90 (312) 468 15 85",
  },
  {
    title: "ABANT SU BOLU FABRİKASI",
    address: "Abant yolu 15.km Dereceörenköyü Abant - Bolu / Türkiye",
    phone: "+90 (374) 237 11 61",
    fax: "+90 (374) 237 11 65",
  },
  {
    title: "ABANT SU GÖLCÜK FABRİKASI",
    address: "Siretiye Mahallesi, Siretiye Merkez Mevkii, 82 / 2 Gölcük - Kocaeli / Türkiye",
    phone: "+90 (262) 439 63 41",
    fax: "+90 (262) 439 63 46",
  },
  {
    title: "ABANT SU BURDUR FABRİKASI",
    address:
      "Isparta Yolu Bulvarı Sakarca Mahallesi Karanenik Mevkii No:127 Ağlasun - BURDUR / TÜRKİYE",
    phone: null,
    fax: null,
  },
  {
    title: "DORUKKAYA PETROL",
    address: "Ankara - Bolu TEM Otoyolu 110. km Bolu / Türkiye",
    phone: "+90 (374) 325 10 61",
    fax: "+90 (374) 325 10 69",
  },
  {
    title: "KAYA AIR",
    address:
      "İstanbul Atatürk Havalimanı Özel Hangarlar Bölgesi Genel Havacılık Terminali 17 No’lu Hangar, Sefaköy 34295 İstanbul / Türkiye",
    phone: null,
    fax: null,
  },
];

/** Kayahotels.com iletişim sayfasındaki güncel otel bilgileri */
export const hotelLocations: ContactLocation[] = [
  {
    title: "KAYA PALAZZO SKI & MOUNTAIN RESORT",
    address: "Kartalkaya Mevkii / Bolu",
    phone: "+90 (374) 234 51 00",
    fax: "+90 (374) 234 51 20",
  },
  {
    title: "KAYA PALAZZO GOLF RESORT",
    address: "Üçkum Tepesi Belek / Antalya",
    phone: "+90 (242) 710 40 00",
    fax: "+90 (242) 710 40 40",
  },
  {
    title: "KAYA PALAZZO GOLF CLUB",
    address: "Karaoğlanoğlu, Girne / KKTC",
    phone: "+90 (850) 460 52 80",
    fax: "+90 (392) 650 80 25",
  },
  {
    title: "KAYA PALAZZO RESORT & CASINO",
    address: "Karaoğlanoğlu, Girne / KKTC",
    phone: "+90 (850) 460 52 80",
    fax: "+90 (392) 650 80 25",
  },
  {
    title: "KAYA PALAZZO HOTEL & OFFICES ANKARA",
    address: "Çankaya / Ankara (Yapım aşamasında)",
    phone: "444 52 92",
    fax: null,
  },
  {
    title: "KAYA PALAZZO BAFRA",
    address: "Bafra Turizm Bölgesi, Kuzey Kıbrıs Türk Cumhuriyeti (Yapım aşamasında)",
    phone: "444 52 92",
    fax: null,
  },
  {
    title: "DORUKKAYA SKI & MOUNTAIN RESORT",
    address: "Kartalkaya / Bolu",
    phone: "+90 (374) 234 50 26",
    fax: "+90 (374) 234 50 25",
  },
  {
    title: "KAYA ULUDAĞ",
    address: "2. Gelişim Bölgesi, Oteller Mevkii No. 2 Uludağ, Bursa / Türkiye",
    phone: "+90 (224) 285 22 88",
    fax: "+90 (224) 285 22 40",
  },
  {
    title: "KAYA ARTEMIS RESORT & CASINO",
    address: "Bafra Turizm Bölgesi Magosa / KKTC",
    phone: "+90 (850) 460 52 81",
    fax: "+90 (392) 630 60 60",
  },
  {
    title: "KAYA SIDE",
    address: "Titreyengöl Mevkii Sorgun Manavgat / Antalya",
    phone: "+90 (242) 756 90 90",
    fax: "+90 (242) 756 90 95",
  },
  {
    title: "KAYA BELEK",
    address: "Üçkum Tepesi Belek / Antalya",
    phone: "+90 (242) 725 55 00",
    fax: "+90 (242) 725 52 27",
  },
  {
    title: "KAYA GREEN PARK",
    address:
      "Ankara - Bolu TEM Otoyolu 110. km. Karayolları Dinlenme Tesisleri Karşısı / Bolu",
    phone: "+90 (374) 325 10 61",
    fax: "+90 (374) 325 10 69",
  },
  {
    title: "KAYA İZMİR THERMAL & CONVENTION",
    address: "Ilıca Mah. Zeytin Sok. No:112 Narlıdere - İzmir",
    phone: "+90 (232) 238 51 51",
    fax: "+90 (232) 238 77 99",
  },
  {
    title: "KAYA İSTANBUL FAIR & CONVENTION",
    address: "Gökevler Mah. 2317. Sk. No:1 Esenyurt / İstanbul",
    phone: "+90 (212) 866 23 00",
    fax: "+90 (212) 886 17 85",
  },
  {
    title: "KAYA GREAT NORTHERN HOTEL",
    address:
      "King's Cross St Pancras International Station, Pancras Road, London, N1C 4TB / İngiltere",
    phone: "+44 20 3388 0800",
    fax: null,
  },
];
