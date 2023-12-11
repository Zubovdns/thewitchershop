import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../carousel/Carousel';
import './css/MainScreen.css';
import placeholder from './img/Placeholder_img.png';
import offerImg from './img/offer_img.jpeg';
import posterTop from './img/poster_top_img.jpeg';
import witcherEmblemImg from './img/witcher_emblem_img.png';

function MainScreen() {
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
						<div className="Catalog-Main-Poster-1">
        					<p className="Catalog-Main-Poster-Top">Black Friday</p>
        					<hr className="Catalog-Main-Poster-Line"></hr>
        					<p className="Catalog-Main-Poster-Bottom">90% OFF</p>
     					 </div>
					</div>
				</div>
				<div className='MainScreen-card-set'>
					<p className='MainScreen-card-set-label'>Рекомендуем</p>
					<Carousel>
						{/* <CardSetItem
							imageSrc={placeholder}
							labelText="Кружка 'Белый Волк'"
							priceText='$14.999'
						/> */}
						<div className='MainScreen-card-set-item'>
							<div className='MainScreen-card-set-item-content'>
								<img
									className='MainScreen-card-set-item-content-image'
									src={placeholder}
								/>
								<div className='MainScreen-card-set-item-content-label-content'>
									<p className='MainScreen-card-set-item-content-label'>
										Кружка “Белый Волк”
									</p>
									<p className='MainScreen-card-set-item-content-price'>
										$14.99
									</p>
								</div>
							</div>
						</div>
						<div className='MainScreen-card-set-item'>
							<div className='MainScreen-card-set-item-content'>
								<img
									className='MainScreen-card-set-item-content-image'
									src={placeholder}
								/>
								<div className='MainScreen-card-set-item-content-label-content'>
									<p className='MainScreen-card-set-item-content-label'>
										Кружка “Белый Волк”
									</p>
									<p className='MainScreen-card-set-item-content-price'>
										$14.99
									</p>
								</div>
							</div>
						</div>
						<div className='MainScreen-card-set-item'>
							<div className='MainScreen-card-set-item-content'>
								<img
									className='MainScreen-card-set-item-content-image'
									src={placeholder}
								/>
								<div className='MainScreen-card-set-item-content-label-content'>
									<p className='MainScreen-card-set-item-content-label'>
										Кружка “Белый Волк”
									</p>
									<p className='MainScreen-card-set-item-content-price'>
										$14.99
									</p>
								</div>
							</div>
						</div>
						<div className='MainScreen-card-set-item'>
							<div className='MainScreen-card-set-item-content'>
								<img
									className='MainScreen-card-set-item-content-image'
									src={placeholder}
								/>
								<div className='MainScreen-card-set-item-content-label-content'>
									<p className='MainScreen-card-set-item-content-label'>
										Кружка “Белый Волк”
									</p>
									<p className='MainScreen-card-set-item-content-price'>
										$14.99
									</p>
								</div>
							</div>
						</div>
						<div className='MainScreen-card-set-item'>
							<div className='MainScreen-card-set-item-content'>
								<img
									className='MainScreen-card-set-item-content-image'
									src={placeholder}
								/>
								<div className='MainScreen-card-set-item-content-label-content'>
									<p className='MainScreen-card-set-item-content-label'>
										Кружка “Белый Волк”
									</p>
									<p className='MainScreen-card-set-item-content-price'>
										$14.99
									</p>
								</div>
							</div>
						</div>
						<div className='MainScreen-card-set-item'>
							<div className='MainScreen-card-set-item-content'>
								<img
									className='MainScreen-card-set-item-content-image'
									src={placeholder}
								/>
								<div className='MainScreen-card-set-item-content-label-content'>
									<p className='MainScreen-card-set-item-content-label'>
										Кружка “Белый Волк”
									</p>
									<p className='MainScreen-card-set-item-content-price'>
										$14.99
									</p>
								</div>
							</div>
						</div>
					</Carousel>
				</div>
				<div className='MainScreen-offer'>
					<div className='MainScreen-offer-1'>
						<div className='MainScreen-offer-1-content'>
							<p className='MainScreen-offer-1-content-text-1'>
								НАЧНИ СВОЙ ВЕДЬМАЧИЙ ПУТЬ
							</p>
							<Link className='Link-to-catalog' to='/catalog' onClick={() =>{
				window.scroll({top:0, left:0, behavior:'smooth'});
			}
			}>
							<p className='MainScreen-offer-1-content-text-2'>
								Посмотреть товары	{'→'}
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
}

export default MainScreen;
