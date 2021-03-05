import Head from 'next/head' // it's something similar to <head> in HTML, you can use custom meta tags and title and so on
import styles from '../styles/Layout.module.css'
import ArticleList from '../components/ArticleList';

export default function Home({articles}) {

  	return (
    <div>
      <Head>
        <title>Crypto News</title>
        <meta name="keywords" content="crypto news, bitcoin, ethereum and altcoins!" />
      </Head>

      <h1>Welcome to NEXT </h1>
      <ArticleList articles={articles} />
    </div>
  )
}

// getStaticProps, how to fetch data 
export const getStaticProps = async () => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
	const articles = await res.json();

	return {
		props: {
			articles
		}
	}
}