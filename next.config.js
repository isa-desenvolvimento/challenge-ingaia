/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')
module.exports = withPlugins([
  [
    optimizedImages,
    {
      mozjpeg: {
        quality: 80
      },
      pngquant: {
        speed: 3,
        strip: true,
        verbose: true
      },
      imagesPublicPath: '/challenge-ingaia/_next/static/images/'
    }
  ],
  {
    i18n: {
      locales: ['pt-BR', 'en-US'],
      defaultLocale: 'pt-BR'
    },
    basePath: '/challenge-ingaia',
    assetPrefix: '/challenge-ingaia/'
  }
])
