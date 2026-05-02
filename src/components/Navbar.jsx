"use client";
import { Avatar } from '@heroui/react';
import { useState } from "react";
import { Button } from "@heroui/react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

const SummerVibeLogo = () => (
  <svg width="52" height="52" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="sunGrad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FDE68A" />
        <stop offset="60%" stopColor="#FBBF24" />
        <stop offset="100%" stopColor="#F59E0B" />
      </radialGradient>
      <clipPath id="circleClip">
        <circle cx="100" cy="100" r="72" />
      </clipPath>
    </defs>
    <circle cx="100" cy="100" r="96" fill="#F97316" opacity="0.12" />
    <circle cx="100" cy="100" r="90" fill="#FFF7ED" />
    <g transform="translate(100,100)">
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <rect
          key={angle}
          x="-5" y="-84" width="10" height="24" rx="5"
          fill="#FBBF24"
          transform={`rotate(${angle})`}
        />
      ))}
    </g>
    <circle cx="100" cy="100" r="54" fill="url(#sunGrad)" />
    <g clipPath="url(#circleClip)">
      <path d="M28 118 Q50 106 72 118 Q94 130 116 118 Q138 106 172 118 L172 180 L28 180 Z" fill="#38BDF8" opacity="0.9" />
      <path d="M28 130 Q48 120 68 130 Q88 140 108 130 Q128 120 148 130 Q162 124 172 128 L172 180 L28 180 Z" fill="#0EA5E9" opacity="0.75" />
      <path d="M40 118 Q50 113 60 118" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.9" />
      <path d="M96 118 Q106 113 116 118" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.9" />
      <path d="M148 118 Q158 113 168 118" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.9" />
    </g>
    <circle cx="90" cy="88" r="9" fill="white" opacity="0.3" />
    <circle cx="87" cy="85" r="4" fill="white" opacity="0.45" />
    <circle cx="100" cy="100" r="90" fill="none" stroke="#F97316" strokeWidth="2.5" opacity="0.45" />
  </svg>
);

const NAV_LINKS = [
  { label: "Home",       href: "/" },
  { label: " All Products",  href: "/all-products" },
  { label: "My Profile", href: "/profile" },
];

const Navbar = () => {
  const userData =authClient.useSession()
 const user=userData.data?.user
 
const handleSignOut =async ()=>{
  await authClient.signOut();
}

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");

        .sv-prefix {
          font-family: "Pacifico", cursive;
          font-size: 1.2rem;
          color: #1f2937;
        }
        .sv-brand {
          font-family: "Pacifico", cursive;
          font-size: 1.2rem;
          background: linear-gradient(135deg, #f59e0b, #ef4444, #f97316);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nav-link {
          position: relative;
          color: #4b5563;
          font-size: 0.875rem;
          font-weight: 500;
          text-decoration: none;
          transition: color 0.2s;
        }
        .nav-link::after {
          content: "";
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 0;
          height: 2px;
          background: #f59e0b;
          border-radius: 2px;
          transition: width 0.3s ease;
        }
        .nav-link:hover { color: #111827; }
        .nav-link:hover::after { width: 100%; }

        .btn-outline {
          border: 1.5px solid #FBBF24 !important;
          color: #D97706 !important;
          background: transparent !important;
          font-weight: 600 !important;
          font-size: 0.8rem !important;
          border-radius: 8px !important;
          padding: 6px 16px !important;
          transition: background 0.2s, color 0.2s !important;
          text-decoration: none;
        }
        .btn-outline:hover {
          background: #FFF7ED !important;
        }
        .btn-solid {
          background: linear-gradient(135deg, #FBBF24, #F97316) !important;
          color: white !important;
          font-weight: 600 !important;
          font-size: 0.8rem !important;
          border: none !important;
          border-radius: 8px !important;
          padding: 6px 16px !important;
          box-shadow: 0 2px 10px rgba(249,115,22,0.35) !important;
          transition: transform 0.2s, box-shadow 0.2s !important;
          text-decoration: none;
        }
        .btn-solid:hover {
          transform: translateY(-1px) scale(1.03);
          box-shadow: 0 4px 16px rgba(249,115,22,0.45) !important;
        }

        .hbar {
          display: block;
          width: 22px;
          height: 2px;
          background: #374151;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .mobile-menu {
          animation: slideDown 0.22s ease-out;
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .mobile-link {
          display: block;
          padding: 11px 14px;
          border-radius: 10px;
          font-size: 0.9rem;
          font-weight: 500;
          color: #374151;
          text-decoration: none;
          transition: background 0.15s, color 0.15s;
        }
        .mobile-link:hover {
          background: #FFF7ED;
          color: #D97706;
        }

        /* ── Responsive breakpoints ── */
        .desktop-links,
        .desktop-auth  { display: flex; }
        .hamburger-btn { display: none; }

        @media (max-width: 768px) {
          .desktop-links,
          .desktop-auth  { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>

      {/* ────────────────────────────── Sticky wrapper ── */}
      <div style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        borderBottom: "1px solid #f0f0f0",
        backgroundColor: "rgba(255,255,255,0.93)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
      }}>

        {/* ─────────────────────────────────── Main nav ── */}
        <nav style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
          maxWidth: "1280px",
          margin: "0 auto",
        }}>

          {/* Logo + Brand */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
            <SummerVibeLogo />
            <span style={{ margin: 0, lineHeight: 1 }}>
              <span className="sv-prefix">Summer</span>
              <span className="sv-brand">Vibe</span>
            </span>
          </Link>

          {/* Desktop nav links */}
          <ul className="desktop-links" style={{
            gap: "28px", listStyle: "none", margin: 0, padding: 0, alignItems: "center",
          }}>
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link href={href} className="nav-link">{label}</Link>
              </li>
            ))}
          </ul>

          
      <div>
      {!user && <div className="desktop-auth" style={{ gap: "10px", alignItems: "center" }}>
            <Link href="/signup" className="btn-outline">Register</Link>
            <Link href="/signin" className="btn-solid">Log In</Link>
            </div>}
            {
              user && <div className='flex gap-3 justify-between'>
              <Avatar>
              <Avatar.Image
                      alt="@example"
                      src={user?.image}
                      referrerPolicy='no-referrer'
                    />
                     <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback> 
                     </Avatar>
                     <Button onClick={handleSignOut} variant='danger'>Log Out</Button>
                    </div>
            }
          </div>
        
          {/* Hamburger button */}
          <button
            className="hamburger-btn"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px",
              width: "40px",
              height: "40px",
              background: menuOpen ? "#FFF7ED" : "transparent",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              padding: 0,
              transition: "background 0.2s",
            }}
          >
            <span className="hbar" style={{ transform: menuOpen ? "rotate(45deg) translate(5px,5px)"  : "none" }} />
            <span className="hbar" style={{ opacity: menuOpen ? 0 : 1, transform: menuOpen ? "scaleX(0)" : "none" }} />
            <span className="hbar" style={{ transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
          </button>
        </nav>

        {/* ──────────────────────────── Mobile dropdown ── */}
        {menuOpen && (
          <div className="mobile-menu" style={{
            borderTop: "1px solid #f3f4f6",
            padding: "10px 16px 18px",
            background: "white",
          }}>
            <ul style={{ listStyle: "none", margin: "0 0 12px 0", padding: 0 }}>
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="mobile-link" onClick={() => setMenuOpen(false)}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

             <div>
      {!user && <div className="desktop-auth" style={{ gap: "10px", alignItems: "center" }}>
            <Link href="/signup" className="btn-outline">Register</Link>
            <Link href="/signin" className="btn-solid">Log In</Link>
            </div>}
            
          </div>
          </div>
        )}

      </div>
    </>
  );
};

export default Navbar;