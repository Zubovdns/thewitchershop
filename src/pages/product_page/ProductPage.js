import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { addProductOnBasket } from '../../http/basketAPI';
import { fetchOneProduct } from '../../http/productAPI';
import { Context } from '../../index';
import './css/ProductPage.css';
import instagramIcon from './img/instagram_img.png';
import telegramIcon from './img/telegram_img.png';
import vkIcon from './img/vk_img.png';

function ProductPage() {
	const { user } = useContext(Context);

	const [isClicked, setIsClicked] = useState(false);
	const [value, setValue] = useState(1);
	const [product, setProduct] = useState({ info: [] });

	const { id } = useParams();
	useEffect(() => {
		fetchOneProduct(id).then((data) => setProduct(data));
	}, []);

	const handleValueChange = (event) => {
		setValue(event.target.value);
	};

	function handleClick() {
		addProductOnBasket(product.id, value).then(setIsClicked(true));
	}

	return (
		<div className='ProductPage'>
			<div className='ProductPage-body'>
				<div className='ProductPage-label'>
					<a className='ProductPage-label-text'>{product.name}</a>
				</div>
				<div className='ProductPage-path'>
					<a className='ProductPage-path-text'>
						Главная {'>'} Каталог {'>'} Кружки
					</a>
				</div>
				<div className='ProductPage-product-card'>
					<div className='ProductPage-product-body'>
						<div className='ProductPage-product-div-image'>
							<img
								className='ProductPage-product-image'
								src={process.env.REACT_APP_API_URL + product.img}
							/>
						</div>
						<div className='ProductPage-product-description'>
							<a className='ProductPage-product-description-label'>Описание</a>
							<a className='ProductPage-product-description-text'>
								{product.description}
							</a>
						</div>
					</div>
					<div className='ProductPage-product-block'>
						<div className='ProductPage-product-wrapper'>
							<div className='ProductPage-product-buy'>
								<div className='ProductPage-product-buy-content'>
									<a className='ProductPage-product-buy-cost'>
										{product.price + ' р.'}
									</a>
									{product.info.map((info) => (
										<a key={info.id} className='ProductPage-product-buy-width'>
											{info.title + ': ' + info.description}
										</a>
									))}
								</div>

								<input
									className='ProductPage-product-buy-amount'
									type='number'
									min='1'
									max='99'
									value={value}
									onChange={handleValueChange}
								></input>
								<button
									className={`ProductPage-product-buy-button ${
										isClicked ? 'ProductPage-product-buy-button-clicked' : ''
									}`}
									onClick={handleClick}
								>
									{isClicked ? 'В корзине' : 'Добавить в корзину'}
								</button>
							</div>
							<div className='ProductPage-product-share'>
								<a className='ProductPage-product-share-label'>Поделиться</a>
								<div className='ProductPage-product-share-links'>
									<img
										className='ProductPage-product-share-icon'
										src={vkIcon}
									/>
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
				</div>
			</div>
		</div>
	);
}

export default ProductPage;
