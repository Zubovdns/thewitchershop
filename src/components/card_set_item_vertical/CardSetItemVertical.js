import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { deleteProductFromBasket } from '../../http/basketAPI';
import './css/CardSetItemVertical.css';

const CardSetItemVertical = observer(({ product, quantity }) => {
	const [value, setValue] = useState(quantity);

	const handleValueChange = (event) => {
		setValue(event.target.value);
	};

	const handleDelete = () => {
		deleteProductFromBasket(product.id);
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
				<input
					class='Quantity'
					type='number'
					min='1'
					max='99'
					value={value}
					onChange={handleValueChange}
				></input>
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
