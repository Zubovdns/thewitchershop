import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Context } from '../../index';
import CardSetItem from '../card_set_item/CardSetItem';

const ProductList = observer(() => {
	const { product } = useContext(Context);
	return (
		<div className='Catalog-Main-ItemsAndFilters-Items'>
			<div className='Catalog-Main-ItemsAndFilters-Items'>
				{product.products.map((product) => (
					<CardSetItem key={product.id} product={product} />
				))}
			</div>
		</div>
	);
});

export default ProductList;
