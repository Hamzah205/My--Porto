'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { INITIAL_PORTFOLIO, PortfolioItem } from '@/lib/data';
import { Award, ExternalLink, Globe, FileText, CheckCircle2, Eye, X } from 'lucide-react';

export default function HighlightsSection() {
  const [selectedCert, setSelectedCert] = useState<PortfolioItem | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'website' | 'certificate'>('all');

  const filteredItems = INITIAL_PORTFOLIO.filter(
    (item) => item.isHighlighted && (activeTab === 'all' || item.category === activeTab)
  );

  return (
    <section id="highlights" className="py-20 relative z-10 bg-slate-950/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            Proyek & Sertifikat
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Proyek & Sertifikasi Pilihan
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Kumpulan proyek yang pernah saya kerjakan dan sertifikat yang bisa dicek langsung via Google Drive.
          </p>
        </div>

        {/* Tab Filter Neumorphic */}
        <div className="flex justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-6 py-2.5 rounded-2xl text-xs font-bold transition-all duration-300 cursor-pointer ${
              activeTab === 'all'
                ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-[0_8px_20px_rgba(249,115,22,0.4),inset_0_2px_4px_rgba(255,255,255,0.4)] border border-orange-400/50'
                : 'bg-slate-900/80 text-teal-300/80 hover:text-white border border-teal-500/20 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]'
            }`}
          >
            Semua ({INITIAL_PORTFOLIO.filter((i) => i.isHighlighted).length})
          </button>
          <button
            onClick={() => setActiveTab('website')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-2xl text-xs font-bold transition-all duration-300 cursor-pointer ${
              activeTab === 'website'
                ? 'bg-gradient-to-r from-teal-500 to-emerald-600 text-white shadow-[0_8px_20px_rgba(20,184,166,0.4),inset_0_2px_4px_rgba(255,255,255,0.4)] border border-teal-400/50'
                : 'bg-slate-900/80 text-teal-300/80 hover:text-white border border-teal-500/20 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            Web Project ({INITIAL_PORTFOLIO.filter((i) => i.isHighlighted && i.category === 'website').length})
          </button>
          <button
            onClick={() => setActiveTab('certificate')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-2xl text-xs font-bold transition-all duration-300 cursor-pointer ${
              activeTab === 'certificate'
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-[0_8px_20px_rgba(245,158,11,0.4),inset_0_2px_4px_rgba(255,255,255,0.4)] border border-amber-400/50'
                : 'bg-slate-900/80 text-teal-300/80 hover:text-white border border-teal-500/20 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            Sertifikat ({INITIAL_PORTFOLIO.filter((i) => i.isHighlighted && i.category === 'certificate').length})
          </button>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative group rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 overflow-hidden shadow-2xl backdrop-blur-xl flex flex-col justify-between"
            >
              {/* Image Preview Container */}
              <div className="relative w-full h-56 overflow-hidden bg-slate-950">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading={idx === 0 ? "eager" : "lazy"}
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />

                {/* Badge Category */}
              <div className="absolute top-4 left-4 z-10">
                {item.category === 'website' ? (
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-xs font-semibold shadow-lg shadow-cyan-500/25">
                    <Globe className="w-3.5 h-3.5" />
                    <span>Web Project</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs font-semibold shadow-lg shadow-emerald-500/25">
                    <Award className="w-3.5 h-3.5" />
                    <span>Verified Cert (G-Drive)</span>
                  </div>
                )}
              </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm mt-2 leading-relaxed">
                    {item.description}
                  </p>

                  {item.issuer && (
                    <div className="mt-3 flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Issued by <strong className="text-white">{item.issuer}</strong> ({item.date})</span>
                    </div>
                  )}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800">
                  {item.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-[10px] font-medium text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 pt-2">
                  {item.demoUrl && (
                    <a
                      href={item.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-white font-bold text-xs transition-all duration-300 shadow-[0_8px_20px_rgba(249,115,22,0.35),inset_0_2px_4px_rgba(255,255,255,0.4)] hover:shadow-[0_12px_28px_rgba(249,115,22,0.5)] active:scale-95 cursor-pointer border border-orange-400/40"
                    >
                      <Globe className="w-4 h-4" />
                      Visit Live Site
                    </a>
                  )}

                  {item.gdriveUrl && (
                    <button
                      onClick={() => setSelectedCert(item)}
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-2xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white font-bold text-xs transition-all duration-300 shadow-[0_8px_20px_rgba(20,184,166,0.35),inset_0_2px_4px_rgba(255,255,255,0.4)] hover:shadow-[0_12px_28px_rgba(20,184,166,0.5)] active:scale-95 cursor-pointer border border-teal-400/40"
                    >
                      <Eye className="w-4 h-4" />
                      Preview Google Drive
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

              {/* Certificate Modal Lightbox */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-cert-title"
        >
          <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl flex flex-col gap-4">
            <div className="flex justify-between items-center pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-emerald-400" />
                <h3 id="modal-cert-title" className="text-lg font-bold text-white">{selectedCert.title}</h3>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                aria-label="Tutup pratinjau sertifikat"
                className="p-1.5 text-slate-400 hover:text-white rounded-lg bg-slate-800 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-400"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative w-full h-[380px] rounded-xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center">
              <Image
                src={selectedCert.imageUrl}
                alt={selectedCert.title}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-contain"
              />
            </div>

            <div className="flex justify-between items-center pt-2">
              <span className="text-xs text-slate-400">Penyelenggara: {selectedCert.issuer || 'Politeknik Negeri Samarinda'}</span>
              <a
                href={selectedCert.gdriveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 text-white font-semibold text-xs hover:bg-emerald-500 transition-colors"
              >
                Open Original in G-Drive
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
