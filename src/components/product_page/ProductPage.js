import React from 'react';
import CardSetItem from '../card_set_item/CardSetItem';
import './css/ProductPage.css';
import placeholder from './img/Placeholder_img.png';
import instagramIcon from './img/instagram_img.png';
import telegramIcon from './img/telegram_img.png';
import vkIcon from './img/vk_img.png';

function ProductPage() {
	return (
		<div className='ProductPage'>
			<div className='ProductPage-body'>
				<div className='ProductPage-label'>
					<a className='ProductPage-label-text'>Кружка “Белый Волк”</a>
				</div>
				<div className='ProductPage-path'>
					<a className='ProductPage-path-text'>
						Главная {'>'} Категории {'>'} Кружки
					</a>
				</div>
				<div className='ProductPage-product-card'>
					<div className='ProductPage-product-body'>
						<div className='ProductPage-product-div-image'>
							<img className='ProductPage-product-image' src={placeholder} />
						</div>
						<div className='ProductPage-product-description'>
							<a className='ProductPage-product-description-label'>Описание</a>
							<a className='ProductPage-product-description-text'>
								Few things are more dangerous than a hungry cyberpunk — perhaps
								only a cyberpsycho close to the edge! So, if you’ve been
								searching Night City for a byte-sized, high-tech snack, then
								this 1.5” zinc alloy wonder has you covered.
							</a>
							<a className='ProductPage-product-description-text'>
								This mouth-watering pin resembles a little-known delicacy of the
								dark future — one that would even tempt sleeper agent Solomon
								Reed out of the shadows.
							</a>
							<a className='ProductPage-product-description-text'>
								Whether you're a data-hungry netrunner or a flavor-loving street
								samurai, the Cyberpunk 2077: Cyber Quesadilla Pin is a must-have
								addition to your collection. Get ready to embrace your inner
								cyber-foodie!
							</a>
						</div>
					</div>
					<div className='ProductPage-product-block'>
						<div className='ProductPage-product-buy'>
							<div className='ProductPage-product-buy-content'>
								<a className='ProductPage-product-buy-cost'>$14.99</a>
								<a className='ProductPage-product-buy-width'>Ширина: 30см</a>
								<a className='ProductPage-product-buy-height'>Высота: 25см</a>
								<a className='ProductPage-product-buy-availability'>
									Наличие: отсутствует
								</a>
							</div>

							<input className='ProductPage-product-buy-amount'></input>
							<button className='ProductPage-product-buy-button'>
								Добавить в корзину
							</button>
						</div>
						<div className='ProductPage-product-share'>
							<a className='ProductPage-product-share-label'>Поделиться</a>
							<div className='ProductPage-product-share-links'>
								<img className='ProductPage-product-share-icon' src={vkIcon} />
								<img
									className='ProductPage-product-share-icon'
									src={telegramIcon}
								/>
								<img
									className='ProductPage-product-share-icon'
									src={instagramIcon}
								/>
							</div>
							<a className='ProductPage-product-share-shared-amount'>
								Уже поделилось: 1513
							</a>
						</div>
					</div>
				</div>

				<div className='ProductPage-see-also'>
					<p className='ProductPage-see-also-label'>Смотрите также</p>
					<div className='ProductPage-see-also-body'>
						<CardSetItem
							imageSrc={instagramIcon}
							labelText='Кружка "Белый волк"'
							priceText='$14.99'
						/>
						<CardSetItem
							imageSrc={instagramIcon}
							labelText='Кружка "Белый волк"'
							priceText='$14.99'
						/>
						<CardSetItem
							imageSrc={instagramIcon}
							labelText='Кружка "Белый волк"'
							priceText='$14.99'
						/>
						<CardSetItem
							imageSrc={instagramIcon}
							labelText='Кружка "Белый волк"'
							priceText='$14.99'
						/>
						<CardSetItem
							imageSrc={instagramIcon}
							labelText='Кружка "Белый волк"'
							priceText='$14.99'
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductPage;
