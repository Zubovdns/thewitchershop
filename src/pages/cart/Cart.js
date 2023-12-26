import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import CardSetItemVertical from '../../components/card_set_item_vertical/CardSetItemVertical';
import { fetchBasket } from '../../http/basketAPI';
import { Context } from '../../index';
import basketEmpty from './img/witcher_basket_empty_img.png';

import './css/Cart.css';

const NavMenu = observer(() => {
	const { user, basket } = useContext(Context);
	const [check, setCheck] = useState(false);

	const updateBasket = async () => {
		try {
			const data = await fetchBasket(100, 1, 0.1);
			basket.setProducts(data.rows);
			basket.setCost(data.cost);
			basket.setAmount(data.amount);
		} catch (error) {
			console.error('Error updating basket:', error);
		}
	};

	const onCheck = () => {
		setCheck(true);
	};

	useEffect(() => {
		updateBasket();
	}, []);

	useEffect(() => {
		updateBasket();
		setCheck(false);
	}, [check]);

	const logOut = () => {
		user.setIsAuth(false);
		user.setUser({});
	};

	return (
		<div className='Cart-Main'>
			<div className='Cart-Main-Header'>Корзина</div>
			<div className='Cart-Main-ItemsAndCost'>
				{basket.amount ? (
					<div className='Cart-Main-ItemsAndCost-Items'>
						{basket.products.map((product) => (
							<CardSetItemVertical
								key={product.product.id}
								product={product.product}
								quantity={product.quantity}
								onCheck={onCheck}
							/>
						))}
					</div>
				) : (
					<div className='Cart-Main-ItemsAndCost-Items-Empty'>
						<img
							className='Cart-Main-ItemsAndCost-Items-Empty-Image'
							src={basketEmpty}
						/>
						<p className='Cart-Main-ItemsAndCost-Items-Empty-Text'>
							Упс. Похоже здесь ничего нет.
						</p>
					</div>
				)}
				<div className='Cart-Main-ItemsAndCost-Cost'>
					<div className='Cost-TopText'>
						<p className='Cost'>Стоимость: ${basket.cost.firstCost}</p>
						<p className='Sale'>Скидка: ${basket.cost.discount}</p>
						<p className='Payment'>К оплате: ${basket.cost.totalCost}</p>
					</div>
					<div className='Cost-PurchaseButton'>
						<button className='Purchase-Button'>Заказать</button>
					</div>
					<div
						className='Cost-PurchaseButton'
						onClick={() => {
							logOut();
						}}
					>
						<button className='Quit-Button'>Выйти</button>
					</div>
				</div>
			</div>
		</div>
	);
});

export default NavMenu;
