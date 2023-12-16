import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { login, registration } from '../../http/userAPI';
import { Context } from '../../index';
import {
	LOGIN_ROUTE,
	MAIN_ROUTE,
	REGISTRATION_ROUTE,
} from '../../utils/consts';
import './css/Auth.css';

const Auth = observer(() => {
	const location = useLocation();
	const isLogin = location.pathname === LOGIN_ROUTE;

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const { user } = useContext(Context);

	const navigate = useNavigate();

	const click = async () => {
		try {
			let data;
			if (isLogin) {
				data = await login(email, password);
			} else {
				data = await registration(email, password);
			}
			user.setUser(user);
			user.setIsAuth(true);
			console.log(user.isAuth);
			navigate(MAIN_ROUTE);
		} catch (e) {
			alert(e.response.data.message);
		}
	};
	return (
		<div className='Auth'>
			<div className='Auth-form'>
				<p className='Auth-form-label'>
					{isLogin ? 'Авторизация' : 'Регистрация'}
				</p>
				<input
					type='text'
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
					className='Auth-form-input'
				/>
				<input
					type='text'
					value={password}
					onChange={(e) => {
						setPassword(e.target.value);
					}}
					className='Auth-form-input'
				/>
				<button className='Auth-form-login' onClick={click}>
					{isLogin ? 'Войти' : 'Зарегистрироваться'}
				</button>
				<div className='Auth-form-registration'>
					{isLogin ? (
						<>
							Нет аккаунта?{' '}
							<Link
								to={REGISTRATION_ROUTE}
								onClick={() => {
									window.scroll({ top: 0, left: 0, behavior: 'smooth' });
								}}
							>
								Зарегистрируйся!
							</Link>
						</>
					) : (
						<>
							Есть аккаунт?{' '}
							<Link
								to={LOGIN_ROUTE}
								onClick={() => {
									window.scroll({ top: 0, left: 0, behavior: 'smooth' });
								}}
							>
								Войти!
							</Link>
						</>
					)}
				</div>
			</div>
		</div>
	);
});

export default Auth;
