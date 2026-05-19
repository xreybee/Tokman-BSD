# 📹 Video Berbasis Web - Perpisahan Dramatis

## Deskripsi Project
Web interaktif yang menampilkan pengalaman emosional tentang perpisahan dengan alur pengalaman pengguna yang dramatis dan menyentuh.

## Alur Pengalaman Pengguna

### 1. **Landing Page** 
- Halaman pembuka dengan judul dan tombol "Mulai Sekarang"
- Styling dramatis dengan dark theme dan accent color merah

### 2. **Input Nama & Gender**
- User memasukkan nama
- User memilih gender (Laki-laki / Perempuan)
- Validasi form sebelum lanjut

### 3. **Halaman Greeting**
- Menampilkan "Halo, [Nama]!"
- Random compliment berbeda berdasarkan gender (10 variasi untuk setiap gender)
- Ucapan terima kasih yang dipersonalisasi
- **Auto-navigate ke halaman berikutnya setelah 8 detik**

### 4. **Halaman Konfirmasi**
- Pertanyaan: "Kamu Sudah Siap Menjelajahi Masa Lalu?"
- 2 button pilihan:
  - **"Saya Belum Siap"** → ke halaman bernafas
  - **"Saya Sudah Siap"** → ke galeri media

### 5. **Halaman Bernafas (Optional)**
- Instruksi relaksasi
- Animasi lingkaran bernafas yang dinamis
- Timer 10 detik untuk exercise
- Button "Saya Sudah Siap" untuk lanjut

### 6. **Halaman Galeri Media**
- **Auto-scroll otomatis** dari atas ke bawah
- Menampilkan **foto dan video** secara bergantian
- **Video auto-play** saat scroll berjalan
- **Background musik** yang dimainkan selama scroll
- Scroll dapat dilakukan manual atau otomatis
- Setelah scroll selesai, auto-navigate ke thank you page

### 7. **Thank You Page**
- Ucapan terima kasih yang dipersonalisasi: "Terima Kasih, [Nama]"
- Button "Mulai Ulang" untuk restart experience

## Struktur Folder

```
tkm/
├── index.html          # File HTML utama
├── styles.css          # Styling CSS dramatis
├── script.js           # Logika JavaScript
├── README.md           # File ini
├── foto/               # Folder untuk foto (buat sendiri)
│   ├── sample1.jpg
│   ├── sample2.jpg
│   └── ...
├── video/              # Folder untuk video (buat sendiri)
│   ├── sample1.mp4
│   ├── sample2.mp4
│   └── ...
└── audio/              # Folder untuk musik (buat sendiri)
    └── background.mp3
```

## Cara Setup & Testing

### 1. Buat Folder Media (Jika belum ada)
```bash
mkdir foto
mkdir video
mkdir audio
```

### 2. Tambahkan File Media Anda
- Letakkan foto di folder `foto/` (format: JPG, PNG)
- Letakkan video di folder `video/` (format: MP4)
- Letakkan musik latar di folder `audio/` dengan nama `background.mp3`

### 3. Update Paths di `script.js` (Jika diperlukan)
Di bagian `initializeMediaGallery()`, ubah `mediaItems` array sesuai file Anda:

```javascript
const mediaItems = [
    {
        type: 'image',
        src: 'foto/nama-file-Anda.jpg',
        caption: 'Deskripsi'
    },
    {
        type: 'video',
        src: 'video/nama-file-Anda.mp4',
        caption: 'Deskripsi'
    }
];
```

### 4. Jalankan Local Server
Gunakan salah satu dari:

**Option A: Python 3**
```bash
python -m http.server 8000
```

**Option B: Node.js (http-server)**
```bash
npx http-server
```

**Option C: Live Server (VS Code Extension)**
- Install extension "Live Server"
- Klik kanan `index.html` → "Open with Live Server"

Kemudian buka `http://localhost:8000` di browser

## Customization

### Mengubah Compliments
Edit array di `script.js`:
```javascript
const compliments = {
    'laki-laki': [
        'Compliment 1',
        'Compliment 2',
        // dst...
    ],
    'perempuan': [
        // Compliments untuk perempuan
    ]
};
```

### Mengubah Styling
Edit `styles.css`:
- **Warna utama**: Ubah variable `--primary-color`, `--secondary-color`, `--accent-color`
- **Font**: Ubah `font-family` di `body`
- **Durasi animasi**: Ubah nilai di `@keyframes`

### Mengubah Kecepatan Auto-Scroll
Di `script.js` dalam fungsi `startAutoScroll()`:
```javascript
const scrollSpeed = 1; // Ubah nilai ini (lebih besar = lebih cepat)
```

### Mengubah Durasi Greeting
Di fungsi `goToGreeting()`:
```javascript
setTimeout(() => {
    goToConfirmation();
}, 8000); // Ubah 8000 ke milliseconds yang diinginkan
```

## Upload ke GitHub

### 1. Buat Repository Baru
- Login ke GitHub
- Klik "New Repository"
- Nama: `perpisahan-video-web` (atau nama apapun)
- Pilih Public (agar bisa diakses online)

### 2. Push Code Anda
```bash
git init
git add .
git commit -m "Initial commit: Video perpisahan berbasis web"
git branch -M main
git remote add origin https://github.com/username/perpisahan-video-web.git
git push -u origin main
```

### 3. Enable GitHub Pages
- Di repository, buka Settings
- Scroll ke "GitHub Pages"
- Source: pilih "main" branch
- Klik Save
- Website akan tersedia di: `https://username.github.io/perpisahan-video-web`

## Features

✅ Responsive design (mobile & desktop)
✅ Smooth animations & transitions
✅ Dramatik dark theme dengan red accent
✅ Auto-scroll media gallery
✅ Auto-play video
✅ Background music support
✅ Random compliments
✅ Personalized messages
✅ Breathing exercise animation
✅ Form validation

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Tips & Trik

1. **Audio Issue**: Jika musik tidak auto-play, pastikan Anda berinteraksi dengan halaman terlebih dahulu (klik button, dsb) karena browser modern memblokir autoplay tanpa interaksi user.

2. **Video Format**: Untuk kompatibilitas maksimal, gunakan format MP4 dengan codec H.264.

3. **Ukuran File**: Kompres foto dan video untuk loading lebih cepat di internet.

4. **Mobile Optimization**: Tested dan responsive di semua ukuran layar.

## License

Free to use and modify for personal projects.

---

**Dibuat dengan 💔 untuk momen-momen berkesan**
