# 🧱 TileVerse — Discover Your Perfect Aesthetic

A modern, full-stack tile gallery web application built with Next.js App Router,
HeroUI, and BetterAuth. Browse curated ceramic, mosaic, and geometric tile
collections — filter, explore details, and manage your profile seamlessly.

🌐 **Live URL:** [https://showcase-tile-gallery.vercel.app/]

---

## Key Features

- 🔍 **Smart Search** — Instantly filter tiles by title using a real-time Hero UI search bar
- 🖼️ **Gallery View** — Responsive tile card grid with high-res previews and detail navigation
- 🔐 **Authentication** — Email/password login + Google OAuth via BetterAuth (MongoDB Adapter)
- 👤 **My Profile** — View and update your display name & avatar URL in real time
- 📱 **Fully Responsive** — Optimized layouts for mobile, tablet, and desktop
- 🎞️ **Marquee Banner** — Scrolling new-arrivals ticker on the homepage
- 🔒 **Private Routes** — Tile details and profile pages are protected for logged-in users only
- ⏳ **Loading States** — Skeleton loaders on all async data fetches
- 🚫 **Custom 404 Page** — Friendly not-found experience across all routes

---

## 🛠️ Tech Stack & npm Packages

| Package | Purpose |
|---|---|
| `next` | App Router framework |
| `@heroui/react` | UI component library |
| `better-auth` | Authentication (email + Google OAuth) |
| `mongoose` | MongoDB adapter for BetterAuth |
| `swiper` | Touch-friendly image carousel on detail pages |
| `react-toast` | Toast notifications for auth feedback |
| `react-fast-marquee` | Scrolling marquee on homepage |
| `framer-motion` | Page transition animations |
| `tailwind-css`  | Page Desgin |

---

## 📁 Project Structure

├── app/
│   ├── page.jsx              # Home page
│   ├── all-tiles/page.jsx    # Gallery with search
│   ├── tile/[id]/page.jsx    # Single tile details (private)
│   ├── my-profile/page.jsx   # User profile (private)
│   ├── login/page.jsx        # Login with Google OAuth
│   └── register/page.jsx     # Registration
├── components/               # Navbar, Footer, TileCard, etc.
├── lib/                      # BetterAuth config, DB connection
└── public/                   # Static assets

---

## 🔐 Route Permissions

| Route | Access |
|---|---|
| `/` | Public |
| `/all-tiles` | Public |
| `/login` | Public |
| `/register` | Public |
| `/tile/[id]` | 🔒 Private |
| `/my-profile` | 🔒 Private |

---

## ⚙️ Environment Variables

Create a `.env.local` file in the root:

```env
NEXT_PUBLIC_API_URL
MONGODB_URI
BETTER_AUTH_SECRET
BETTER_AUTH_URL
GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET
```

---

## 👨‍💻 Author

**MD SHAHRIAR KABIR**
[GitHub](https://github.com/md-shahriar-kabir/)

---
