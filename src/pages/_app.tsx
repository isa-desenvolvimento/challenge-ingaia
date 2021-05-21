import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/global'
import Layout from 'components/Layout'
import { useTranslationContext } from 'locales/translationContext'
import { ModalProvider } from 'styled-react-modal'
import Router from 'next/router'
import NProgress from 'nprogress'
import Loading from 'components/Loading'
import NotFoundItem from 'components/NotFoundItem'

Router.events.on('routeChangeStart', () => {
  NProgress.start()
  return <Loading />
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => {
  NProgress.start()
  return <NotFoundItem />
})

function App({ Component, pageProps }: AppProps) {
  const translation = useTranslationContext()

  return (
    <>
      <Head>
        <title>Challenge inGaia</title>
        <link
          rel="shortcut icon"
          href="https://www.ingaia.com.br/favicon.png"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito&display=swap"
          rel="stylesheet"
        ></link>
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
