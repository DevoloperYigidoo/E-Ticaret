# 🛒 E-Ticaret

React ile geliştirilmiş, FakeStore API kullanan modern bir e-ticaret uygulaması.

---

## Demo:https://e-ticarettt.vercel.app/

---

## 🚀 Özellikler

- 🛍️ Ürün listeleme ve detay sayfası
- 🛒 Sepet yönetimi (ekleme, çıkarma, toplam tutar)
- 🔴 Redux Toolkit ile global state yönetimi
- 🎨 Material UI bileşenleri
- 🌙 Karanlık / Aydınlık tema desteği
- 🔔 Toast bildirimleri (react-toastify)
- ✨ Framer Motion animasyonları
- 📱 Responsive tasarım

---

## 🛠️ Kullanılan Teknolojiler

| Teknoloji | Açıklama |
|---|---|
| React | Kullanıcı arayüzü |
| Vite | Build aracı |
| Redux Toolkit | State yönetimi |
| React Router DOM | Sayfa yönlendirme |
| Material UI (MUI) | UI bileşen kütüphanesi |
| Framer Motion | Animasyonlar |
| React Toastify | Bildirimler |
| FakeStore API | Ürün verileri |

---

## 📦 Kurulum

```bash
# Repoyu klonla
git clone https://github.com/DevoloperYigidoo/E-Ticaret.git

# Proje dizinine gir
cd E-Ticaret

# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev
```

Uygulama `http://localhost:5173` adresinde çalışacaktır.

---

## 📁 Proje Yapısı

```
src/
├── components/
│   ├── Header.jsx        # Navbar, arama, sepet ikonu, tema
│   ├── ProductList.jsx   # Ürün listesi
│   ├── Products.jsx      # Tek ürün kartı
│   ├── BasketPage.jsx    # Sepet yan paneli
│   ├── PageContainer.jsx # Sayfa sarmalayıcı
│   └── Loading.jsx       # Yükleme bileşeni
├── Config/
│   └── RouterConfig.jsx  # Sayfa rotaları
├── redux/
│   └── slices/
│       ├── productSlices.js
│       └── basketSlices.js
├── css/                  # CSS dosyaları
├── images/               # Görseller
└── App.jsx
```

---

## 🔌 API

Bu proje [FakeStore API](https://fakestoreapi.com/) kullanmaktadır.

| Endpoint | Açıklama |
|---|---|
| `GET /products` | Tüm ürünleri listeler |
| `GET /products/:id` | Tek ürün detayı |

---

## 👤 Geliştirici

**Yiğit** — [@DevoloperYigidoo](https://github.com/DevoloperYigidoo)

---

💡 Not: Bu proje öğrenme amaçlı geliştirilmiştir.