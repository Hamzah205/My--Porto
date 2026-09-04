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
    <main className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-12">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-cyan-950 border border-cyan-500/30 text-cyan-400">
              <LayoutDashboard className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Admin Control Panel</h1>
              <p className="text-xs text-slate-400">Kelola item portfolio, sertifikat Google Drive & status highlight.</p>
            </div>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Public Site
          </Link>
        </div>

        {/* Top Analytics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="text-xs text-slate-400">Total Items</div>
            <div className="text-2xl font-bold text-white mt-1">{items.length}</div>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="text-xs text-slate-400">Google Drive Certs</div>
            <div className="text-2xl font-bold text-emerald-400 mt-1">
              {items.filter((i) => i.category === 'certificate').length}
            </div>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="text-xs text-slate-400">Highlighted on Landing</div>
            <div className="text-2xl font-bold text-cyan-400 mt-1">
              {items.filter((i) => i.isHighlighted).length}
            </div>
          </div>
        </div>

        {/* Add Form & List Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Form */}
          <div className="lg:col-span-5 p-6 rounded-3xl bg-slate-900/80 border border-slate-800 flex flex-col gap-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Plus className="w-5 h-5 text-cyan-400" />
              Add Portfolio / Certificate
            </h2>

            <form onSubmit={handleAddItem} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Nama Website / Judul Sertifikat"
                  required
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as 'website' | 'certificate')}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500"
                >
                  <option value="website">Website Built</option>
                  <option value="certificate">Sertifikat (G-Drive)</option>
                </select>
              </div>

              {category === 'certificate' ? (
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Google Drive View Link</label>
                  <input
                    type="url"
                    value={gdriveUrl}
                    onChange={(e) => setGdriveUrl(e.target.value)}
                    placeholder="https://drive.google.com/file/d/.../view"
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
              ) : (
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Live Demo URL</label>
                  <input
                    type="url"
                    value={demoUrl}
                    onChange={(e) => setDemoUrl(e.target.value)}
                    placeholder="https://my-demo-web.vercel.app"
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Description</label>
                <textarea
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  rows={3}
                  placeholder="Penjelasan singkat project..."
                  required
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <button
                type="submit"
                className="mt-2 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs transition-colors shadow-lg shadow-cyan-600/20"
              >
                Save New Entry
              </button>
            </form>
          </div>

          {/* List Table */}
          <div className="lg:col-span-7 p-6 rounded-3xl bg-slate-900/80 border border-slate-800 flex flex-col gap-4">
            <h2 className="text-lg font-bold text-white">Current Active List</h2>

            <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl border ${
                      item.category === 'website'
                        ? 'bg-cyan-950 text-cyan-400 border-cyan-500/30'
                        : 'bg-emerald-950 text-emerald-400 border-emerald-500/30'
                    }`}>
                      {item.category === 'website' ? <Globe className="w-4 h-4" /> : <Award className="w-4 h-4" />}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{item.title}</h4>
                      <p className="text-[11px] text-slate-400 line-clamp-1">{item.description}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleDelete(item.id)}
                    className="p-2 text-slate-500 hover:text-rose-400 rounded-lg hover:bg-slate-900"
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
