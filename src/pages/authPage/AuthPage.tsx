import AuthHeader from '../../components/authHeader/AuthHeader';
import AuthInputs from '../../components/authInputs/AuthInputs';

import styles from './AuthPage.module.css';

const AuthPage = () => {
	return (
		<div className={styles.auth}>
			<AuthHeader />
			<AuthInputs />
		</div>
	);
};

export default AuthPage;
