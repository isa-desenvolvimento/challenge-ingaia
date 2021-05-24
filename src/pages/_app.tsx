import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from '../styles/global'
import Layout from '../components/Layout'
import { useTranslationContext } from '../locales/translationContext'
import { ModalProvider } from 'styled-react-modal'

import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../lib/apollo'

function App({ Component, pageProps }: AppProps) {
  const translation = useTranslationContext()
  const apolloClient = useApollo(pageProps.initialApolloState)

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
        <ApolloProvider client={apolloClient}>
          <ModalProvider>
            <Component {...pageProps} />
          </ModalProvider>
        </ApolloProvider>
      </Layout>
    </>
  )
}

export default App
