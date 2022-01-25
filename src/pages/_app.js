import { ApolloProvider } from '@apollo/client'
import client from '../apollo/index'
import '../styles/index.css'
import '../i18n'
const MyApp = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
