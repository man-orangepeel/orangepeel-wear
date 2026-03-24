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
/about/faq                     ← Find Your Answer       ✅ done (contenu réel, 5 sections)
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
- Fixed, `h-[70px]`, fond blanc `bg-white border-b border-black/8`
- Logo gauche, cart icône droite, menus centrés — bottom-alignment via `items-stretch` + `flex-col justify-end pb-[14px]`
- Active route : `usePathname()`, indicateur orange sur le groupe actif
- Masquée au scroll down, réapparaît au scroll up (useState + scroll listener)
- Dropdowns : `group-hover` CSS, `top-full` = bas exact de la navbar
- `logo-black.png` (fond clair), `logo-white.png` (footer fond sombre)

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
radial-gradient(ellipse at 50% 0%, #ffbe2e 0%, #ed760a 50%, #c05800 100%)
```
- Texte h1, label, description : **blanc** (`text-white`, `text-white/85`, `text-white/60`)
- Positionnement : `-mt-[70px]` + `paddingTop: calc(70px + 2rem)` → collé sous la navbar
- Exception Warriors/Wizards/Cyphers : gradient identité propre (pas le gradient solaire)

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
- Icônes sociales (dans l'ordre actuel) : Telegram, X/Twitter, Nostr, Instagram, GitHub, LinkedIn
  - Telegram → `https://t.me/OrangePeel_Flow` ✅
  - LinkedIn → `https://www.linkedin.com/in/manuelproquin/` ✅
  - X, Nostr, Instagram, GitHub → `href="#"` (liens à renseigner)
  - **À faire** : revoir l'ordre des RS + renseigner les liens manquants
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
- Header : hero solaire gradient + texte blanc
- Bandeau OrangePeel Flow (`bg-[#111518]`) avant la grille
- Fetch GitHub API PlanB Network (`revalidate: 86400`)
- 6 catégories : Books, Podcasts, Youtube, Movies, Newsletters, Glossary
- 2 lignes × 3 colonnes

### From Newbie to Maxi `/learn/courses`
- Header : hero solaire gradient + texte blanc
- Bandeau OrangePeel Flow (`bg-[#111518]`) avant les sections
- Source : `public/courses.json` (données locales PlanB)
- Featured "Start Here" : fond sombre `#111518` + bouton orange (BTC101)
- Groupé par topic : Bitcoin / Security / Business / Social Studies / Mining
- Section "Social Studies" → label "The Bigr Picture" (intentionnel)

### Find Your Tribe `/learn/tribes`
- Header : hero solaire gradient + texte blanc
- Toggle tabs : Bitcoin Communities / Merchant Map
- Carte BTCMap (lien sur "BTCMap") : `w-full`, `65vh`, rechargée via `key={view}`
- Bandeau **MeetUp Bitcoin Nantes** : admin = fondateur de la marque, liens Telegram + X
- 3 cartes info en bas

### About pages
- `about/page.tsx` : hero solaire, grid 2×4 (A Bitcoiner / A Brand / A Name / **In the Wild**), section "In the Wild" = OrangePeel Flow + MeetUp Nantes
- `about/how-we-work/page.tsx` : hero solaire, piliers de la marque
- `about/faq/page.tsx` : hero solaire, accordion client — **contenu réel** (5 sections : Product Info / Payment & Privacy / Shipping / Returns / Misc)

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

### Priorité haute 🟡
| Item | Notes |
|---|---|
| Responsive mobile | Vérifier toutes les pages |
| Nettoyer les références à "Bitcoin Economic Forum" | Présent dans le contenu — à identifier + supprimer |
| Pages collection `/collections/*` — refonte UI | Corps de page idem `/products` mais pré-filtré + filtres type/genre + pagination |
| Page Warriors — corrections contenu | Rétablir l'espace dans "The Warriors Collection isn't clothing." · Supprimer section Proof of Work |
| Images produits trending | Sélectionner les bonnes vignettes (300×300 → envisager 600px) |

### Priorité moyenne 🟠
| Item | Notes |
|---|---|
| Page Legal / CGU / Mentions légales | À créer |
| Footer — revoir l'ordre des RS | Ordre actuel : Telegram, X, Nostr, Insta, GitHub, LinkedIn — à redéfinir |
| Footer — renseigner liens manquants | X, Nostr, Instagram, GitHub (URLs à récupérer) |
| Footer — vérifier lisibilité des icônes sur `#0d0d0d` | GitHub, LinkedIn notamment |
| SEO : metadata par page | title, description, og:image |
| Parallax home hero | Améliorer effet background fixe vs scroll text |

### Priorité basse 🔵
| Item | Notes |
|---|---|
| Designs `/designs` | Sélectionner les bonnes vignettes produit |
| Logo SAT | Récupérer/créer le symbole sat pour SatPrice |
| Vérifier conversion BTC/$ (USD) | SatPrice utilise EUR uniquement — USD à valider |
| Logos navbar sur fond clair/foncé | Vérifier que `logo-black.png` est correct sur fond blanc |
| Outil admin | Gérer designs, produits × variations |
| Commerce — BTCPay Server | Quand reprise du commerce |
| Révision "The Way We Peel" avec Mill3 | Partenariat design |

### Fait depuis dernière mise à jour ✅
| Item | Commit |
|---|---|
| Icône Bitcoin home badges | stroke, cohérent avec les autres badges | `5467f2b` |
| OrangePeel Flow — fréquence corrigée | "daily signal" — meme + take + weekly recap | `5467f2b` |
| Contact Us — hero structuré + fond blanc | label + 80px title + inputs clairs + 1ère personne | `5467f2b` |
| Contact Us — 1ère personne | "I'll get back to you", "I'm all ears" | `5467f2b` |

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
