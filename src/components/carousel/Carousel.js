import { Children, cloneElement, useEffect, useState } from 'react';
import './css/Carousel.css';
import chevronLeft from './img/chevron_left_svg.svg';
import chevronRight from './img/chevron_right_svg.svg';

const ITEM_WIDTH = 15;
const ITEM_MARGIN = 2;

export const Carousel = ({ children }) => {
	const [pages, setPages] = useState([]);
	const [offset, setOffset] = useState(0);

	const handleLeftArrowClick = () => {
		console.log('Left');
		setOffset((currentOffset) => {
			const newOffset = currentOffset + (ITEM_WIDTH + 2 * ITEM_MARGIN);

			console.log(newOffset, 0);

			return Math.min(newOffset, 0);
		});
	};
	const handleRightArrowClick = () => {
		console.log('Right');
		setOffset((currentOffset) => {
			const newOffset = currentOffset - (ITEM_WIDTH + 2 * ITEM_MARGIN);

			const maxOffset = -((ITEM_WIDTH + 2 * ITEM_MARGIN) * (pages.length - 4));

			console.log(newOffset, maxOffset);

			return Math.max(newOffset, maxOffset);
		});
	};

	useEffect(() => {
		setPages(
			Children.map(children, (child) => {
				return cloneElement(child, {
					style: {
						height: '90%',
						minWidth: `${ITEM_WIDTH}vw`,
						maxWidth: `${ITEM_WIDTH}vw`,
						margin: ` 0vw ${ITEM_MARGIN}vw 0vw ${ITEM_MARGIN}vw`,
					},
				});
			})
		);
	}, []);

	return (
		<div className='MainContainer'>
			<div className='MainContainer-arrow' onClick={handleLeftArrowClick}>
				<img className='MainContainer-arrow-image' src={chevronLeft} />
			</div>
			<div className='Window'>
				<div
					className='ItemsContainer'
					style={{ transform: `translateX(${offset}vw)` }}
				>
					{pages}
				</div>
			</div>
			<div className='MainContainer-arrow' onClick={handleRightArrowClick}>
				<img className='MainContainer-arrow-image' src={chevronRight} />
			</div>
		</div>
	);
};

export default Carousel;
