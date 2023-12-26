import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CardSetItem from '../../components/card_set_item/CardSetItem';
import { getTopOnCategory } from '../../http/productAPI';
import { Context } from '../../index';
import './css/MainScreen.css';
import offerImg from './img/offer_img.jpeg';
import posterTop from './img/poster_top_img.jpeg';
import witcherEmblemImg from './img/witcher_emblem_img.png';

const MainScreen = observer(() => {
	const { product } = useContext(Context);

	useEffect(() => {
		getTopOnCategory().then((data) => {
			product.setProducts(data);
			console.log(product);
		});
	}, []);

	return (
		<div className='MainScreen'>
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
						<div className='Catalog-Main-Poster-1'>
							<p className='Catalog-Main-Poster-Top'>Black Friday</p>
							<hr className='Catalog-Main-Poster-Line'></hr>
							<p className='Catalog-Main-Poster-Bottom'>90% OFF</p>
						</div>
					</div>
				</div>
				<div className='MainScreen-topOnCategory'>
					<p className='MainScreen-topOnCategory-label'>
						Топ товаров по категориям
					</p>
					<div className='MainScreen-topOnCategory-list'>
						{product.products.map((product) => (
							<CardSetItem key={product.id} product={product} />
						))}
					</div>
				</div>

				<div className='MainScreen-offer'>
					<div className='MainScreen-offer-1'>
						<div className='MainScreen-offer-1-content'>
							<p className='MainScreen-offer-1-content-text-1'>
								НАЧНИ СВОЙ ВЕДЬМАЧИЙ ПУТЬ
							</p>
							<Link
								className='Link-to-catalog'
								to='/catalog'
								onClick={() => {
									window.scroll({ top: 0, left: 0, behavior: 'smooth' });
								}}
							>
								<p className='MainScreen-offer-1-content-text-2'>
									Посмотреть товары {'→'}
								</p>
							</Link>
						</div>
					</div>
					<div className='MainScreen-offer-2'>
						<img className='MainScreen-offer-2-image' src={offerImg} />
					</div>
				</div>
			</div>
		</div>
	);
});

export default MainScreen;
