"use client";

import { Avatar } from '@heroui/react';
import { Button } from "@heroui/react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

const SummerVibeLogo = () => (
  <svg width="64" height="64" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="sunGrad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FDE68A" />
        <stop offset="60%" stopColor="#FBBF24" />
        <stop offset="100%" stopColor="#F59E0B" />
      </radialGradient>

      <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FBBF24" />
        <stop offset="50%" stopColor="#FB923C" />
        <stop offset="100%" stopColor="#F97316" />
      </linearGradient>

      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="6" result="blur"/>
        <feMerge>
          <feMergeNode in="blur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>

      <clipPath id="circleClip">
        <circle cx="100" cy="100" r="72" />
      </clipPath>
    </defs>

    <circle cx="100" cy="100" r="96" fill="#F97316" opacity="0.08" filter="url(#glow)" />
    <circle cx="100" cy="100" r="94" fill="none" stroke="url(#ringGrad)" strokeWidth="3" opacity="0.7" />
    <circle cx="100" cy="100" r="90" fill="#FFF7ED" />

    <g transform="translate(100,100)">
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <rect key={angle} x="-5" y="-84" width="10" height="24" rx="5" fill="#FBBF24" transform={`rotate(${angle})`} />
      ))}
    </g>

    <circle cx="100" cy="100" r="54" fill="url(#sunGrad)" />

    <g clipPath="url(#circleClip)">
      <path d="M28 118 Q50 106 72 118 Q94 130 116 118 Q138 106 172 118 L172 180 L28 180 Z" fill="#38BDF8" opacity="0.9" />
      <path d="M28 130 Q48 120 68 130 Q88 140 108 130 Q128 120 148 130 Q162 124 172 128 L172 180 L28 180 Z" fill="#0EA5E9" opacity="0.75" />
    </g>

    <circle cx="140" cy="55" r="3" fill="#FBBF24" />
    <circle cx="60" cy="65" r="2" fill="#F97316" />
    <circle cx="150" cy="140" r="2.5" fill="#FBBF24" />

    <circle cx="100" cy="100" r="90" fill="none" stroke="#F97316" strokeWidth="2.5" opacity="0.45" />
  </svg>
);

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "All Products", href: "/all-products" },
  { label: "My Profile", href: "/profile" },
];

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");

        .sv-prefix {
          font-family: "Pacifico", cursive;
          font-size: 1.35rem;
          color: #1f2937;
        }

        .sv-brand {
          font-family: "Pacifico", cursive;
          font-size: 1.35rem;
          background: linear-gradient(135deg, #f59e0b, #ef4444, #f97316);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .sv-tagline {
          font-size: 0.65rem;
          color: #9ca3af;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .nav-link {
          position: relative;
          color: #4b5563;
          font-size: 0.95rem;
          text-decoration: none;
          padding-bottom: 4px;
        }

        .nav-link:hover {
          color: #111827;
          border-bottom: 2px solid #FBBF24;
        }

        .btn-outline {
          border: 1px solid #FBBF24;
          padding: 6px 14px;
          border-radius: 8px;
        }

        .btn-solid {
          background: linear-gradient(135deg, #FBBF24, #F97316);
          color: white;
          padding: 6px 14px;
          border-radius: 8px;
        }
      `}</style>

      <div style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(255,255,255,0.9)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid #eee"
      }}>

        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "14px 0",
          gap: "12px"
        }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
            <SummerVibeLogo />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span>
                <span className="sv-prefix">Summer</span>
                <span className="sv-brand">Vibe</span>
              </span>
              <span className="sv-tagline">feel the summer</span>
            </div>
          </Link>
        </div>

        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
          maxWidth: "1280px",
          margin: "0 auto",
          flexWrap: "wrap",
          gap: "12px"
        }}>

          <ul style={{ display: "flex", gap: "20px", listStyle: "none", margin: 0, padding: 0 }}>
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link href={href} className="nav-link">{label}</Link>
              </li>
            ))}
          </ul>

          {!user ? (
            <div style={{ display: "flex", gap: "12px" }}>
              <Link href="/signup" className="btn-outline">Register</Link>
              <Link href="/signin" className="btn-solid">Log In</Link>
            </div>
          ) : (
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              <Avatar>
                <Avatar.Image src={user?.image} referrerPolicy="no-referrer" />
                <Avatar.Fallback>{user?.name?.[0]}</Avatar.Fallback>
              </Avatar>
              <Button onClick={handleSignOut} variant="danger">Log Out</Button>
            </div>
          )}

        </div>
      </div>
    </>
  );
};

export default Navbar;