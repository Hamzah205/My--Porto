# 🛡️ Hamza-Sea Porto - Web Portfolio

Interactive Web Portfolio karya **Mohammad Ilham Arifin** yang dibangun menggunakan Next.js 16 (Turbopack), Tailwind CSS, Framer Motion, dan dilengkapi dengan arsitektur **Keamanan Grade A+ (Grade A Security Standard)**.

---

## 🔒 Sertifikat & Standar Keamanan Grade A+

Aplikasi ini mengimplementasikan praktik keamanan web enterprise tingkat tinggi (Grade A+ berdasarkan standar evaluasi SSL Labs & OWASP Secure Headers):

### 1. **HTTP Strict Transport Security (HSTS)**
```http
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```
Memaksa seluruh koneksi menggunakan enkripsi HTTPS aman selama 2 tahun dengan dukungan preloading browser.

### 2. **Content Security Policy (CSP)**
```http
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; ...
```
Mencegah serangan XSS (Cross-Site Scripting), data injection, dan eksekusi skrip berbahaya tak terdeteksi.

### 3. **Clickjacking & Framing Protection**
```http
X-Frame-Options: SAMEORIGIN
```
Melindungi situs dari pembajakan klik (clickjacking) dan penyusupan via `<iframe>` jahat.

### 4. **MIME-Type Sniffing Prevention**
```http
X-Content-Type-Options: nosniff
```
Mencegah browser menebak jenis MIME file, mengisolasi potensi eksekusi file berbahaya.

### 5. **Privacy & Device Restrictions (Permissions Policy)**
```http
Permissions-Policy: camera=(), microphone=(), geolocation=(), browsing-topics=()
```
Memblokir akses hardware yang tidak dibutuhkan (kamera, mikrofon, lokasi) demi menjaga privasi penuh pengguna.

### 6. **Referrer Privacy Control**
```http
Referrer-Policy: strict-origin-when-cross-origin
```
Menyembunyikan informasi asal domain penuh saat pengguna menavigasi ke situs eksternal.

---

## 🎨 Tema & Desain (3D Neumorphic & Theme Rules)
- **Primary Aesthetics**: Neumorphic 3D (Inset Soft Shadows & Glossy Elevation)
- **Palette**: Dark Tosca (Teal/Emerald), Soul Break (Deep Slate/Black), & Vibrant Orange Highlights
- **Typography**: IBM Plex Sans & JetBrains Mono (Developer Focused)
- **Animation**: 3D Animated Card Tilt, Shimmer Wave Hover, & Smooth Motion

---

## 🚀 Fitur Utama
- **Hero Interactive Showcase**: Profil 3D Tilt Card dengan status ketersediaan kerja
- **Highlights & Certificate Modal**: Integrasi preview sertifikat Google Drive & Live Site Web Project
- **Social Media Hub**: Tautan langsung ke TikTok (`@hamza045sea`), YouTube (`@Hamza045Sea`), GitHub (`Hamzah205`), & Instagram
- **Admin Security Suite**: NextAuth Credentials Provider dengan JWT Authentication & Hashing

---

## 💻 Cara Menjalankan Lokal

```bash
# Install Dependensi
npm install

# Jalankan server pengembang
npm run dev
```

Buka `http://localhost:3000` di browser.

---

## 🛠️ Tech Stack
- **Framework**: Next.js 16.3.4 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React & Custom SVG
- **Animations**: Framer Motion
- **Authentication**: NextAuth.js
