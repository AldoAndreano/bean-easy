"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      style={{
        borderBottom: "1px solid #e5e5e5",
        padding: "1rem",
        background: "white",
      }}
    >
      <div
        style={{
          maxWidth: 960,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          href="/"
          style={{
            fontWeight: "bold",
            fontSize: "1.2rem",
            color: "var(--coffee-primary)",
          }}
        >
          Bean Easy ☕
        </Link>

        {/* Desktop Menu */}
        <div className="desktop-menu">
          <Link href="/gear">Gear</Link>
          <Link href="/bean-selection">Coffee Beans</Link>
        </div>

        {/* Mobile Button */}
        <button
          className="mobile-button"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            fontSize: "1.5rem",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="mobile-menu"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginTop: "1rem",
          }}
        >
          <Link href="/gear" onClick={() => setIsOpen(false)}>
            Gear
          </Link>
          <Link href="/bean-selection" onClick={() => setIsOpen(false)}>
            Coffee Beans
          </Link>
        </div>
      )}
    </nav>
  );
}