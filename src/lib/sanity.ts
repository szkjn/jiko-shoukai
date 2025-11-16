import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const client = createClient({
  projectId: '16mn5to2',
  dataset: 'production',
  useCdn: true, // Use CDN for faster responses
  apiVersion: '2024-11-16', // Use current date for API version
});

// Helper to generate image URLs
const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

