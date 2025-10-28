/**
 * Get the correct image path for a Mac product
 * Tries to use real images (.jpg, .png) first, falls back to SVG placeholders
 */

export function getImagePath(macModel: string): string {
  const imageName = macModel.toLowerCase().replace(/\s+/g, '-');

  // In production, we'll try JPG first, then PNG, then fall back to SVG
  // For now, this returns the SVG path - when you add real images (jpg/png),
  // update the data/macs.ts file to use the correct extension

  return `/images/macs/${imageName}.svg`;
}

/**
 * Helper to get the base image name from a Mac model string
 * Examples:
 *   "MacBook Air" -> "macbook-air"
 *   "MacBook Pro" -> "macbook-pro"
 *   "iMac" -> "imac"
 */
export function getImageBaseName(macModel: string): string {
  return macModel.toLowerCase().replace(/\s+/g, '-');
}
