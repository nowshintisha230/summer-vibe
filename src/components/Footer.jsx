"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3">

        {/* Contact Info */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Info</h2>
          <div className="space-y-2 text-sm">
            <p className="flex items-center gap-2">
              <MapPin size={16} /> Chattogram, Bangladesh
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} /> +880 123 456 789
            </p>
            <p className="flex items-center gap-2">
              <Mail size={16} /> support@example.com
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Social Links</h2>
          <div className="flex flex-col space-y-2 text-sm">
            <Link href="https://facebook.com" target="_blank" className="hover:text-white">
              Facebook
            </Link>
            <Link href="https://instagram.com" target="_blank" className="hover:text-white">
              Instagram
            </Link>
            <Link href="https://twitter.com" target="_blank" className="hover:text-white">
              Twitter
            </Link>
          </div>
        </div>

        {/* Privacy Policy */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Legal</h2>
          <Link href="/privacy-policy" className="text-sm hover:text-white">
            Privacy Policy
          </Link>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
}