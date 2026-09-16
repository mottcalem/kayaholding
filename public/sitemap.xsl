<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <xsl:output method="html" encoding="UTF-8" indent="yes" />
  <xsl:template match="/">
    <html lang="tr">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Kaya Holding Sitemap</title>
        <style>
          body { font-family: system-ui, sans-serif; margin: 24px; color: #222; }
          h1 { font-size: 1.5rem; margin-bottom: 8px; }
          p { color: #666; margin-top: 0; }
          table { border-collapse: collapse; width: 100%; margin-top: 16px; font-size: 14px; }
          th, td { border: 1px solid #ddd; padding: 10px 12px; text-align: left; vertical-align: top; }
          th { background: #f5f5f5; }
          a { color: #ae132e; word-break: break-all; }
        </style>
      </head>
      <body>
        <h1>Kaya Holding — Sitemap</h1>
        <p>Bu dosya arama motorları içindir; tarayıcıda okunabilir önizleme gösterilir.</p>
        <table>
          <tr>
            <th>URL</th>
            <th>Son güncelleme</th>
            <th>Sıklık</th>
            <th>Öncelik</th>
          </tr>
          <xsl:for-each select="s:urlset/s:url">
            <tr>
              <td><a href="{s:loc}"><xsl:value-of select="s:loc" /></a></td>
              <td><xsl:value-of select="s:lastmod" /></td>
              <td><xsl:value-of select="s:changefreq" /></td>
              <td><xsl:value-of select="s:priority" /></td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
