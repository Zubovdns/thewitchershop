import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './css/NavMenu.css';
import basketImg from './img/basket_img.png';
import witcherEmblemImg from './img/witcher_emblem_img.png';

const NavMenu = () => {

	return (
		<div className='NavMenu sticky'>
			<img className='NavMenu-image' src={witcherEmblemImg} />
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
