import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Context } from '../../index';
import './css/Types.css';

const Types = observer(() => {
	const { product } = useContext(Context);
	return (
		<div>
			<p
				className='Catalog-Main-ItemsAndFilters-Filters-Category-text'
				key={0}
				onClick={() => {
					product.setSelectedType(null);
				}}
			>
				Все
			</p>
			{product.types.map((type) => (
				<p
					className='Catalog-Main-ItemsAndFilters-Filters-Category-text'
					key={type.id}
					onClick={() => {
						product.setSelectedType(type);
					}}
				>
					{type.name}
				</p>
			))}
		</div>
	);
});

export default Types;
