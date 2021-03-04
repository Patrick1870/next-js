import Head from 'next/head' // it's something similar to <head> in HTML, you can use custom meta tags and title and so on
import styles from '../styles/Layout.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Crypto News</title>
        <meta name="keywords" content="crypto news, bitcoin, ethereum and altcoins!" />
      </Head>

      <h1>Welcome to NEXT </h1>
    </div>
  )
}
