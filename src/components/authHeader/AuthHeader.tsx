import logo from './img/temp-logo.jpg';

import styles from './AuthHeader.module.css';

const AuthHeader = () => {
	return (
		<div className={styles['auth-header']}>
			<img
				className={styles['auth-header__logo']}
				src={logo}
				alt="Лого"
			/>
			<h1>Добро пожаловать!</h1>
		</div>
	);
};

export default AuthHeader;
