import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Context } from '../../index';
import CardSetItem from '../card_set_item/CardSetItem';
import './css/ProductList.css';

const ProductList = observer(() => {
	const { product } = useContext(Context);
	return (
		<div className='Catalog-Main-ItemsAndFilters-Items'>
			{product.products.map((product) => (
				<CardSetItem key={product.id} product={product} />
			))}
		</div>
	);
});

export default ProductList;
