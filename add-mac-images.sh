#!/bin/bash

# Mac Image Helper Script
# This script helps you quickly add real Mac product images to your project

echo "🖼️  Mac Finder - Image Setup Helper"
echo "===================================="
echo ""

IMAGE_DIR="public/images/macs"

# Check if image directory exists
if [ ! -d "$IMAGE_DIR" ]; then
    echo "❌ Error: $IMAGE_DIR directory not found!"
    exit 1
fi

echo "📁 Images should be placed in: $IMAGE_DIR"
echo ""
echo "Required images:"
echo "  1. macbook-air.jpg (or .png)"
echo "  2. macbook-pro.jpg (or .png)"
echo "  3. imac.jpg (or .png)"
echo "  4. mac-mini.jpg (or .png)"
echo "  5. mac-studio.jpg (or .png)"
echo "  6. mac-pro.jpg (or .png)"
echo ""

# Check current images
echo "📊 Current status:"
echo ""

FOUND_COUNT=0
MISSING=()

for mac in "macbook-air" "macbook-pro" "imac" "mac-mini" "mac-studio" "mac-pro"; do
    if [ -f "$IMAGE_DIR/${mac}.jpg" ] || [ -f "$IMAGE_DIR/${mac}.png" ]; then
        echo "  ✅ ${mac}"
        FOUND_COUNT=$((FOUND_COUNT + 1))
    elif [ -f "$IMAGE_DIR/${mac}.svg" ]; then
        echo "  🎨 ${mac} (SVG placeholder)"
        MISSING+=("${mac}")
    else
        echo "  ❌ ${mac} (missing)"
        MISSING+=("${mac}")
    fi
done

echo ""
echo "Real images found: $FOUND_COUNT/6"
echo ""

if [ $FOUND_COUNT -eq 6 ]; then
    echo "✅ All images are ready!"
    echo ""
    echo "Next steps:"
    echo "  1. Run: npm run build"
    echo "  2. Run: npm run dev"
    echo "  3. Visit http://localhost:3000 to see your app with real images"
    exit 0
fi

echo "📝 How to add images:"
echo ""
echo "Option 1: Download from Apple.com"
echo "  • Right-click and save images from official Apple product pages"
echo "  • MacBook Air: https://www.apple.com/macbook-air/"
echo "  • MacBook Pro: https://www.apple.com/macbook-pro/"
echo "  • iMac: https://www.apple.com/imac/"
echo "  • Mac mini: https://www.apple.com/mac-mini/"
echo "  • Mac Studio: https://www.apple.com/mac-studio/"
echo "  • Mac Pro: https://www.apple.com/mac-pro/"
echo ""
echo "Option 2: Use stock photos"
echo "  • Visit https://unsplash.com or https://www.pexels.com"
echo "  • Search for 'macbook air', 'macbook pro', etc."
echo "  • Download high-quality images (1200px+ width recommended)"
echo ""
echo "Option 3: Copy from your Downloads"
echo "  • If you have images in ~/Downloads/, use this script:"
echo "    ./add-mac-images.sh copy ~/Downloads/your-macbook-air-image.jpg macbook-air"
echo ""

# Helper function to copy and rename images
if [ "$1" = "copy" ] && [ -n "$2" ] && [ -n "$3" ]; then
    SOURCE_FILE="$2"
    MAC_NAME="$3"

    if [ ! -f "$SOURCE_FILE" ]; then
        echo "❌ Error: Source file '$SOURCE_FILE' not found!"
        exit 1
    fi

    # Get file extension
    EXT="${SOURCE_FILE##*.}"

    # Copy file
    cp "$SOURCE_FILE" "$IMAGE_DIR/${MAC_NAME}.${EXT}"

    if [ $? -eq 0 ]; then
        echo "✅ Successfully copied to $IMAGE_DIR/${MAC_NAME}.${EXT}"

        # Remove old SVG if exists
        if [ -f "$IMAGE_DIR/${MAC_NAME}.svg" ]; then
            rm "$IMAGE_DIR/${MAC_NAME}.svg"
            echo "🗑️  Removed old SVG placeholder"
        fi
    else
        echo "❌ Error copying file"
        exit 1
    fi
fi
