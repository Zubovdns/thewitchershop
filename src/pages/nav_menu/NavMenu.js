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
			if (true) {
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
			<Link className='NavMenu-text' to='/' onClick={() =>{
				window.scroll({top:0, left:0, behavior:'smooth',});
			}
			}>
				Главная
			</Link>
			<Link className='NavMenu-text' to='/catalog' onClick={() =>{
				window.scroll({top:0, left:0, behavior:'smooth',});
			}
			}>
				Каталог
			</Link>
			<Link className='NavMenu-text' to='/about' onClick={() =>{
				window.scroll({top:0, left:0, behavior:'smooth',});
			}
			}>
				О нас
			</Link>
			<input type='text' className='NavMenu-input' />
			<Link to='/basket' onClick={() =>{
				window.scroll({top:0, left:0, behavior:'smooth'});
			}
			}>
				<img className='NavMenu-icon' src={basketImg} />
			</Link>
		</div>
	);
};

export default NavMenu;
