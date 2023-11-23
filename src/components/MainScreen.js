import React from 'react';
import './css/MainScreen.css';
import basketImg from './img/basket_img.png';
import witcherEmblemImg from './img/witcher_emblem_img.png';

function MainScreen() {
	return (
		<div className='MainScreen'>
			<div className='MainScreen-header'>
				<a className='MainScreen-header-text' href=''>
					Главная
				</a>
				<a className='MainScreen-header-text' href=''>
					Категории
				</a>
				<a className='MainScreen-header-text' href=''>
					О нас
				</a>
				<input type='text' className='MainScreen-header-input' />
				<a href=''>
					<img className='MainScreen-header-image' src={basketImg} />
				</a>
			</div>
			<div className='MainScreen-body'>
				<img className='MainScreen-body-image' src={witcherEmblemImg} />
				<div className='MainScreen-body-quotation'>
					<p className='MainScreen-body-quotation-text-1'>
						Если приходится выбирать между одним злом и другим, я предпочитаю не
						выбирать вообще
					</p>
					<p className='MainScreen-body-quotation-text-2'>-Геральд из Ривии</p>
				</div>
			</div>
			<div className='MainScreen-body'>
				<img className='MainScreen-body-image' src={witcherEmblemImg} />
				<div className='MainScreen-body-quotation'>
					<p className='MainScreen-body-quotation-text-1'>
						Если приходится выбирать между одним злом и другим, я предпочитаю не
						выбирать вообще
					</p>
					<p className='MainScreen-body-quotation-text-2'>-Геральд из Ривии</p>
				</div>
			</div>
			<div className='MainScreen-body'>
				<img className='MainScreen-body-image' src={witcherEmblemImg} />
				<div className='MainScreen-body-quotation'>
					<p className='MainScreen-body-quotation-text-1'>
						Если приходится выбирать между одним злом и другим, я предпочитаю не
						выбирать вообще
					</p>
					<p className='MainScreen-body-quotation-text-2'>-Геральд из Ривии</p>
				</div>
			</div>
		</div>
	);
}

export default MainScreen;
