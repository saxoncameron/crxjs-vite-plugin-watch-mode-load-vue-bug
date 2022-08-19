import { defineManifest } from '@crxjs/vite-plugin'

export default defineManifest(async () => ({
  name: 'Example extension',
  manifest_version: 3,
  version: '1.0.0.0',
  content_scripts: [
    {
      matches: ['<all_urls>'],
      js: ['src/content-script.ts'],
    },
  ],
}))
