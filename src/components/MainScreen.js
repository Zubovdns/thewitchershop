import React, { useEffect, useState } from 'react';
import './css/MainScreen.css';
import basketImg from './img/basket_img.png';
import posterBottom1 from './img/poster_bottom_1_img.jpeg';
import posterBottom2 from './img/poster_bottom_2_img.jpeg';
import posterTop from './img/poster_top_img.jpeg';
import witcherEmblemImg from './img/witcher_emblem_img.png';

function MainScreen() {
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
		<div className='MainScreen'>
			<div className={`MainScreen-header ${isSticky ? 'sticky' : ''}`}>
				{imageUrl && <img className='MainScreen-header-image' src={imageUrl} />}
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
					<img className='MainScreen-header-icon' src={basketImg} />
				</a>
			</div>
			<div className='MainScreen-body'>
				<img className='MainScreen-body-image' src={witcherEmblemImg} />
				<div className='MainScreen-body-quotation'>
					<p className='MainScreen-body-quotation-text-1'>
						Если приходится выбирать между одним злом и другим, я предпочитаю не
						выбирать вообще
					</p>
					<p className='MainScreen-body-quotation-text-2'>-Геральт из Ривии</p>
				</div>
			</div>
			<div className='MainScreen-main-page'>
				<div className='MainScreen-poster'>
					<div className='MainScreen-poster-top'>
						<img className='MainScreen-poster-top-image' src={posterTop} />
					</div>
					<div className='MainScreen-poster-bottom'>
						<div className='MainScreen-poster-bottom-1'>
							<img
								className='MainScreen-poster-bottom-1-image'
								src={posterBottom1}
							/>
						</div>
						<div className='MainScreen-poster-bottom-2'>
							<img
								className='MainScreen-poster-bottom-2-image'
								src={posterBottom2}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MainScreen;
