import { MetadataRoute } from 'next'
import { metadata } from './layout'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: String(metadata.title),
    short_name: String(metadata.title),
    description: String(metadata.description),
    display: 'standalone',
    background_color: 'rgb(115,181,223)',
    theme_color: 'rgb(18,33,72)',
    icons: [
      {
        src: '/images/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
