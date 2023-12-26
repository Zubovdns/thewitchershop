import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../index';
import {
	ABOUT_ROUTE,
	BASKET_ROUTE,
	CATALOG_ROUTE,
	LOGIN_ROUTE,
	MAIN_ROUTE,
} from '../../utils/consts';
import './css/NavMenu.css';
import basketImg from './img/basket_img.png';
import witcherEmblemImg from './img/witcher_emblem_img.png';

const NavMenu = observer(() => {
	const { user } = useContext(Context);

	return (
		<div className='NavMenu sticky'>
			<img className='NavMenu-image' src={witcherEmblemImg} />
			<Link
				className='NavMenu-text'
				to={MAIN_ROUTE}
				onClick={() => {
					window.scroll({ top: 0, left: 0, behavior: 'smooth' });
				}}
			>
				Главная
			</Link>
			<Link
				className='NavMenu-text'
				to={CATALOG_ROUTE}
				onClick={() => {
					window.scroll({ top: 0, left: 0, behavior: 'smooth' });
				}}
			>
				Каталог
			</Link>
			<Link
				className='NavMenu-text'
				to={ABOUT_ROUTE}
				onClick={() => {
					window.scroll({ top: 0, left: 0, behavior: 'smooth' });
				}}
			>
				О нас
			</Link>
			<input type='text' className='NavMenu-input' />

			{user.isAuth ? (
				<Link
					to={BASKET_ROUTE}
					onClick={() => {
						window.scroll({ top: 0, left: 0, behavior: 'smooth' });
					}}
				>
					<img className='NavMenu-icon' src={basketImg} />
				</Link>
			) : (
				<Link
					to={LOGIN_ROUTE}
					onClick={() => {
						window.scroll({ top: 0, left: 0, behavior: 'smooth' });
					}}
				>
					<img className='NavMenu-icon' src={basketImg} />
				</Link>
			)}
		</div>
	);
});

export default NavMenu;
