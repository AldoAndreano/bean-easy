"use client"

import { Analytics } from "@vercel/analytics/next";
import Image from "next/image";
import { useState } from "react";

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <main style={{
        maxWidth: 720,
        margin: "0 auto",
        padding: "4rem 1rem",
        lineHeight: 1.6,
    }}>
      <Analytics />

      <div style={{
        display: 'flex',
        gap: '1rem',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}>
        <div>
          <button
            onClick={() => window.location.href = '/gear'}
            style={{
              display: 'block',
              width: '250px',
              height: '250px',
              padding: '1rem',
              background: '#D6B588',
              color: '#fff',
              border: 'none',
              borderRadius: 6,
              textAlign: 'center',
              cursor: 'pointer',
            }}
          >
            <h3 
              style={{ 
                margin: '0 0 170px 0',
                fontSize: '25px',
                color: '#422701'
              }}>
                {'Coffee Gears'}
            </h3>
            <Image
              src={'/products/gear.png'}
              alt={'/products/gear.png'}
              width={100}
              height={100}
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                borderRadius: "8px",
                margin: "-150px 0 0 0",
              }}
            />
          </button>
        </div>

        <div>
          <button
            onClick={() => window.location.href = '/bean-selection'}
            style={{
              display: 'block',
              width: '250px',
              height: '250px',
              padding: '1rem',
              background: '#D6B588',
              color: '#fff',
              border: 'none',
              borderRadius: 6,
              textAlign: 'center',
              cursor: 'pointer',
            }}
          >
            <h3 
              style={{ 
                margin: '0 0 170px 0',
                fontSize: '25px',
                color: '#422701'
              }}>
                {'Coffee Beans'}
            </h3>
            <Image
              src={'/products/coffee-bag.png'}
              alt={'/products/coffee-bag.png'}
              width={100}
              height={100}
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                borderRadius: "8px",
                margin: "-150px 0 0 0",
              }}
            />
          </button>
        </div>
      </div>

    </main>
  );
}