import '../styles/globals.css'
import 'antd/dist/antd.css'
import Head from 'next/head'
import { Nav } from '../components/Nav'
function MyApp({ Component, pageProps }) {
  return (
  <>
  <Nav/>
  <Component {...pageProps} />
  <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
  </>
  )
}

export default MyApp
