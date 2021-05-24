/* eslint-disable @typescript-eslint/no-var-requires */
const withImages = require('next-images')

module.exports = withImages({
  i18n: {
    locales: ['pt-BR', 'en-US'],
    defaultLocale: 'pt-BR'
  },
  // basePath: '/challenge-ingaia',
  // assetPrefix: '/challenge-ingaia/',
  esModule: true,
  images: {
    deviceSize: [320, 640, 768, 1024],
    domains: ['rickandmortyapi.com']
  }
})
