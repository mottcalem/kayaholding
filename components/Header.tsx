"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  activeDropdownStyle,
  activeStyle,
  getNavLabels,
  getNavLinks,
} from "@/lib/navigation";
import {
  getLocaleFromPathname,
  localizeHref,
  setLocaleCookie,
  switchLocalePath,
} from "@/lib/locale";
import { pathToNavContext } from "@/lib/path-context";

const Chevron = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ marginTop: 2 }}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export function Header() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const labels = getNavLabels(locale);
  const navLinks = getNavLinks(locale);
  const { pageId, parentPageId } = pathToNavContext(pathname);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileKurumsalOpen, setMobileKurumsalOpen] = useState(false);
  const [mobileFaaliyetOpen, setMobileFaaliyetOpen] = useState(false);

  const homeHref = localizeHref("/", locale);
  const otherLocale = locale === "tr" ? "en" : "tr";
  const switchHref = switchLocalePath(pathname, otherLocale);
  const switchLabel = otherLocale === "en" ? "EN" : "TR";
  const switchFlag =
    otherLocale === "en"
      ? "https://flagcdn.com/w40/gb.png"
      : "https://flagcdn.com/w40/tr.png";
  const switchAlt = otherLocale === "en" ? "English" : "Türkçe";
  const persistLocaleChoice = () => setLocaleCookie(otherLocale);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header>
        <div className="container">
          <div className="header-inner">
            <Link href={homeHref} className="logo">
              <img src="/logo.jpg" alt="Kaya Holding Logo" />
            </Link>

            <div className="header-right">
              <nav className="nav-desktop">
                <Link href={homeHref} style={activeStyle(pageId === "index")}>
                  {labels.home}
                </Link>
                <div className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    style={activeStyle(parentPageId === "kurumsal")}
                    onClick={(e) => e.preventDefault()}
                  >
                    {labels.kurumsal} <Chevron />
                  </a>
                  <div className="dropdown-menu">
                    {navLinks.kurumsal.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        style={activeDropdownStyle(pageId === item.pageId)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    style={activeStyle(parentPageId === "faaliyetler")}
                    onClick={(e) => e.preventDefault()}
                  >
                    {labels.faaliyetler} <Chevron />
                  </a>
                  <div className="dropdown-menu">
                    {navLinks.faaliyetler.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        style={activeDropdownStyle(pageId === item.pageId)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <Link
                  href={localizeHref("/haberler", locale)}
                  style={activeStyle(
                    pageId === "haberler" || pageId === "haber-detay"
                  )}
                >
                  {labels.news}
                </Link>
                <Link
                  href={localizeHref("/kariyer", locale)}
                  style={activeStyle(pageId === "kariyer")}
                >
                  {labels.career}
                </Link>
                <Link
                  href={localizeHref("/iletisim", locale)}
                  style={activeStyle(pageId === "iletisim")}
                >
                  {labels.contact}
                </Link>
              </nav>

              <div className="header-tools nav-desktop">
                <Link
                  href={switchHref}
                  className="lang-switcher"
                  aria-label={switchAlt}
                  onClick={persistLocaleChoice}
                >
                  <img src={switchFlag} className="lang-flag" alt="" />
                  <span>{switchLabel}</span>
                </Link>
              </div>

              <div
                className="hamburger"
                id="nav-toggle"
                role="button"
                tabIndex={0}
                aria-label={locale === "en" ? "Open menu" : "Menüyü aç"}
                onClick={() => setMenuOpen((o) => !o)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setMenuOpen((o) => !o);
                }}
              >
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="mobile-menu" id="mobile-menu">
        <button
          type="button"
          className="close-menu"
          id="close-menu"
          onClick={() => setMenuOpen(false)}
        >
          &times;
        </button>
        <img
          src="/favicon.jpg"
          alt="Kaya Holding Favicon"
          className="mobile-menu-logo"
        />
        <ul>
          <li>
            <Link href={homeHref}>{labels.home}</Link>
          </li>
          <li
            className={`mobile-dropdown${mobileKurumsalOpen ? " active" : ""}`}
          >
            <a
              href="#"
              className="mobile-dropdown-toggle"
              onClick={(e) => {
                e.preventDefault();
                setMobileKurumsalOpen((o) => !o);
              }}
            >
              {labels.kurumsal}{" "}
              <span className="arrow">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </a>
            <ul className="mobile-submenu">
              {navLinks.kurumsal.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </li>
          <li
            className={`mobile-dropdown${mobileFaaliyetOpen ? " active" : ""}`}
          >
            <a
              href="#"
              className="mobile-dropdown-toggle"
              onClick={(e) => {
                e.preventDefault();
                setMobileFaaliyetOpen((o) => !o);
              }}
            >
              {labels.faaliyetler}{" "}
              <span className="arrow">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </a>
            <ul className="mobile-submenu">
              {navLinks.faaliyetler.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <Link href={localizeHref("/haberler", locale)}>{labels.news}</Link>
          </li>
          <li>
            <Link href={localizeHref("/kariyer", locale)}>{labels.career}</Link>
          </li>
          <li>
            <Link href={localizeHref("/iletisim", locale)}>
              {labels.contact}
            </Link>
          </li>
        </ul>

        <div className="mobile-tools">
          <Link href={switchHref} className="lang-switcher" aria-label={switchAlt} onClick={persistLocaleChoice}>
            <img src={switchFlag} className="lang-flag" alt="" />
            <span>{switchLabel}</span>
          </Link>
        </div>
      </div>
    </>
  );
}
