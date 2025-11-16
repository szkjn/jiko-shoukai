// Utility to get optimized image paths
export function getOptimizedImageUrl(imageName: string, size: 'thumb' | 'full' = 'full'): string {
  // If it's already a full URL (from Sanity CDN), return as-is
  if (imageName.startsWith('http://') || imageName.startsWith('https://')) {
    return imageName;
  }
  
  const basePath = '/images/';
  
  if (size === 'thumb') {
    // For thumbnails: resize and convert to WebP
    return `${basePath}${imageName}?w=600&format=webp&quality=80`;
  }
  
  // Full size with optimization
  return `${basePath}${imageName}?format=webp&quality=85`;
}

// Fallback to original image if optimization fails
export function getImageUrl(imageName: string): string {
  return `/images/${imageName}`;
}

