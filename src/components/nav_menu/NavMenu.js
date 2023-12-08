import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './css/NavMenu.css';
import basketImg from './img/basket_img.png';
import witcherEmblemImg from './img/witcher_emblem_img.png';

const NavMenu = () => {
	const [isSticky, setIsSticky] = useState(false);
	const [imageUrl, setImageUrl] = useState(null);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 600) {
				setIsSticky(true);
				setImageUrl(witcherEmblemImg);
			} else {
				setIsSticky(false);
				setImageUrl(null);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={`NavMenu ${isSticky ? 'sticky' : ''}`}>
			{imageUrl && <img className='NavMenu-image' src={imageUrl} />}
			<Link className='NavMenu-text' to='/'>
				Главная
			</Link>
			<Link className='NavMenu-text' to='/category'>
				Категории
			</Link>
			<Link className='NavMenu-text' to='/about'>
				О нас
			</Link>
			<input type='text' className='NavMenu-input' />
			<Link to='/basket'>
				<img className='NavMenu-icon' src={basketImg} />
			</Link>
		</div>
	);
};

export default NavMenu;
