"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  activeDropdownStyle,
  activeStyle,
  navLinks,
} from "@/lib/navigation";
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
  const { pageId, parentPageId } = pathToNavContext(pathname);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileKurumsalOpen, setMobileKurumsalOpen] = useState(false);
  const [mobileFaaliyetOpen, setMobileFaaliyetOpen] = useState(false);

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
            <Link href="/" className="logo">
              <img src="/logo.jpg" alt="Kaya Holding Logo" />
            </Link>

            <div className="header-right">
              <nav className="nav-desktop">
                <Link href="/" style={activeStyle(pageId === "index")}>
                  Ana Sayfa
                </Link>
                <div className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    style={activeStyle(parentPageId === "kurumsal")}
                    onClick={(e) => e.preventDefault()}
                  >
                    Kurumsal <Chevron />
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
                    Faaliyetler <Chevron />
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
                  href="/haberler"
                  style={activeStyle(
                    pageId === "haberler" || pageId === "haber-detay"
                  )}
                >
                  Bizden Haberler
                </Link>
                <Link href="/kariyer" style={activeStyle(pageId === "kariyer")}>
                  Kariyer
                </Link>
                <Link
                  href="/iletisim"
                  style={activeStyle(pageId === "iletisim")}
                >
                  İletişim
                </Link>
              </nav>

              <div className="header-tools nav-desktop">
                <div className="lang-switcher">
                  <img
                    src="https://flagcdn.com/w40/gb.png"
                    className="lang-flag"
                    alt="English"
                  />
                  <span>EN</span>
                </div>
              </div>

              <div
                className="hamburger"
                id="nav-toggle"
                role="button"
                tabIndex={0}
                aria-label="Menüyü aç"
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
            <Link href="/">Ana Sayfa</Link>
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
              Kurumsal{" "}
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
              Faaliyetler{" "}
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
            <Link href="/haberler">Bizden Haberler</Link>
          </li>
          <li>
            <Link href="/kariyer">Kariyer</Link>
          </li>
          <li>
            <Link href="/iletisim">İletişim</Link>
          </li>
        </ul>

        <div className="mobile-tools">
          <div className="lang-switcher">
            <img
              src="https://flagcdn.com/w40/gb.png"
              className="lang-flag"
              alt="English"
            />
            <span>EN</span>
          </div>
        </div>
      </div>
    </>
  );
}
