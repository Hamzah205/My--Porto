import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import SocialHub from '@/components/SocialHub';
import HighlightsSection from '@/components/HighlightsSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 relative overflow-hidden">
      <Navbar />
      <HeroSection />
      <SocialHub />
      <HighlightsSection />

      {/* Footer */}
      <footer className="py-10 border-t border-slate-800 text-center text-xs text-slate-500 relative z-10">
        <p>© 2026 Mohammad Ilham Arifin. All rights reserved. Powered by Next.js 14 & Vercel.</p>
      </footer>
    </main>
  );
}
