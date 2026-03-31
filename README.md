# 🍊 Orange Peel — Bitcoin Streetwear

> *Wear your values. Spread your world.*

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?logo=vercel)](https://orangepeel-sappes.vercel.app/)
[![License](https://img.shields.io/badge/License-Proprietary-orange)](./LICENSE)

**Orange Peel** is a Bitcoin-native streetwear brand built on conviction — not hype.  
This repository contains the full source code of the brand's e-commerce website, migrated from WordPress/WooCommerce to a custom Next.js stack for complete code ownership and Bitcoin-native payment readiness.

🌐 **Live site:** [orangepeel-sappes.vercel.app](https://orangepeel-sappes.vercel.app)

---

## ⚡ The Brand

Orange Peel designs apparel for Bitcoiners — from curious newcomers to seasoned maximalists. Three collections, one cause:

| Collection | Aesthetic | For whom |
|---|---|---|
| 🧙 **Wizards** | Discreet, encoded | The silent orange-pillers |
| ⚔️ **Warriors** | Bold, unapologetic | Those who wear it loud |
| 🔐 **Cyphers** | Technical, minimalist | Those who build the stack |

*Provocative. Subtle. Cryptic. Your style is yours.*

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Fonts | Playfair Display · Inter |
| Hosting | Vercel |
| Source control | GitHub |
| Payments *(roadmap)* | Bitcoin — Onchain & Lightning |

---

## 📁 Project Structure

```
orangepeel-sappes/
├── app/
│   ├── page.tsx                  # Home page
│   ├── collections/
│   │   ├── warriors/
│   │   ├── wizards/
│   │   └── cyphers/
│   ├── designs/
│   ├── products/
│   ├── learn/
│   │   ├── library/
│   │   ├── courses/
│   │   └── tribes/
│   ├── about/
│   │   ├── page.tsx
│   │   ├── how-we-work/
│   │   └── faq/
│   └── contact/
├── components/
│   ├── Navbar.tsx
│   └── Footer.tsx
├── public/
│   └── images/
│       ├── designs/              # 1024×1024 design files
│       └── products/             # 300×300 product images
├── styles/
│   └── globals.css
├── next.config.ts
└── tailwind.config.ts
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 18
- npm

### Installation

```bash
git clone https://github.com/man-orangepeel/orangepeel-sappes.git
cd orangepeel-sappes
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build & Deploy

```bash
npm run build
```

Deployment is handled automatically via Vercel on push to `main`.

---

## 🎨 Design Tokens

| Token | Value |
|---|---|
| Brand orange | `#f7931a` |
| Background dark | `#0a0a0a` |
| Section alt | `#111111` |
| Heading font | Playfair Display |
| Body font | Inter |

---

## 🧱 Why a Custom Build?

Orange Peel moved away from WordPress for two reasons:

1. **Full ownership** — No platform dependency, complete control over code and data.
2. **Bitcoin-native readiness** — A custom stack is the only viable path to integrating Bitcoin payments properly.

---

## 📄 License

Proprietary. All rights reserved — Orange Peel © 2026.  
Design assets, brand identity, and product imagery are not licensed for reuse.

---

*Built on conviction. Paid in sats.* 🍊