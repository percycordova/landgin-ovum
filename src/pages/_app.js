import { ApolloProvider } from '@apollo/client'
import client from '../apollo/index'
import Router from 'next/router'
import * as gtag from '../lib/gtag'
import '../styles/index.css'
import 'swiper/css/bundle'
import { useEffect } from 'react'
const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    Router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
