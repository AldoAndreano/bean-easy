"use client"

import { Analytics } from "@vercel/analytics/next";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, Coffee } from "lucide-react";

export default function HomePage() {
  const router = useRouter();
  
  return (
    <main style={{
        position: "relative",
        minHeight: "calc(100vh - 70px)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "4rem 1rem",
    }}>
      <Analytics />

      {/* Animated Background Blobs */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", overflow: "hidden", zIndex: -1 }}>
        <div className="animate-blob" style={{
          position: "absolute", top: "-10%", left: "-10%", width: "40vw", height: "40vw", 
          background: "var(--coffee-accent)", borderRadius: "50%", filter: "blur(80px)", opacity: 0.15
        }} />
        <div className="animate-blob animation-delay-2000" style={{
          position: "absolute", top: "40%", right: "-10%", width: "35vw", height: "35vw", 
          background: "var(--coffee-primary)", borderRadius: "50%", filter: "blur(80px)", opacity: 0.15
        }} />
        <div className="animate-blob animation-delay-4000" style={{
          position: "absolute", bottom: "-10%", left: "20%", width: "45vw", height: "45vw", 
          background: "#8b5a2b", borderRadius: "50%", filter: "blur(100px)", opacity: 0.1
        }} />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: "center", marginBottom: "4rem", maxWidth: "800px" }}
      >
        <h1 style={{ 
          fontSize: "clamp(2.5rem, 5vw, 4rem)", 
          fontWeight: 800, 
          color: "var(--coffee-primary)",
          marginBottom: "1rem",
          lineHeight: 1.1,
          letterSpacing: "-0.02em"
        }}>
          Brew Your Best <br/> Every Single Day.
        </h1>
        <p style={{ 
          fontSize: "1.2rem", 
          color: "var(--foreground)",
          opacity: 0.8,
          maxWidth: "600px",
          margin: "0 auto"
        }}>
          Discover the perfect beans and the ultimate gears to elevate your coffee experience at home.
        </p>
      </motion.div>

      <div style={{
        display: 'flex',
        gap: '2.5rem',
        justifyContent: 'center',
        flexWrap: 'wrap',
        width: "100%",
        maxWidth: "960px",
        zIndex: 1
      }}>
        <motion.div
          whileHover={{ scale: 1.05, y: -10 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button
            onClick={() => router.push('/gear')}
            style={{
              position: "relative",
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              width: '300px',
              height: '350px',
              padding: '2rem',
              background: 'linear-gradient(145deg, var(--coffee-card), var(--coffee-bg))',
              color: 'var(--coffee-text)',
              border: '1px solid rgba(181, 131, 90, 0.2)',
              borderRadius: '24px',
              textAlign: 'left',
              cursor: 'pointer',
              boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
              overflow: 'hidden'
            }}
          >
            <div style={{ zIndex: 2 }}>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                Coffee Gears
              </h3>
              <p style={{ opacity: 0.7, fontSize: '0.95rem' }}>Find the right tools for your perfect brew.</p>
            </div>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontWeight: 600,
              color: 'var(--coffee-primary)',
              zIndex: 2,
              marginTop: 'auto'
            }}>
              Explore <ArrowRight size={18} />
            </div>

            <Image
              src={'/products/gear.png'}
              alt={'Coffee Gear'}
              width={200}
              height={200}
              style={{
                position: "absolute",
                bottom: "-20px",
                right: "-20px",
                width: "220px",
                height: "220px",
                objectFit: "contain",
                opacity: 0.9,
                transform: "rotate(-10deg)",
                transition: "transform 0.3s ease"
              }}
            />
          </button>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05, y: -10 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button
            onClick={() => router.push('/bean-selection')}
            style={{
              position: "relative",
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              width: '300px',
              height: '350px',
              padding: '2rem',
              background: 'linear-gradient(145deg, var(--coffee-primary), #8b5a2b)',
              color: '#ffffff',
              border: 'none',
              borderRadius: '24px',
              textAlign: 'left',
              cursor: 'pointer',
              boxShadow: '0 20px 40px rgba(139, 90, 43, 0.3)',
              overflow: 'hidden'
            }}
          >
            <div style={{ zIndex: 2 }}>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                Coffee Beans
              </h3>
              <p style={{ opacity: 0.9, fontSize: '0.95rem' }}>Discover unique flavors from around the world.</p>
            </div>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontWeight: 600,
              zIndex: 2,
              marginTop: 'auto'
            }}>
              Explore <ArrowRight size={18} />
            </div>

            <Image
              src={'/products/coffee-bag.png'}
              alt={'Coffee Beans'}
              width={200}
              height={200}
              style={{
                position: "absolute",
                bottom: "-20px",
                right: "-20px",
                width: "220px",
                height: "220px",
                objectFit: "contain",
                opacity: 0.95,
                transform: "rotate(10deg)",
                transition: "transform 0.3s ease"
              }}
            />
          </button>
        </motion.div>
      </div>

    </main>
  );
}
