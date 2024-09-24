import React, { FC, useCallback, useState } from 'react';
import styles from './AuthInputs.module.css';

const AuthInputs: FC = () => {
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');

	const havyFoo = useCallback(() => {
		const firstArray = Array(10000).fill(10);
		const secArray = Array(10000).fill(200);
		let count = 0;

		firstArray.forEach((firstEl) => {
			secArray.forEach((secEl) => {
				count = count + firstEl * secEl;
			});
		});

		console.log(count);
	}, []);

	return (
		<div className={styles['auth-inputs']}>
			<input
				type="text"
				className="auth-inputs__login"
				value={login}
				onChange={(e) => setLogin(e.target.value)}
				placeholder="Логин Gitlab"
			/>
			<input
				type="text"
				className="auth-inputs__password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				placeholder="Пароль Gitlab"
			/>
			<AuthManage />
			<AuthBtn havyFoo={havyFoo} />
		</div>
	);
};

const AuthManage: FC = React.memo(() => {
	console.log(123);
	return (
		<div className="auth-manage">
			<div className="check-wrapper">
				<input
					type="checkbox"
					className="auth-manage__check"
					id="remember"
				/>
				<label htmlFor="remember">Запомнить меня</label>
			</div>
			<a href="#!" className="auth-manage__rec-pass">
				Восстановить пароль
			</a>
		</div>
	);
});

type authBtnProps = {
	havyFoo: () => void;
};

const AuthBtn: FC<authBtnProps> = React.memo(({ havyFoo }) => {
	console.log(333);
	return (
		<button className="auth-inputs__btn" onClick={havyFoo}>
			Авторизация
		</button>
	);
});

export default AuthInputs;
