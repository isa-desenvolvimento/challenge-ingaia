import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/global'
import Layout from 'components/Layout'
import { useTranslationContext } from 'locales/translationContext'
import { ModalProvider } from 'styled-react-modal'
import { Router } from 'next/router'
import Nprogress from 'nprogress'

function App({ Component, pageProps }: AppProps) {
  const translation = useTranslationContext()

  Router.events.on('routerChangeStart', (url: string) => Nprogress.start())
  Router.events.on('routerChangeComplete', () => Nprogress.done())
  Router.events.on('routerChangeError', () => Nprogress.start())

  return (
    <>
      <Head>
        <title>Challenge inGaia</title>
        <link
          rel="shortcut icon"
          href="https://www.ingaia.com.br/favicon.png"
        />
        <meta name="description" content={translation.DESCRIPTION_METADATA} />
      </Head>
      <GlobalStyles />
      <Layout>
        <ModalProvider>
          <Component {...pageProps} />
        </ModalProvider>
      </Layout>
    </>
  )
}

export default App
