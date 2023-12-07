import React from 'react';
import Carousel from '../carousel/Carousel';
import './css/MainScreen.css';
import placeholder from './img/Placeholder_img.png';
import posterBottom1 from './img/poster_bottom_1_img.jpeg';
import posterBottom2 from './img/poster_bottom_2_img.jpeg';
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
					<div className='MainScreen-offer-1'></div>
					<div className='MainScreen-offer-2'>
						<image className='MainScreen-offer-2-image' src={placeholder} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default MainScreen;
