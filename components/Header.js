import headerStyles from '../styles/Header.module.css';

const Header = () => {
	return (
		<div>
			<h1 className={headerStyles.title}>
				<span>Crypto</span> News
			</h1>
			<p className={headerStyles.description}>Bitcoin, Ethereum and Altcoins 24/7</p>
		</div>
	)
};

export default Header;