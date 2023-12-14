import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { Context } from './index';
import Footer from './pages/footer/Footer';
import NavMenu from './pages/nav_menu/NavMenu';
import { authRoutes, publicRoutes } from './routes';

const App = () => {
	const { user } = useContext(Context);

	console.log(user);
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
};
export default App;
