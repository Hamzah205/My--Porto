'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, LayoutDashboard, User, ShieldCheck, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl">
      <div className="bg-slate-950/80 backdrop-blur-2xl border border-teal-500/20 rounded-3xl px-7 py-4 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_2px_4px_rgba(255,255,255,0.05),0_0_25px_rgba(20,184,166,0.15)]">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-br from-slate-900 via-teal-950 to-slate-950 border border-teal-500/30 flex items-center justify-center shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),0_8px_16px_rgba(0,0,0,0.6)] group-hover:scale-105 group-hover:border-orange-500/50 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all duration-300 overflow-hidden">
            {/* Dynamic Wave / Flow SVG Logo */}
            <svg className="w-5 h-5 text-teal-400 group-hover:text-orange-400 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12c3-4 6-4 9 0s6 4 11 0" />
              <path d="M2 16c3-4 6-4 9 0s6 4 11 0" opacity="0.5" />
              <circle cx="12" cy="7" r="2" fill="currentColor" className="text-orange-400" />
            </svg>
          </div>
          <span className="font-extrabold text-lg tracking-tight text-white group-hover:text-teal-300 transition-colors">
            Hamza<span className="text-orange-500 drop-shadow-[0_0_10px_rgba(249,115,22,0.5)]">‑Sea</span>
          </span>
        </Link>

        {/* Desktop Nav Neumorphic */}
        <div className="hidden md:flex items-center gap-3 text-sm font-semibold text-slate-300">
          <Link
            href="/"
            className="px-4 py-2 rounded-2xl transition-all duration-300 hover:text-white hover:bg-slate-900/90 hover:shadow-[inset_0_2px_4px_rgba(255,255,255,0.05),0_6px_15px_rgba(0,0,0,0.6),0_0_15px_rgba(20,184,166,0.2)] hover:border hover:border-teal-500/30 active:scale-95"
          >
            Home
          </Link>
          <Link
            href="/#socials"
            className="px-4 py-2 rounded-2xl transition-all duration-300 hover:text-white hover:bg-slate-900/90 hover:shadow-[inset_0_2px_4px_rgba(255,255,255,0.05),0_6px_15px_rgba(0,0,0,0.6),0_0_15px_rgba(20,184,166,0.2)] hover:border hover:border-teal-500/30 active:scale-95"
          >
            Social Hub
          </Link>
          <Link
            href="/#highlights"
            className="px-4 py-2 rounded-2xl transition-all duration-300 hover:text-white hover:bg-slate-900/90 hover:shadow-[inset_0_2px_4px_rgba(255,255,255,0.05),0_6px_15px_rgba(0,0,0,0.6),0_0_15px_rgba(20,184,166,0.2)] hover:border hover:border-teal-500/30 active:scale-95"
          >
            Highlights
          </Link>
          <Link
            href="/portfolio"
            className="flex items-center gap-2 px-4 py-2 rounded-2xl transition-all duration-300 hover:text-white hover:bg-slate-900/90 hover:shadow-[inset_0_2px_4px_rgba(255,255,255,0.05),0_6px_15px_rgba(0,0,0,0.6),0_0_15px_rgba(20,184,166,0.2)] hover:border hover:border-teal-500/30 active:scale-95"
          >
            <User className="w-4 h-4 text-orange-400" />
            Sub-Portfolio
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/admin/login"
            className="relative group flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 rounded-2xl transition-all duration-300 shadow-[0_8px_20px_rgba(249,115,22,0.4),inset_0_2px_4px_rgba(255,255,255,0.4)] hover:shadow-[0_12px_28px_rgba(249,115,22,0.6)] hover:scale-105 active:scale-95 border border-orange-400/50"
          >
            <ShieldCheck className="w-4 h-4 text-white group-hover:rotate-12 transition-transform duration-300" />
            Admin Panel
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          aria-expanded={isOpen}
          className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800/50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-400"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 p-5 bg-slate-900/95 border border-slate-800 rounded-2xl flex flex-col gap-4 text-slate-300 backdrop-blur-2xl shadow-2xl">
          <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">Home</Link>
          <Link href="/#socials" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">Social Hub</Link>
          <Link href="/#highlights" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">Highlights</Link>
          <Link href="/portfolio" onClick={() => setIsOpen(false)} className="hover:text-cyan-400 flex items-center gap-2">
            <User className="w-4 h-4 text-cyan-400" />
            Sub-Portfolio
          </Link>
          <hr className="border-slate-800" />
          <Link
            href="/admin/login"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-slate-200 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl shadow-lg"
          >
            <LayoutDashboard className="w-4 h-4" />
            Admin Dashboard
          </Link>
        </div>
      )}
    </nav>
  );
}
