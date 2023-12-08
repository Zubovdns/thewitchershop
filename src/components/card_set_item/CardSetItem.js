import PropTypes from 'prop-types';
import React from 'react';
import './css/CardSetItem.css';

const CardSetItem = ({ imageSrc, labelText, priceText }) => {
	return (
		<div className='CardSetItem'>
			<div className='CardSetItem-content'>
				<img className='CardSetItem-content-image' src={imageSrc} />
				<div className='CardSetItem-content-label-content'>
					<p className='CardSetItem-content-label'>{labelText}</p>
					<p className='CardSetItem-content-price'>{priceText}</p>
				</div>
			</div>
		</div>
	);
};

CardSetItem.propTypes = {
	imageSrc: PropTypes.string.isRequired,
	labelText: PropTypes.string.isRequired,
	priceText: PropTypes.string.isRequired,
};

export default CardSetItem;
