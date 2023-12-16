import React, { useContext } from 'react';
import CardSetItemVertical from '../../components/card_set_item_vertical/CardSetItemVertical';
import { Context } from '../../index';
import image from '../main_screen/img/Placeholder_img.png';
import './css/Cart.css';

function NavMenu() {
	const { user } = useContext(Context);

	const logOut = () => {
		user.setIsAuth(false);
		user.setUser({});
	};

	return (
		<div className='Cart-Main'>
			<div className='Cart-Main-Header'>Корзина</div>
			<div className='Cart-Main-ItemsAndCost'>
				<div className='Cart-Main-ItemsAndCost-Items'>
					<CardSetItemVertical
						imageSrc={image}
						productText='Кружка "Белый Волк"'
						price='$14.99'
					/>
					<CardSetItemVertical
						imageSrc={image}
						productText='Кружка "Белый Волк"'
						price='$14.99'
					/>
					<CardSetItemVertical
						imageSrc={image}
						productText='Кружка "Белый Волк"'
						price='$14.99'
					/>
					<CardSetItemVertical
						imageSrc={image}
						productText='Кружка "Белый Волк"'
						price='$14.99'
					/>
					<CardSetItemVertical
						imageSrc={image}
						productText='Кружка "Белый Волк"'
						price='$14.99'
					/>
				</div>
				<div className='Cart-Main-ItemsAndCost-Cost'>
					<div className='Cost-TopText'>
						<p className='Cost'>Стоимость: $34.99</p>
						<p className='Sale'>Скидка: $4.99</p>
						<p className='Payment'>К оплате: $30.00</p>
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
}

export default NavMenu;
