# How to Add Real Mac Product Images

This guide will help you replace the SVG placeholders with real, high-quality product images.

## Quick Start

Run the helper script to check your current status:

```bash
./add-mac-images.sh
```

## Option 1: Download from Apple.com (Recommended)

### Step 1: Visit Apple Product Pages

Open these pages in your browser:
- MacBook Air: https://www.apple.com/macbook-air/
- MacBook Pro: https://www.apple.com/macbook-pro/
- iMac: https://www.apple.com/imac/
- Mac mini: https://www.apple.com/mac-mini/
- Mac Studio: https://www.apple.com/mac-studio/
- Mac Pro: https://www.apple.com/mac-pro/

### Step 2: Save Images

1. Right-click on the product hero image
2. Select "Save Image As..." or "Download Image"
3. Save with these exact names:
   - `macbook-air.jpg`
   - `macbook-pro.jpg`
   - `imac.jpg`
   - `mac-mini.jpg`
   - `mac-studio.jpg`
   - `mac-pro.jpg`

### Step 3: Move to Project

Place all images in:
```
/home/user/iwaine/public/images/macs/
```

Or use the helper script:
```bash
./add-mac-images.sh copy ~/Downloads/macbook-air-image.jpg macbook-air
./add-mac-images.sh copy ~/Downloads/macbook-pro-image.jpg macbook-pro
# ... repeat for all models
```

## Option 2: Use Stock Photos (Free & Legal)

### Unsplash (High Quality, Free)

1. Visit https://unsplash.com
2. Search for: "macbook air", "macbook pro", "imac", etc.
3. Download high-resolution images
4. Rename to match required names (see above)
5. Place in `public/images/macs/`

### Pexels (Also Great)

Same process as Unsplash:
1. Visit https://www.pexels.com
2. Search and download
3. Rename and place in folder

## Option 3: Quick Copy Script

If you already have images in your Downloads folder:

```bash
# Example: Copy all images at once
./add-mac-images.sh copy ~/Downloads/mba-photo.jpg macbook-air
./add-mac-images.sh copy ~/Downloads/mbp-photo.jpg macbook-pro
./add-mac-images.sh copy ~/Downloads/imac-photo.jpg imac
./add-mac-images.sh copy ~/Downloads/mini-photo.jpg mac-mini
./add-mac-images.sh copy ~/Downloads/studio-photo.jpg mac-studio
./add-mac-images.sh copy ~/Downloads/pro-photo.jpg mac-pro
```

## Image Requirements

For best results, your images should be:
- **Format:** JPG or PNG (JPG preferred for smaller file size)
- **Minimum Size:** 1200px width
- **Recommended Size:** 1600x1200px or larger
- **File Size:** Under 500KB (optimized for web)
- **Aspect Ratio:** Roughly 4:3 or 16:10

## After Adding Images

### Step 1: Update data/macs.ts

The app currently references `.svg` files. You need to change them to `.jpg` (or `.png`):

```bash
# Find and replace in data/macs.ts
# Change: '/images/macs/macbook-air.svg'
# To: '/images/macs/macbook-air.jpg'
```

I can do this automatically for you if needed!

### Step 2: Rebuild and Test

```bash
npm run build
npm run dev
```

Visit http://localhost:3000 to see your app with real images!

## Troubleshooting

### Images Not Showing?

1. Check file names are exactly correct (lowercase, hyphens, no spaces)
2. Verify images are in `public/images/macs/` directory
3. Make sure `data/macs.ts` has the right file extensions
4. Clear browser cache and hard refresh (Cmd+Shift+R)

### Images Too Large?

Optimize them with:
```bash
# Install imagemagick if not already installed
# Then resize:
mogrify -resize 1600x1200 -quality 85 public/images/macs/*.jpg
```

## Need Help?

Run the status script anytime:
```bash
./add-mac-images.sh
```

It will show you which images are ready and which are missing!
