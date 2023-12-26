import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { check } from './http/userAPI';
import { Context } from './index';
import Footer from './pages/footer/Footer';
import NavMenu from './pages/nav_menu/NavMenu';
import { authRoutes, publicRoutes } from './routes';

const App = observer(() => {
	const { user } = useContext(Context);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		check()
			.then((data) => {
				user.setUser(true);
				user.setIsAuth(true);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	return (
		<>
			<NavMenu />
			<Routes>
				<Route>
					{user.isAuth &&
						authRoutes.map(({ path, Component }) => (
							<Route key={path} path={path} element={Component} exact />
						))}
					{publicRoutes.map(({ path, Component }) => (
						<Route key={path} path={path} element={Component} exact />
					))}
				</Route>
				<Route path='*' element={<Navigate to='/' replace />} />
			</Routes>
			<Footer />
		</>
	);
});

export default App;
