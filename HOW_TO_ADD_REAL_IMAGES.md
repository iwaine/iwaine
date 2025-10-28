# Comment ajouter de vraies photos de produits Mac

## Option 1: Télécharger depuis Apple.com (Recommandé)

1. **Visitez les pages produits Apple:**
   - https://www.apple.com/macbook-air/
   - https://www.apple.com/macbook-pro/
   - https://www.apple.com/imac/
   - https://www.apple.com/mac-mini/
   - https://www.apple.com/mac-studio/
   - https://www.apple.com/mac-pro/

2. **Faites clic droit sur les images > "Enregistrer l'image sous..."**

3. **Renommez et placez dans `/home/user/iwaine/public/images/macs/`:**
   - `macbook-air.jpg`
   - `macbook-pro.jpg`
   - `imac.jpg`
   - `mac-mini.jpg`
   - `mac-studio.jpg`
   - `mac-pro.jpg`

## Option 2: Utiliser des images libres de droits

### Unsplash (gratuit, haute qualité)
```bash
# Visitez https://unsplash.com et cherchez:
# "macbook air", "macbook pro", "imac", etc.
# Téléchargez les images et placez-les dans public/images/macs/
```

### Pexels (gratuit)
```bash
# Visitez https://www.pexels.com
# Même principe que Unsplash
```

## Option 3: Script automatique (si vous avez les images)

Si vous avez déjà les images sur votre Mac:

```bash
# Copiez vos images dans le dossier
cp ~/Downloads/votre-image-macbook-air.jpg ~/Desktop/iwaine/public/images/macs/macbook-air.jpg
cp ~/Downloads/votre-image-macbook-pro.jpg ~/Desktop/iwaine/public/images/macs/macbook-pro.jpg
# etc...
```

## Format recommandé
- **Format:** JPG ou PNG
- **Taille:** 1200x800 px minimum
- **Poids:** < 500 KB (optimisé pour le web)

## Après avoir ajouté les images

```bash
# Mettez à jour le code pour utiliser .jpg au lieu de .svg
# Je peux faire ça pour vous si vous le souhaitez!
```

---

**Voulez-vous que je:**
1. Garde les illustrations SVG actuelles (qui sont quand même jolies)
2. Vous aide à configurer pour utiliser vos propres photos
3. Crée un système hybride (SVG en attendant, facile à remplacer par des photos)

Dites-moi quelle option vous préférez! 😊
