import { readdirSync, copyFileSync } from "fs";
import { join } from "path";

const SRC = "C:/Users/mproquin/Documents/0. Autre/VSC OrangePeel_Sappes/Assets/Medias/2025/05";
const DEST_DESIGNS  = "public/images/designs";
const DEST_PRODUCTS = "public/images/products";

const files = readdirSync(SRC);

let designs = 0, products = 0;

for (const file of files) {
  if (file.endsWith("-1024x1024.png")) {
    copyFileSync(join(SRC, file), join(DEST_DESIGNS, file));
    console.log(`[design]  ${file}`);
    designs++;
  } else if (file.endsWith("-300x300.png")) {
    copyFileSync(join(SRC, file), join(DEST_PRODUCTS, file));
    console.log(`[product] ${file}`);
    products++;
  }
}

console.log(`\n✓ ${designs} design(s) copiés → ${DEST_DESIGNS}`);
console.log(`✓ ${products} produit(s) copiés → ${DEST_PRODUCTS}`);
