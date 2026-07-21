"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  hotelLocations,
  officeLocations,
  type ContactLocation,
} from "@/lib/contact-data";

function MapIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function FaxIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 6 2 18 2 18 9" />
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <rect x="6" y="14" width="12" height="8" />
    </svg>
  );
}

function telHref(phone: string) {
  return `tel:${phone.replace(/[^0-9+]/g, "")}`;
}

function LocationCards({ items }: { items: ContactLocation[] }) {
  return (
    <>
      {items.map((loc) => (
        <div className="loc-card" key={loc.title}>
          <h4>{loc.title}</h4>
          <div className="loc-row">
            <MapIcon /> <span>{loc.address}</span>
          </div>
          {loc.phone && (
            <div className="loc-row">
              <PhoneIcon />{" "}
              <a href={telHref(loc.phone)}>{loc.phone}</a>
            </div>
          )}
          {loc.fax && (
            <div className="loc-row">
              <FaxIcon /> <span>{loc.fax}</span>
            </div>
          )}
        </div>
      ))}
    </>
  );
}

type TabId = "offices" | "hotels";

function ContactLocationsTabs() {
  const [activeTab, setActiveTab] = useState<TabId>("offices");

  return (
    <>
      <div
        className="contact-locations-tabs"
        role="tablist"
        aria-label="İletişim lokasyonları"
      >
        <button
          type="button"
          role="tab"
          id="contact-tab-offices"
          aria-selected={activeTab === "offices"}
          aria-controls="contact-panel-offices"
          className={activeTab === "offices" ? "is-active" : undefined}
          onClick={() => setActiveTab("offices")}
        >
          Ofislerimiz &amp; Tesislerimiz
        </button>
        <button
          type="button"
          role="tab"
          id="contact-tab-hotels"
          aria-selected={activeTab === "hotels"}
          aria-controls="contact-panel-hotels"
          className={activeTab === "hotels" ? "is-active" : undefined}
          onClick={() => setActiveTab("hotels")}
        >
          Otellerimiz
        </button>
      </div>

      <div
        id="contact-panel-offices"
        role="tabpanel"
        aria-labelledby="contact-tab-offices"
        hidden={activeTab !== "offices"}
        className="locations-grid"
      >
        {activeTab === "offices" && <LocationCards items={officeLocations} />}
      </div>

      <div
        id="contact-panel-hotels"
        role="tabpanel"
        aria-labelledby="contact-tab-hotels"
        hidden={activeTab !== "hotels"}
        className="locations-grid"
      >
        {activeTab === "hotels" && <LocationCards items={hotelLocations} />}
      </div>
    </>
  );
}

export function ContactLocations() {
  const [mount, setMount] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setMount(document.getElementById("contact-locations-mount"));
  }, []);

  if (!mount) return null;

  return createPortal(<ContactLocationsTabs />, mount);
}
