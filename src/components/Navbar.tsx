"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Coffee } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      style={{
        borderBottom: "1px solid rgba(181, 131, 90, 0.2)",
        padding: "1rem",
        background: "var(--coffee-card)",
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(10px)",
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
            fontSize: "1.4rem",
            color: "var(--coffee-primary)",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem"
          }}
        >
          <Coffee size={24} />
          <span>Bean Easy</span>
        </Link>

        {/* Desktop Menu */}
        <div className="desktop-menu" style={{ alignItems: "center" }}>
          <Link href="/gear" style={{ fontWeight: 600 }}>Gear</Link>
          <Link href="/bean-selection" style={{ fontWeight: 600 }}>Coffee Beans</Link>
        </div>

        {/* Mobile Button */}
        <button
          className="mobile-button"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--coffee-primary)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div
              className="mobile-menu"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                marginTop: "1.5rem",
                paddingBottom: "0.5rem"
              }}
            >
              <Link 
                href="/gear" 
                onClick={() => setIsOpen(false)}
                style={{ padding: "0.5rem 0", borderBottom: "1px solid rgba(181, 131, 90, 0.1)", fontWeight: 600 }}
              >
                Gear
              </Link>
              <Link 
                href="/bean-selection" 
                onClick={() => setIsOpen(false)}
                style={{ padding: "0.5rem 0", fontWeight: 600 }}
              >
                Coffee Beans
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
