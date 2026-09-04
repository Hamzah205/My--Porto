export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: 'website' | 'certificate';
  imageUrl: string;
  gdriveUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  tags: string[];
  isHighlighted: boolean;
  issuer?: string;
  date?: string;
}

export interface SocialLinkItem {
  id: string;
  platform: 'tiktok' | 'instagram' | 'youtube' | 'github';
  name: string;
  handle: string;
  url: string;
  followers?: string;
  badge?: string;
  color: string;
}

export const INITIAL_PORTFOLIO: PortfolioItem[] = [
  {
    id: '1',
    title: 'E-Commerce Next.js 3D Store',
    description: 'Modern online store with interactive 3D product preview, integrated payment gateway, and dynamic cart state management.',
    category: 'website',
    imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop',
    demoUrl: 'https://demo-store.vercel.app',
    githubUrl: 'https://github.com/ilham/ecommerce-3d',
    tags: ['Next.js 14', 'Tailwind', 'Three.js', 'Stripe'],
    isHighlighted: true,
  },
  {
    id: '2',
    title: 'Sertifikat Full-Stack Web Development',
    description: 'Kelulusan Program Intensive Full-Stack Web Engineering dengan fokus pada Next.js, Node.js, & Cloud Architecture.',
    category: 'certificate',
    imageUrl: 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?q=80&w=1000&auto=format&fit=crop',
    gdriveUrl: 'https://drive.google.com/file/d/1SAMPLE_CERTIFICATE_ID/view?usp=sharing',
    tags: ['Certificate', 'Full-Stack', 'Polnes'],
    issuer: 'Politeknik Negeri Samarinda',
    date: '2025',
    isHighlighted: true,
  },
  {
    id: '3',
    title: 'Smart Kasir Hybrid PWA',
    description: 'Aplikasi Kasir POS Advanced offline-first dengan sinkronisasi otomatis ke cloud server & laporan analitik real-time.',
    category: 'website',
    imageUrl: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=1000&auto=format&fit=crop',
    demoUrl: 'https://smart-kasir.demo.app',
    githubUrl: 'https://github.com/ilham/kasir-pwa',
    tags: ['PWA', 'React', 'IndexedDB', 'Tailwind'],
    isHighlighted: true,
  },
  {
    id: '4',
    title: 'Sertifikat Artificial Intelligence & Machine Learning',
    description: 'Sertifikasi Kompetensi AI Fundamentals & Neural Network Implementation.',
    category: 'certificate',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop',
    gdriveUrl: 'https://drive.google.com/file/d/2SAMPLE_AI_CERT_ID/view?usp=sharing',
    tags: ['AI', 'Python', 'Cert'],
    issuer: 'Dicoding Academy',
    date: '2026',
    isHighlighted: true,
  }
];

export const INITIAL_SOCIALS: SocialLinkItem[] = [
  {
    id: '1',
    platform: 'tiktok',
    name: 'TikTok',
    handle: '@hamza045sea',
    url: 'https://tiktok.com/@hamza045sea',
    color: 'from-cyan-500 via-pink-500 to-rose-500',
  },
  {
    id: '2',
    platform: 'instagram',
    name: 'Instagram',
    handle: '@ilham_arifin',
    url: 'https://instagram.com/ilham_arifin',
    color: 'from-purple-600 via-pink-500 to-amber-400',
  },
  {
    id: '3',
    platform: 'youtube',
    name: 'YouTube',
    handle: '@Hamza045Sea',
    url: 'https://youtube.com/@Hamza045Sea',
    color: 'from-red-600 via-red-500 to-red-400',
  },
  {
    id: '4',
    platform: 'github',
    name: 'GitHub',
    handle: 'Hamzah205',
    url: 'https://github.com/Hamzah205',
    color: 'from-slate-700 via-slate-600 to-slate-500',
  },
];

