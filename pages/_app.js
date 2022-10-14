import '../styles/globals.css'
import 'antd/dist/antd.css'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return (
  <>
  <Component {...pageProps} />
  <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
  </>
  )
}

export default MyApp
