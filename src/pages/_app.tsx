import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/global'
import Layout from 'components/Layout'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Challenge inGaia</title>
        <link
          rel="shortcut icon"
          href="https://www.ingaia.com.br/favicon.png"
        />
        <meta name="description" content="Desafio para vaga de frontend" />
      </Head>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default App
