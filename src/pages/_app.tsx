import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/global'
import Layout from 'components/Layout'
import { useTranslationContext } from 'locales/translationContext'

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
        <meta name="description" content={translation.DESCRIPTION_METADATA} />
      </Head>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default App
