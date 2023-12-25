import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import CardSetItemVertical from '../../components/card_set_item_vertical/CardSetItemVertical';
import { fetchBasket } from '../../http/basketAPI';
import { Context } from '../../index';

import './css/Cart.css';

const NavMenu = observer(() => {
	const { user, basket } = useContext(Context);

	useEffect(() => {
		fetchBasket(100, 1, 0.1).then((data) => {
			basket.setProducts(data.rows);
			basket.setCost(data.cost);
		});
	}, []);

	const logOut = () => {
		user.setIsAuth(false);
		user.setUser({});
	};

	return (
		<div className='Cart-Main'>
			<div className='Cart-Main-Header'>Корзина</div>
			<div className='Cart-Main-ItemsAndCost'>
				<div className='Cart-Main-ItemsAndCost-Items'>
					{basket.products.map((product) => (
						<CardSetItemVertical
							product={product.product}
							quantity={product.quantity}
						/>
					))}
				</div>
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
						<button className='Purchase-Button'>Выйти</button>
					</div>
				</div>
			</div>
		</div>
	);
});

export default NavMenu;
