import { observer } from 'mobx-react-lite';
import React from 'react';
import { deleteProductFromBasket } from '../../http/basketAPI';
import './css/CardSetItemVertical.css';

const CardSetItemVertical = observer(({ product, quantity, onCheck }) => {
	const handleDelete = () => {
		deleteProductFromBasket(product.id)
			.then(() => {
				onCheck();
			})
			.catch((error) => {
				console.error('Error deleting product from basket:', error);
			});
	};

	return (
		<div className='CardSetItemVertical'>
			<div className='CardSetItemVertical-content'>
				<img
					className='CardSetItemVertical-content-image'
					src={process.env.REACT_APP_API_URL + product?.img}
				></img>
				<div className='CardSetItemVertical-content-label-content'>
					<p className='CardSetItemVertical-content-label'>{product?.name}</p>
					<p className='CardSetItemVertical-content-price'>
						{'$' + product?.price}
					</p>
				</div>

				<p className='CardSetItemVertical-content-price'>{quantity} шт.</p>
				<button
					className='CardSetItemVertical-content-button'
					onClick={handleDelete}
				>
					Удалить
				</button>
			</div>
		</div>
	);
});

export default CardSetItemVertical;
