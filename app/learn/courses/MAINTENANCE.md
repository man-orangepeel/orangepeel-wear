# Maintenance — Page "From Newbie to Maxi"

## Comment la page est construite

La page `/learn/courses` est **statique** : elle lit un fichier `public/courses.json`
généré à partir du repo cloné [bitcoin-educational-content](https://github.com/PlanB-Network/bitcoin-educational-content).

### Flux de données

```
Repo PlanB (GitHub)
  └── courses/*/course.yml     → topic, level
  └── courses/*/en.md          → name (title), goal
        ↓
  extract_courses_yaml.py      (script Python, repo local)
        ↓
  courses.json                 → copié dans orangepeel-site/public/
        ↓
  app/learn/courses/page.tsx   → lecture statique, filtres, rendu
```

### Script Python

Fichier : `bitcoin-educational-content/extract_courses_yaml.py`

Extrait pour chaque cours : `item`, `title`, `goal`, `topic`, `level`.
Produit : `bitcoin-educational-content/courses.json`.

---

## Filtres appliqués dans page.tsx

| Filtre | Règle |
|--------|-------|
| Niveaux affichés | `beginner`, `intermediate`, `advanced` uniquement (exclu : `expert`, `wizard`) |
| Topics affichés | `bitcoin`, `security`, `business`, `social studies`, `mining` (exclu : `protocol`) |
| Social Studies | 6 items seulement : HIS205, ECO201, PHI203, PHI101, ECO204, ECO203 |
| Ordre des sections | Bitcoin → Security → Business → The Bigger Picture → Mining |
| Ordre interne Security | SCU101, SCU202, CYP201, CYP302 |
| Ordre interne Social | HIS205, ECO201, PHI203, PHI101, ECO204, ECO203, HIS201 |

---

## Actions de maintenance

### Mise à jour du contenu (nouveaux cours, changement de titre/goal)

1. Se placer dans le repo cloné :
   ```
   cd "Mes documents - PlanB/bitcoin-educational-content"
   git pull origin dev
   ```
2. Exécuter le script :
   ```
   python extract_courses_yaml.py
   ```
3. Copier le JSON dans le site :
   ```
   cp courses.json "../VSC OrangePeel_Sappes/orangepeel-site/public/courses.json"
   ```
4. Vérifier dans page.tsx que les filtres (`SOCIAL_ALLOWED`, `SECTION_ORDER`) sont toujours cohérents avec les nouveaux items.

### Si un nouveau cours apparaît dans une section filtrée

- **Social Studies** : décider si on l'ajoute à `SOCIAL_ALLOWED` et à `SECTION_ORDER["social studies"]`.
- **Protocol** : section exclue volontairement — ne pas ajouter sauf décision contraire.
- **Expert / Wizard** : niveaux exclus volontairement.

### Si un cours change de topic ou de level dans la source

Le script régénère automatiquement les valeurs — vérifier après `git pull` que les sections
affichées restent pertinentes.

### Liens

| Élément | URL |
|---------|-----|
| Featured (BTC101) | `https://planb.academy/en/courses/the-bitcoin-journey-2b7dc507-81e3-4b70-88e6-41ed44239966` |
| Toutes les autres cartes | `https://planb.academy/en/learn-anytime` |

Mettre à jour ces URLs dans `page.tsx` si PlanB Academy change sa structure.
