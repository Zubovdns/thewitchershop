import React, { useEffect, useState } from 'react';
import './css/Catalog.css';
import CardSetItem from '../../components/card_set_item/CardSetItem';
import image from '../main_screen/img/Placeholder_img.png';

function NavMenu() {
	return (
		<div className='Catalog-Main'>
			<div className='Catalog-Main-Poster'>
				<p className='Catalog-Main-Poster-Top'>Black Friday</p>
				<hr className='Catalog-Main-Poster-Line'></hr>
				<p className='Catalog-Main-Poster-Bottom'>90% OFF</p>
			</div>
			<div className='Catalog-Main-Header'>Каталог</div>
			<div className='Catalog-Main-ItemsAndFilters'>
				<div className='Catalog-Main-ItemsAndFilters-Items'>
					<CardSetItem
						imageSrc={image}
						labelText='Кружка "Белый волк"'
						priceText='$14.99'
					/>
					<CardSetItem
						imageSrc={image}
						labelText='Кружка "Белый волк"'
						priceText='$14.99'
					/>
					<CardSetItem
						imageSrc={image}
						labelText='Кружка "Белый волк"'
						priceText='$14.99'
					/>
					<CardSetItem
						imageSrc={image}
						labelText='Кружка "Белый волк"'
						priceText='$14.99'
					/>
					<CardSetItem
						imageSrc={image}
						labelText='Кружка "Белый волк"'
						priceText='$14.99'
					/>
					<CardSetItem
						imageSrc={image}
						labelText='Кружка "Белый волк"'
						priceText='$14.99'
					/>
					<CardSetItem
						imageSrc={image}
						labelText='Кружка "Белый волк"'
						priceText='$14.99'
					/>
					<CardSetItem
						imageSrc={image}
						labelText='Кружка "Белый волк"'
						priceText='$14.99'
					/>
					<CardSetItem
						imageSrc={image}
						labelText='Кружка "Белый волк"'
						priceText='$14.99'
					/>
				</div>
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
						<div className='custom-select'>
							<select>
								<option value=''>Выбрать категорию</option>
								<option value=''>Кружки</option>
								<option value=''>Фигурки</option>
								<option value=''>Брелки</option>
							</select>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default NavMenu;
