import Link from 'next/link';
import articleStyles from '../styles/Article.module.css';

const ArticleItem = ({article}) => {
	return (
		<Link href="/aricle/id" as={`/article/${article.id}`}>
			<a className={articleStyles.card}>
				<h3>{article.title} &arr;</h3>
				<p>{article.body}</p>
			</a>
		</Link>
	)
};

export default ArticleItem;