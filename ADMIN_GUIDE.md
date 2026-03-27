# Guide Admin — Gérer les produits et designs

> Tout se passe dans deux fichiers JSON. Pas de CMS, pas d'interface web.
> Tu modifies le fichier dans VS Code → tu commit → Vercel redéploie automatiquement.

---

## Fichiers à modifier

| Fichier | Rôle |
|---|---|
| `data/products.json` | Tous les produits (T-shirts, hoodies…) |
| `data/designs.json` | La galerie designs + le carousel |

---

## Ajouter un produit

Ouvre `data/products.json`. Chaque produit est un bloc JSON entre `{` et `}`, séparé par une virgule.

**Structure d'un produit :**

```json
{
  "slug": "nom-url-du-produit",
  "name": "Nom affiché",
  "collection": "warriors",
  "type": "tshirt",
  "genre": "unisex",
  "price": 25,
  "src": "photo-produit-couleur-defaut-300x300.png",
  "designSrc": "design-1024x1024.png",
  "description": "Texte court (1-2 phrases) — affiché sous le titre.",
  "longDescription": "Texte long — affiché en bas de la fiche produit.",
  "published": true,
  "colors": [
    { "name": "Black", "hex": "#000000", "src": "photo-black-300x300.png" },
    { "name": "White", "hex": "#ffffff", "src": "photo-white-300x300.png" }
  ]
}
```

**Valeurs possibles :**
- `collection` : `"warriors"` | `"wizards"` | `"cyphers"`
- `type` : `"tshirt"` | `"hoodie"`
- `genre` : `"men"` | `"women"` | `"unisex"`
- `published` : `true` = visible / `false` = caché partout

**Le slug** : c'est l'URL du produit. Ex : `"meme-chad-warrior-tshirt"` → `orangepeel.fr/products/meme-chad-warrior-tshirt`
- Utilise uniquement des lettres minuscules, des chiffres et des tirets `-`
- Pas d'espace, pas d'accent, pas de majuscule

---

## Masquer / republier un produit

Change `"published": true` en `"published": false`.

Le produit disparaît immédiatement de toutes les pages (home, listing, collections).

---

## Modifier le prix

Change la valeur de `"price"` (en euros). Le prix en sats est calculé automatiquement depuis le cours BTC en temps réel.

---

## Ajouter / modifier une couleur

Dans le tableau `"colors"`, ajoute un objet :

```json
{ "name": "Forest Green", "hex": "#2d4a2d", "src": "photo-green-300x300.png" }
```

- `hex` : le code couleur exact (visible dans le color picker)
- `src` : le nom du fichier image dans `public/images/products/`

---

## Ajouter des images produits

Copie les fichiers dans :
- `public/images/products/` → photos produit portés (format `300x300` ou carré)
- `public/images/designs/` → visuels du design seul (format `1024x1024`)

Pour copier en masse depuis ton dossier assets, utilise le script :

```bash
node scripts/copy-images.mjs
```

(Pense à mettre à jour le chemin source dans le script si nécessaire.)

---

## Ajouter un design à la galerie

Ouvre `data/designs.json`.

```json
{
  "carousel": ["fichier1.png", "fichier2.png", "fichier3.png"],
  "designs": [
    { "file": "mon-design-1024x1024.png", "collection": "warriors" },
    { "file": "autre-design-1024x1024.png", "collection": "wizards" }
  ]
}
```

- `carousel` : liste des fichiers affichés en rotation sur la page `/designs` (max 8 recommandé)
- `designs` : tous les designs de la galerie
- Pas de champ `published` — tout ce qui est dans ce fichier est visible

---

## Workflow complet pour publier une modification

1. **Modifie** le fichier JSON dans VS Code
2. **Vérifie** que le JSON est valide (VS Code souligne les erreurs en rouge)
3. **Lance un build local** pour confirmer :
   ```bash
   npm run build
   ```
4. **Commit + push** :
   ```bash
   git add data/products.json
   git commit -m "produits: ajout hoodie Meme Chad Warrior"
   git push
   ```
5. **Vercel redéploie automatiquement** en 1-2 minutes

---

## Erreurs fréquentes

| Problème | Cause probable |
|---|---|
| Le produit n'apparaît pas | `"published": false` ou fichier image introuvable |
| Erreur de build | JSON invalide (virgule manquante, guillemet non fermé) |
| Image cassée | Nom de fichier incorrect dans `src` ou `designSrc` |
| Slug en 404 | Slug contient des espaces ou majuscules |

**Conseil** : utilise un validateur JSON en ligne (jsonlint.com) si tu as un doute sur la syntaxe.
