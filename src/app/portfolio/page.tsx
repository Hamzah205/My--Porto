'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { INITIAL_PORTFOLIO, PortfolioItem } from '@/lib/data';
import { Award, Globe, ExternalLink, Filter, Eye, FileText, X } from 'lucide-react';

export default function PortfolioSubPage() {
  const [filter, setFilter] = useState<'all' | 'website' | 'certificate'>('all');
  const [selectedCert, setSelectedCert] = useState<PortfolioItem | null>(null);

  const filteredItems = INITIAL_PORTFOLIO.filter(
    (item) => filter === 'all' || item.category === filter
  );

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 relative overflow-hidden">
      <Navbar />

      <section className="pt-36 pb-20 max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-br from-teal-950/80 via-slate-900 to-black text-teal-300 text-xs font-semibold uppercase tracking-wide shadow-[inset_0_2px_4px_rgba(0,0,0,0.6),0_6px_16px_rgba(0,0,0,0.8)] border border-teal-500/30">
            <Filter className="w-3.5 h-3.5 text-orange-400" />
            Complete Showcase
          </div>
          <h1 className="text-4xl font-extrabold text-white mt-4">
            Sub-Page <span className="bg-gradient-to-r from-teal-400 via-emerald-300 to-orange-500 bg-clip-text text-transparent">Portfolio & Sertifikat</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-3">
            Daftar lengkap seluruh proyek website dan sertifikat kompetensi terintegrasi Google Drive.
          </p>
        </div>

        {/* Category Filters Neumorphic */}
        <div className="flex justify-center gap-3 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2.5 rounded-2xl text-xs font-bold transition-all duration-300 cursor-pointer ${
              filter === 'all'
                ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-[0_8px_20px_rgba(249,115,22,0.4),inset_0_2px_4px_rgba(255,255,255,0.4)] border border-orange-400/50'
                : 'bg-slate-900/80 text-teal-300/80 hover:text-white border border-teal-500/20 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]'
            }`}
          >
            Semua ({INITIAL_PORTFOLIO.length})
          </button>
          <button
            onClick={() => setFilter('website')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-2xl text-xs font-bold transition-all duration-300 cursor-pointer ${
              filter === 'website'
                ? 'bg-gradient-to-r from-teal-500 to-emerald-600 text-white shadow-[0_8px_20px_rgba(20,184,166,0.4),inset_0_2px_4px_rgba(255,255,255,0.4)] border border-teal-400/50'
                : 'bg-slate-900/80 text-teal-300/80 hover:text-white border border-teal-500/20 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            Web Project ({INITIAL_PORTFOLIO.filter(i => i.category === 'website').length})
          </button>
          <button
            onClick={() => setFilter('certificate')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-2xl text-xs font-bold transition-all duration-300 cursor-pointer ${
              filter === 'certificate'
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-[0_8px_20px_rgba(245,158,11,0.4),inset_0_2px_4px_rgba(255,255,255,0.4)] border border-amber-400/50'
                : 'bg-slate-900/80 text-teal-300/80 hover:text-white border border-teal-500/20 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            Sertifikat ({INITIAL_PORTFOLIO.filter(i => i.category === 'certificate').length})
          </button>
        </div>

        {/* Portfolio Grid Neumorphic */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-teal-950/40 border border-teal-500/20 hover:border-orange-500/50 p-6 flex flex-col justify-between shadow-[inset_0_2px_4px_rgba(255,255,255,0.03),0_15px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_0_25px_rgba(249,115,22,0.25)] transition-all duration-300 group"
            >
              <div>
                <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-4 bg-slate-950 border border-teal-500/20">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`px-3 py-1 rounded-xl text-[10px] font-bold tracking-wider backdrop-blur-md shadow-lg border ${
                      item.category === 'website' 
                        ? 'bg-teal-950/80 text-teal-300 border-teal-500/40' 
                        : 'bg-orange-950/80 text-orange-300 border-orange-500/40'
                    }`}>
                      {item.category === 'website' ? 'WEB PROJECT' : 'SERTIFIKAT'}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-xs mt-2 line-clamp-3 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-teal-900/40 mt-4 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.slice(0, 2).map((t) => (
                    <span key={t} className="text-[10px] font-medium px-2.5 py-1 rounded-lg bg-slate-950 text-teal-300/80 border border-teal-900/40 shadow-[inset_0_1px_2px_rgba(0,0,0,0.6)]">
                      {t}
                    </span>
                  ))}
                </div>

                {item.demoUrl && (
                  <a
                    href={item.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold shadow-[0_4px_10px_rgba(249,115,22,0.4)] hover:scale-105 active:scale-95 transition-all cursor-pointer border border-orange-400/40"
                  >
                    Live Demo <ExternalLink className="w-3 h-3" />
                  </a>
                )}

                {item.gdriveUrl && (
                  <button
                    onClick={() => setSelectedCert(item)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 text-white text-xs font-bold shadow-[0_4px_10px_rgba(20,184,166,0.4)] hover:scale-105 active:scale-95 transition-all cursor-pointer border border-teal-400/40"
                  >
                    G-Drive <Eye className="w-3 h-3" />
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl flex flex-col gap-4">
            <div className="flex justify-between items-center pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-emerald-400" />
                <h3 className="text-lg font-bold text-white">{selectedCert.title}</h3>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative w-full h-[320px] rounded-xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center">
              <Image
                src={selectedCert.imageUrl}
                alt={selectedCert.title}
                fill
                className="object-contain"
              />
            </div>

            <div className="flex justify-between items-center pt-2">
              <span className="text-xs text-slate-400">Issuer: {selectedCert.issuer || 'Poltek Samarinda'}</span>
              <a
                href={selectedCert.gdriveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 text-white font-semibold text-xs hover:bg-emerald-500 transition-colors"
              >
                View on Google Drive
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
