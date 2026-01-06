# Platform E-Commerce

Platform e-commerce modern dan responsif yang dibangun dengan Next.js, menampilkan serangkaian fungsi lengkap untuk bisnis ritel online. Platform ini menyediakan solusi lengkap untuk menampilkan produk, mengelola keranjang belanja, dan memproses pesanan dengan antarmuka pengguna yang intuitif.

## Fitur

- **Desain Responsif**: Tata letak yang sepenuhnya responsif dan bekerja dengan lancar di semua perangkat (desktop, tablet, mobile)
- **Katalog Produk**: Jelajahi produk dengan kemampuan filter, sortir, dan pencarian
- **Keranjang Belanja**: Tambah, hapus, dan perbarui item di keranjang belanja Anda
- **Daftar Keinginan**: Simpan produk favorit untuk pembelian nanti
- **Autentikasi Pengguna**: Fungsi masuk dan daftar
- **Detail Produk**: Tampilan produk terperinci dengan gambar, deskripsi, dan spesifikasi
- **Proses Checkout**: Checkout yang mudah dengan berbagai opsi pembayaran
- **Manajemen Akun**: Profil pengguna dan riwayat pesanan
- **Tampilan Cepat**: Pratinjau produk tanpa meninggalkan halaman saat ini
- **Fungsi Pencarian**: Temukan produk dengan cepat menggunakan pencarian lanjutan
- **Navigasi Kategori**: Penjelajahan produk yang terorganisir berdasarkan kategori
- **Item yang Baru Dilihat**: Lacak dan tampilkan produk yang baru dilihat
- **Halaman Kontak**: Komunikasi mudah dengan toko

## Halaman

### Halaman Beranda

- Tampilan produk unggulan
- Banner promosi
- Sorotan kategori
- Produk terbaru
- Produk terlaris

### Halaman Toko

- **Grid Toko**: Tampilan grid produk standar
- **Toko dengan Sidebar**: Grid produk dengan sidebar filter
- **Toko tanpa Sidebar**: Tampilan grid produk lebar penuh
- **Detail Toko**: Halaman detail produk individual dengan galeri gambar, deskripsi, dan ulasan

### Akun Pengguna

- **Masuk**: Halaman login pengguna
- **Daftar**: Pendaftaran pengguna baru
- **Akun Saya**: Manajemen profil pengguna
- **Riwayat Pesanan**: Lacak pesanan sebelumnya
- **Daftar Keinginan**: Daftar produk yang disimpan

### Proses Belanja

- **Keranjang**: Keranjang belanja dengan manajemen item
- **Checkout**: Proses checkout yang aman
- **Pesanan Berhasil**: Halaman konfirmasi setelah pembelian berhasil

### Halaman Error

- **Error 404**: Halaman error khusus untuk tautan yang rusak

## Stack Teknologi

- **Framework**: Next.js 16
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **Integrasi Database**: Siap untuk integrasi dengan berbagai database

## Instalasi

1. Clone repositori:

```bash
git clone <url-repositori>
```

2. Install dependensi:

```bash
npm install
```

3. Setup variabel environment:

```bash
cp .env.example .env.local
```

Edit `.env.local` dengan konfigurasi Anda

4. Jalankan server development:

```bash
npm run dev
```

5. Buka [http://localhost:3000](http://localhost:3000) di browser Anda

## Variabel Environment

Buat file `.env.local` di direktori root dengan variabel berikut:

```
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=kunci_rahasia_anda
DATABASE_URL=url_database_anda
EMAIL_SERVER_USER=pengguna_email_anda
EMAIL_SERVER_PASSWORD=kata_sandi_email_anda
EMAIL_SERVER_HOST=host_email_anda
EMAIL_SERVER_PORT=port_email_anda
```

## Struktur Proyek

```
src/
├── app/                 # Halaman Next.js 13+ App Router
├── components/         # Komponen UI yang dapat digunakan kembali
├── redux/             # Konfigurasi Redux store
├── types/             # Definisi tipe TypeScript
└── context/           # Provider context React
```
