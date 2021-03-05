import Link from 'next/link';
import {useRouter} from 'next/router';

const Article = ({article}) => {
	//const router = useRouter()
	//const { id } = router.query

	return (
		<span>
			<h1>{article.title}</h1>
			<p>{article.body}</p>
			<br />
			<Link href="/">Go back</Link>
		</span>
	)
}

// call when request is made
/*export const getServerSideProps = async (serverResponse) => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${serverResponse.params.id}`)
	const article = await res.json();

	return {
		props: { 
			article
		}
	}
}*/

// beter way for static websites
export const getStaticProps = async (serverResponse) => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${serverResponse.params.id}`)
	const article = await res.json();

	return {
		props: { 
			article
		}
	}
}

export const getStaticPaths = async () => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
	const articles = await res.json();

	const ids = articles.map((article) => article.id);

	const paths = ids.map((id) => ({ params: {
		id: id.toString() } }));

	return {
		paths,
		fallback: false
	}
}

export default Article