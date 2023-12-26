import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCT_ROUTE } from '../../utils/consts';
import './css/CardSetItem.css';

const CardSetItem = ({ product }) => {
	return (
		<Link
			className='Link-to-catalog'
			to={PRODUCT_ROUTE + '/' + product.id}
			onClick={() => {
				window.scroll({ top: 0, left: 0, behavior: 'smooth' });
			}}
		>
			<div className='CardSetItem'>
				<div className='CardSetItem-content'>
					<div className='CardSetItem-content-image-div'>
						<img
							className='CardSetItem-content-image'
							src={process.env.REACT_APP_API_URL + product.img}
						/>
					</div>
					<div className='CardSetItem-content-label-content'>
						<p className='CardSetItem-content-label'>{product.name}</p>
						<p className='CardSetItem-content-price'>{'$' + product.price}</p>
					</div>
				</div>
			</div>
		</Link>
	);
};

CardSetItem.propTypes = {
	product: PropTypes.object.isRequired,
};

export default CardSetItem;
