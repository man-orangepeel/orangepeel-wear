# Orange Peel — Site Roadmap, Architecture & Design System

> Objectif principal : vitrine portfolio Bitcoin-only — branding fort, contenu éducatif, technique maîtrisée
> Commerce en pause — priorité à l'impression visuelle et à la découverte de la marque

---

## Architecture des routes

```
/                              ← Home                  ✅ done + optimisé
/designs                       ← All Our Designs        ✅ done + carousel noir + pagination
/products                      ← All Our Products       ✅ done + filtres
/products/[slug]               ← Page produit           ✅ done (color picker, size selector, galerie)
/collections/warriors          ← The Warriors           ✅ done + harmonisé
/collections/wizards           ← The Wizards            ✅ done + harmonisé
/collections/cyphers           ← The Cyphers            ✅ done + harmonisé
/learn/library                 ← A Bitcoin Library      ✅ done (fetch GitHub API, 6 catégories)
/learn/courses                 ← From Newbie to Maxi    ✅ done (courses.json local, thèmes, goals)
/learn/tribes                  ← Find Your Tribe        ✅ done (BTCMap, toggle communautés/marchands)
/about                         ← The Orange We Are      ✅ done (contenu réel)
/about/how-we-work             ← The Way We Peel        ✅ done (contenu réel, piliers)
/about/faq                     ← Find Your Answers      ✅ done (accordion client)
/contact                       ← Contact Us             ✅ done (Resend, form validé)
/cart                          ← Mon Panier             ✅ done (placeholder informatif)
```

---

## Navigation (Navbar)

```
Logo (gauche)
Home
Suit Up For Freedom ▾
  └── Our Designs         → /designs
  └── Our Products        → /products
Down The Rabbit Hole ▾
  └── A Bitcoin Library   → /learn/library
  └── From Newbie to Maxi → /learn/courses
  └── Find Your Tribe     → /learn/tribes
About Us ▾
  └── The Orange We Are   → /about
  └── The Way We Peel     → /about/how-we-work
  └── Find Your Answers   → /about/faq
  └── Contact Us          → /contact
🛒 Panier (droite)        → /cart
```

**Comportement navbar :**
- Fixed, `h-[70px]`, fond `#0d0d0d/95` + backdrop-blur
- Masquée au scroll down, réapparaît au scroll up (useState + scroll listener)
- Dropdowns : `group-hover` CSS, alignés sur le bas exact de la navbar (`self-stretch flex items-center`)
- Police menus : `text-[15px]`, gap : `gap-10`

---

## Design System — Brand Identity

### Couleurs

| Token | Valeur | Usage |
|---|---|---|
| Orange brand | `#ed760a` | Accent principal, boutons CTA, icônes |
| Orange clair | `#efa813` | Gradient start (Warriors, hero home) |
| Orange lumineux | `#ffbe2e` | Gradient start (heroes pages intérieures) |
| Noir profond | `#0d0d0d` | Navbar, footer, fonds sombres |
| Noir section | `#111518` | Texte principal sur fond clair |
| Blanc | `#f5f5f5` | Fonds neutres, texte sur fond sombre |
| Gris texte | `#6b7280` | Descriptifs secondaires |
| Violet Wizards | `#482B5F` → `#1D1D63` | Collection Wizards uniquement |
| Gris Cyphers | `#4A4A4A` → `#000000` | Collection Cyphers uniquement |

### Gradient hero standard (pages intérieures)
```css
linear-gradient(160deg, #ffbe2e 0%, #ed760a 100%)
```
- Texte h1 : `text-[#111518]` (RGAA AA ~7:1 sur orange)
- Texte description : `text-[#111518]/75`
- Label uppercase : `text-black/50`
- Positionnement : `-mt-[70px]` + `paddingTop: calc(70px + 2rem)` → collé sous la navbar

### Typographie

| Variable CSS | Font | Usage |
|---|---|---|
| `--font-heading` | Playfair Display | Titres H1/H2 principaux, serif élégant |
| `--font-body` | Inter Tight | Corps de texte |
| `--font-anton` | Anton | Collection Warriors (bold, condensed) |
| `--font-caudex` | Caudex | Collection Wizards (serif classique) |
| `--font-orbitron` | Orbitron | Collection Cyphers (techno) |

### Identité des collections

| Collection | Gradient | Typo | Ton |
|---|---|---|---|
| Warriors | `#efa813` → `#ed760a` | Anton | Bold, explicite, provoc |
| Wizards | `#482B5F` → `#1D1D63` | Caudex | Discret, mystique, sobre |
| Cyphers | `#4A4A4A` → `#000000` | Orbitron | Technique, minimaliste, codé |

### Espacement & layout

- Container max : `max-w-7xl` (home, grilles produits), `max-w-6xl` (designs), `max-w-4xl` (texte/hero)
- Layout main : `pt-[70px]` (compensation navbar fixe)
- Hero standard : `-mt-[70px]` pour coller background à la navbar
- Padding sections : `py-16 px-6` standard, `py-20` pour sections majeures

### Composants récurrents

**Bouton CTA principal (fond sombre)**
```
bg-[#ed760a] text-black font-bold px-8 py-3 text-sm rounded-sm hover:bg-[#efa813]
```

**Bouton outline (fond clair)**
```
border border-[#111518] text-[#111518] font-semibold px-8 py-3 text-sm rounded-sm
hover:bg-[#111518] hover:text-white
```

**Carte produit**
```
group flex flex-col gap-3
→ image: overflow-hidden, transition-transform duration-300 group-hover:scale-[1.02]
→ nom: text-sm font-semibold group-hover:text-[#ed760a]
→ prix: text-[#6b7280] text-xs
```

**Label de section**
```
text-[#ed760a] text-sm tracking-widest uppercase font-medium
```

**Hover images** : `scale-[1.02]` uniforme sur tout le site (pas plus)

### Footer

- Fond `#0d0d0d`, `border-t border-white/10`
- "What We Stand For" : manifeste de la marque, `text-[26px] md:text-[32px]`
- Icônes sociales : X/Twitter, Nostr (éclair), Instagram — SVG inline, `text-white/40 hover:text-white`
- Logo centré `480px` large, copyright `text-white/25 text-xs`
- Padding : `pt-16 pb-4`

---

## Décisions techniques

| Sujet | Décision | Statut |
|---|---|---|
| Navbar | `"use client"` — scroll hide/show, dropdowns CSS-only | ✅ |
| Hero gap navbar | `-mt-[70px]` + `paddingTop: calc(70px + Xrem)` | ✅ |
| Parallax home | Composant `ParallaxHero` client avec `scroll` listener | ✅ |
| Bitcoin Library | Fetch GitHub API PlanB + 6 catégories filtrées | ✅ |
| From Newbie to Maxi | `courses.json` local (PlanB), regroupé par topic, goals inclus | ✅ |
| Find Your Tribe | `"use client"` — toggle iframe BTCMap communities/merchants | ✅ |
| Contact form | Resend API, lazy init dans POST handler | ✅ |
| Color picker | `useState` dans `AddToCart.tsx` (client), 3 coloris | ✅ |
| Designs pagination | 24 items/page, reset au changement de filtre | ✅ |
| Commerce | BTCPay Server — en pause, page placeholder active | ⏸️ |

---

## Pages — État détaillé

### Home `/`
- Hero : parallax (image bg fixe, texte scroll) — `ParallaxHero.tsx`
- Badges Premium / Eco / Privacy / BTC → liens vers pages About
- Collections : 3 colonnes espacées (`gap-3 bg-white px-3`), bouton auto-width aligné gauche
- Designs : 6 aperçus sur fond orange → `/designs`
- Trending : 6 produits avec slugs → `/products/[slug]`

### All Our Designs `/designs`
- Header : hero orange gradient
- Carousel luxe : 1 image, 85vh, fond noir, flèches blanches, dots orange
- Filtres : All / Warriors / Wizards / Cyphers (tab underline)
- Grid : 3 colonnes, **pagination 24/page**
- CTA bas → `/products`

### All Our Products `/products`
- Header : hero orange gradient
- Filtres : collection × type × genre
- Grid 3 colonnes, cartes image + nom + prix uniquement

### Pages Collections `/collections/[slug]`
- Hero : identité propre à chaque collection (gradient + typo dédiée)
- Badges : SVG icons (pas d'emojis)
- Produits : liés à `/products/[slug]`
- "Why The X?" — texte manifeste
- CTA bas : gradient collection + lien contact

### Page produit `/products/[slug]`
- Galerie : thumbnails cliquables (grande image principale)
- Color picker : 3 swatches (Black / White / Orange), stateful
- Size selector : XS→XXL, stateful
- `AddToCart.tsx` client component

### A Bitcoin Library `/learn/library`
- Header : hero orange gradient
- Fetch GitHub API PlanB Network (`revalidate: 86400`)
- 6 catégories : Books, Podcasts, Youtube, Movies, Newsletters, Glossary
- 2 lignes × 3 colonnes

### From Newbie to Maxi `/learn/courses`
- Header : hero orange gradient
- Source : `public/courses.json` (données locales PlanB)
- Featured "Start Here" : fond sombre `#111518` + bouton orange
- Groupé par topic : Bitcoin / Security / Business / Social Studies / Mining
- Ordre explicite par section, goal affiché sur chaque carte

### Find Your Tribe `/learn/tribes`
- Header : hero orange gradient
- Toggle tabs (hors hero) : Bitcoin Communities / Merchant Map
- Carte BTCMap : `max-w-6xl`, `65vh`, rechargée via `key={view}`
- 3 cartes info en bas

### About pages
- `about/page.tsx` : hero orange (déjà natif), grid de navigation interne
- `about/how-we-work/page.tsx` : hero orange (natif), piliers de la marque
- `about/faq/page.tsx` : hero orange gradient, accordion client

### Contact `/contact`
- Header : hero orange gradient (sans label)
- Form : fond sombre `#0d0d0d`, validation + Resend
- Notification email via API route

### Cart `/cart`
- Header : hero orange gradient
- Placeholder informatif (commerce déjà actif par le passé)
- Lien vers formulaire contact pour être recontacté

---

## À faire / Backlog

| Priorité | Item |
|---|---|
| 🟡 | Responsive mobile — vérifier toutes les pages |
| 🟡 | Images produits trending — sélectionner les bonnes vignettes (300×300 → envisager 600px) |
| 🟡 | Icône BTC Standard (home badges) — SVG à réviser |
| 🟡 | FAQ — contenu réel (en attente utilisateur) |
| 🟠 | Parallax home hero — effet background fixe vs scroll text |
| 🟠 | SEO : metadata par page (title, description, og:image) |
| 🔵 | Footer — liens réels : X, Nostr, Instagram, GitHub, LinkedIn (URLs à renseigner) |
| 🔵 | Footer — vérifier que les logos GitHub/LinkedIn sont bien lisibles sur fond `#0d0d0d` |
| 🔵 | Designs `/designs` — sélectionner les bonnes vignettes produits (2.4) |
| 🔵 | Home "Bitcoin only. No moon dreams. We don't print fiat or hype. We wear convictions." — mémo sous-titre alternatif (non utilisé home, réservé pour autre usage) |
| 🔵 | Products "Premium organic cotton. Bitcoin principles. Every piece means something." — mémo sous-titre alternatif réservé |
| 🔵 | Commerce : BTCPay Server (quand reprise) |

---

## Images disponibles

- `public/images/designs/` — 129 designs 1024×1024
- `public/images/products/` — 141 produits 300×300
- `public/images/logo-white.png` — logo fond sombre
- `public/images/logo-black.png` — logo fond clair
- `public/images/hero-bg.jpg` — photo hero home
- `public/courses.json` — données cours PlanB (local, hors GitHub API)

---

## Stack technique

| Technologie | Version | Notes |
|---|---|---|
| Next.js | 16.2.1 | App Router, SSG + ISR |
| TypeScript | strict | |
| Tailwind CSS | v4 | `@theme` tokens |
| Resend | latest | Email transactionnel contact form |
| PlanB Network | GitHub API | `revalidate: 86400` |
| Google Fonts | — | Playfair Display, Inter Tight, Anton, Caudex, Orbitron |

---

## Backups

| Date | Répertoire |
|---|---|
| 2026-03-23 16:42 | `orangepeel-site-backup-20260323-164223/` |
| 2026-03-23 22:04 | `orangepeel-site-backup-20260323-220426/` |
