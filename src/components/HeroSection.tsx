'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Code2, Award, Terminal } from 'lucide-react';

export default function HeroSection() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientY - rect.top - rect.height / 2) / 15;
    const y = -(e.clientX - rect.left - rect.width / 2) / 15;
    setRotate({ x, y });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-60"
        >
          <source src="/bg-video.mp4" type="video/mp4" />
        </video>
        {/* Subtle Dark Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/30 to-slate-950/60" />
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 flex flex-col items-start text-left gap-6"
        >
          <div className="px-4 py-2 rounded-lg bg-gradient-to-br from-teal-950/80 via-slate-900 to-black text-teal-300 text-xs font-semibold tracking-wide uppercase shadow-[inset_0_2px_4px_rgba(0,0,0,0.6),0_6px_16px_rgba(0,0,0,0.8),0_0_15px_rgba(13,148,136,0.3)] border border-teal-500/30 backdrop-blur-md">
            Software Engineer & Web Developer
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1]">
            <span className="text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">Membangun Web &</span><br />
            <span className="bg-gradient-to-r from-teal-400 via-emerald-300 to-orange-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(249,115,22,0.4)]">
              Aplikasi Interaktif
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
            Halo, saya <span className="text-orange-400 font-bold tracking-wide">Mohammad Ilham Arifin</span>. Situs ini berisi proyek yang pernah saya kerjakan, sertifikat yang saya selesaikan, dan tautan sosial media saya.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-white font-bold text-sm shadow-[0_10px_25px_rgba(249,115,22,0.4),inset_0_2px_4px_rgba(255,255,255,0.4),inset_0_-2px_4px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_35px_rgba(249,115,22,0.6),inset_0_2px_6px_rgba(255,255,255,0.6)] transition-all duration-300 hover:scale-[1.05] active:scale-95 border border-orange-400/50"
            >
              See My Works
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>

            <Link
              href="/#highlights"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-br from-slate-900 via-teal-950/40 to-slate-950 text-teal-300 font-semibold text-sm shadow-[inset_0_2px_4px_rgba(255,255,255,0.05),0_10px_20px_rgba(0,0,0,0.6)] hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:border-teal-500/50 transition-all duration-300 hover:scale-[1.02] active:scale-95 border border-teal-500/20"
            >
              <Award className="w-4 h-4 text-orange-400" />
              Sertifikat & Highlight
            </Link>
          </div>

          {/* Quick Metrics Neumorphic */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-teal-900/40 w-full max-w-md">
            <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-teal-950/30 shadow-[inset_0_2px_4px_rgba(255,255,255,0.03),0_10px_20px_rgba(0,0,0,0.7)] border border-teal-500/20 hover:border-orange-500/40 hover:shadow-[0_0_15px_rgba(249,115,22,0.2)] transition-all duration-300">
              <div className="text-3xl font-extrabold text-white mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">2</div>
              <div className="text-xs text-teal-300/80 font-medium mb-2">Web Project</div>
              <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="2" y1="8" x2="22" y2="8" />
              </svg>
            </div>
            <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-teal-950/30 shadow-[inset_0_2px_4px_rgba(255,255,255,0.03),0_10px_20px_rgba(0,0,0,0.7)] border border-teal-500/20 hover:border-teal-400/40 hover:shadow-[0_0_15px_rgba(20,184,166,0.2)] transition-all duration-300">
              <div className="text-3xl font-extrabold text-teal-400 mb-1 drop-shadow-[0_0_10px_rgba(20,184,166,0.3)]">2</div>
              <div className="text-xs text-teal-300/80 font-medium mb-2">Sertifikasi</div>
              <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 15l-2 5l3-1.5l3 1.5l-2-5" />
                <circle cx="12" cy="9" r="6" />
              </svg>
            </div>
            <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-teal-950/30 shadow-[inset_0_2px_4px_rgba(255,255,255,0.03),0_10px_20px_rgba(0,0,0,0.7)] border border-teal-500/20 hover:border-amber-500/40 hover:shadow-[0_0_15px_rgba(245,158,11,0.2)] transition-all duration-300">
              <div className="text-3xl font-extrabold text-orange-400 mb-1 drop-shadow-[0_0_10px_rgba(249,115,22,0.3)]">100%</div>
              <div className="text-xs text-teal-300/80 font-medium mb-2">Terverifikasi</div>
              <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Right 3D Tilt Card with Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center perspective-1000"
        >
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
              transition: 'transform 0.15s ease-out',
            }}
            className="relative w-[300px] sm:w-[340px] h-[450px] rounded-3xl p-6 bg-gradient-to-br from-slate-900 via-teal-950/40 to-slate-950 shadow-[inset_0_2px_4px_rgba(255,255,255,0.05),0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(20,184,166,0.15)] backdrop-blur-2xl flex flex-col items-center justify-between group cursor-pointer overflow-hidden border border-teal-500/30 hover:border-orange-500/50 hover:shadow-[0_0_40px_rgba(249,115,22,0.3)] transition-all duration-500"
          >
            {/* Header Status */}
            <div className="w-full flex justify-between items-center z-10">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-slate-900 to-black border border-teal-500/30 text-[11px] font-semibold text-teal-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
                Available for Work
              </span>
            </div>

            {/* Photo Avatar Frame Neumorphic */}
            <div className="relative w-52 h-64 rounded-2xl p-1.5 bg-gradient-to-b from-teal-500/30 via-slate-800 to-orange-500/40 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),0_15px_30px_rgba(0,0,0,0.8)] my-auto group-hover:scale-[1.03] transition-all duration-500 border border-teal-400/30 group-hover:border-orange-400/60">
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-950">
                <Image
                  src="/profile.jpg"
                  alt="Mohammad Ilham Arifin Profile"
                  fill
                  sizes="(max-width: 768px) 208px, 208px"
                  priority
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Profile Info Footer */}
            <div className="w-full text-center z-10">
              <h3 className="text-xl font-bold text-white tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Mohammad Ilham Arifin</h3>
              <p className="text-xs text-teal-400 font-semibold tracking-wide mt-0.5">Software Engineer & UI Developer</p>
              <div className="mt-3 flex justify-center gap-2 flex-wrap">
                <span className="px-3 py-1 rounded-xl bg-slate-900/90 text-[10px] font-medium text-slate-300 border border-teal-900/60 shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)]">Next.js 16</span>
                <span className="px-3 py-1 rounded-xl bg-slate-900/90 text-[10px] font-medium text-slate-300 border border-teal-900/60 shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)]">React</span>
                <span className="px-3 py-1 rounded-xl bg-slate-900/90 text-[10px] font-medium text-slate-300 border border-teal-900/60 shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)]">TypeScript</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
