'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { INITIAL_PORTFOLIO, PortfolioItem } from '@/lib/data';
import { LayoutDashboard, Plus, Trash2, Edit3, ArrowLeft, Award, Globe, Link2, CheckCircle2 } from 'lucide-react';

export default function AdminDashboardPage() {
  const [items, setItems] = useState<PortfolioItem[]>(INITIAL_PORTFOLIO);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [category, setCategory] = useState<'website' | 'certificate'>('website');
  const [gdriveUrl, setGdriveUrl] = useState('');
  const [demoUrl, setDemoUrl] = useState('');

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !desc) return;

    const newItem: PortfolioItem = {
      id: Date.now().toString(),
      title,
      description: desc,
      category,
      imageUrl: category === 'certificate'
        ? 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?q=80&w=1000'
        : 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000',
      gdriveUrl: gdriveUrl || undefined,
      demoUrl: demoUrl || undefined,
      tags: [category, 'Custom'],
      isHighlighted: true,
    };

    setItems([newItem, ...items]);
    setTitle('');
    setDesc('');
    setGdriveUrl('');
    setDemoUrl('');
  };

  const handleDelete = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-teal-900/40">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-slate-900 via-teal-950 to-slate-950 border border-teal-500/30 text-teal-400 shadow-[inset_0_2px_4px_rgba(255,255,255,0.05),0_8px_16px_rgba(0,0,0,0.6)]">
              <LayoutDashboard className="w-6 h-6 text-orange-400" />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold text-white">
                Admin <span className="bg-gradient-to-r from-teal-400 via-emerald-300 to-orange-500 bg-clip-text text-transparent">Control Panel</span>
              </h1>
              <p className="text-xs text-teal-300/80 mt-0.5">Kelola item portfolio, sertifikat Google Drive & status highlight.</p>
            </div>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-slate-900/80 border border-teal-500/20 text-xs font-bold text-teal-300 hover:text-white hover:border-orange-500/40 hover:shadow-[0_0_15px_rgba(249,115,22,0.2)] transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]"
          >
            <ArrowLeft className="w-4 h-4 text-orange-400" />
            Back to Public Site
          </Link>
        </div>

        {/* Top Analytics Cards Neumorphic */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-teal-950/40 border border-teal-500/20 shadow-[inset_0_2px_4px_rgba(255,255,255,0.03),0_15px_30px_rgba(0,0,0,0.8)]">
            <div className="text-xs font-bold uppercase tracking-wider text-teal-300/80">Total Items</div>
            <div className="text-3xl font-extrabold text-white mt-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{items.length}</div>
          </div>
          <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-teal-950/40 border border-teal-500/20 shadow-[inset_0_2px_4px_rgba(255,255,255,0.03),0_15px_30px_rgba(0,0,0,0.8)]">
            <div className="text-xs font-bold uppercase tracking-wider text-teal-300/80">Google Drive Certs</div>
            <div className="text-3xl font-extrabold text-orange-400 mt-1 drop-shadow-[0_0_10px_rgba(249,115,22,0.3)]">
              {items.filter((i) => i.category === 'certificate').length}
            </div>
          </div>
          <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-teal-950/40 border border-teal-500/20 shadow-[inset_0_2px_4px_rgba(255,255,255,0.03),0_15px_30px_rgba(0,0,0,0.8)]">
            <div className="text-xs font-bold uppercase tracking-wider text-teal-300/80">Highlighted on Landing</div>
            <div className="text-3xl font-extrabold text-teal-400 mt-1 drop-shadow-[0_0_10px_rgba(20,184,166,0.3)]">
              {items.filter((i) => i.isHighlighted).length}
            </div>
          </div>
        </div>

        {/* Add Form & List Grid Neumorphic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Form */}
          <div className="lg:col-span-5 p-7 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-teal-950/40 border border-teal-500/20 shadow-[inset_0_2px_4px_rgba(255,255,255,0.03),0_15px_30px_rgba(0,0,0,0.8)] flex flex-col gap-5">
            <h2 className="text-lg font-extrabold text-white flex items-center gap-2">
              <Plus className="w-5 h-5 text-orange-400" />
              Add Portfolio / Certificate
            </h2>

            <form onSubmit={handleAddItem} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-semibold text-teal-300/80 mb-1.5">Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Nama Website / Judul Sertifikat"
                  required
                  className="w-full px-4 py-3 rounded-2xl bg-slate-950 border border-teal-900/40 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-orange-500 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-teal-300/80 mb-1.5">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as 'website' | 'certificate')}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-950 border border-teal-900/40 text-xs text-white focus:outline-none focus:border-orange-500 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] transition-all cursor-pointer"
                >
                  <option value="website">Website Built</option>
                  <option value="certificate">Sertifikat (G-Drive)</option>
                </select>
              </div>

              {category === 'certificate' ? (
                <div>
                  <label className="block text-xs font-semibold text-teal-300/80 mb-1.5">Google Drive View Link</label>
                  <input
                    type="url"
                    value={gdriveUrl}
                    onChange={(e) => setGdriveUrl(e.target.value)}
                    placeholder="https://drive.google.com/file/d/.../view"
                    className="w-full px-4 py-3 rounded-2xl bg-slate-950 border border-teal-900/40 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-orange-500 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] transition-all"
                  />
                </div>
              ) : (
                <div>
                  <label className="block text-xs font-semibold text-teal-300/80 mb-1.5">Live Demo URL</label>
                  <input
                    type="url"
                    value={demoUrl}
                    onChange={(e) => setDemoUrl(e.target.value)}
                    placeholder="https://my-demo-web.vercel.app"
                    className="w-full px-4 py-3 rounded-2xl bg-slate-950 border border-teal-900/40 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-orange-500 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] transition-all"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-teal-300/80 mb-1.5">Description</label>
                <textarea
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  rows={3}
                  placeholder="Penjelasan singkat project..."
                  required
                  className="w-full px-4 py-3 rounded-2xl bg-slate-950 border border-teal-900/40 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-orange-500 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] transition-all"
                />
              </div>

              <button
                type="submit"
                className="mt-2 py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-white font-bold text-xs transition-all duration-300 shadow-[0_8px_20px_rgba(249,115,22,0.4),inset_0_2px_4px_rgba(255,255,255,0.4)] hover:shadow-[0_12px_28px_rgba(249,115,22,0.6)] active:scale-95 cursor-pointer border border-orange-400/50"
              >
                Save New Entry
              </button>
            </form>
          </div>

          {/* List Table Neumorphic */}
          <div className="lg:col-span-7 p-7 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-teal-950/40 border border-teal-500/20 shadow-[inset_0_2px_4px_rgba(255,255,255,0.03),0_15px_30px_rgba(0,0,0,0.8)] flex flex-col gap-5">
            <h2 className="text-lg font-extrabold text-white">Current Active List</h2>

            <div className="space-y-3.5 max-h-[500px] overflow-y-auto pr-1">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="p-4.5 rounded-2xl bg-slate-950 border border-teal-900/30 hover:border-teal-500/30 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] transition-all duration-300 flex items-center justify-between gap-4 group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`p-3 rounded-2xl border shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] ${
                      item.category === 'website'
                        ? 'bg-teal-950/80 text-teal-400 border-teal-500/30'
                        : 'bg-orange-950/80 text-orange-400 border-orange-500/30'
                    }`}>
                      {item.category === 'website' ? <Globe className="w-4 h-4" /> : <Award className="w-4 h-4" />}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-teal-300 transition-colors">{item.title}</h4>
                      <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">{item.description}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleDelete(item.id)}
                    className="p-2.5 text-slate-500 hover:text-rose-400 rounded-xl hover:bg-rose-500/10 hover:border hover:border-rose-500/30 transition-all cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
