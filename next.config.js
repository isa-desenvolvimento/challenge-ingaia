import withPlugins from 'next-compose-plugins'
import optimizedImages from 'optimized-images'
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
