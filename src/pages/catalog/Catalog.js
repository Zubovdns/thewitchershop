import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import ProductList from '../../components/product_list/ProductList';
import Types from '../../components/types/Types';
import { fetchCategories, fetchProducts } from '../../http/productAPI';
import { Context } from '../../index';
import './css/Catalog.css';

const Catalog = observer(() => {
	const { product } = useContext(Context);

	useEffect(() => {
		fetchCategories().then((data) => product.setTypes(data));
		fetchProducts(null, 100, 1).then((data) => {
			product.setProducts(data.rows);
			product.setTotalCount(data.count);
		});
	}, []);

	useEffect(() => {
		fetchProducts(product.selectedType.id, 100, 1).then((data) => {
			product.setProducts(data.rows);
			product.setTotalCount(data.count);
		});
	}, [product.selectedType]);

	return (
		<div className='Catalog-Main'>
			<div className='Catalog-Main-Poster'>
				<p className='Catalog-Main-Poster-Top'>Black Friday</p>
				<hr className='Catalog-Main-Poster-Line'></hr>
				<p className='Catalog-Main-Poster-Bottom'>90% OFF</p>
			</div>
			<div className='Catalog-Main-Header'>Каталог</div>
			<div className='Catalog-Main-ItemsAndFilters'>
				<ProductList />
				<div className='Catalog-Main-ItemsAndFilters-Filters'>
					<div className='Catalog-Main-ItemsAndFilters-Filters-Header'>
						Фильтры
					</div>
					<div className='Catalog-Main-ItemsAndFilters-Filters-CheckBox'>
						<label className='container'>
							В наличии
							<input type='checkbox'></input>
							<span className='checkmark'></span>
						</label>
					</div>
					<div className='Catalog-Main-ItemsAndFilters-Filters-Category'>
						<Types />
					</div>
				</div>
			</div>
		</div>
	);
});

export default Catalog;
